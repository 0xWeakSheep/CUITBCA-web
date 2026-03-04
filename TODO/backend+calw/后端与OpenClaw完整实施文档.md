# 链协平台后端 + OpenClaw 完整实施文档（可执行版）

## 1. 目标

实现一个极简后端服务，支撑当前前端页面的真实能力：
- GitHub OAuth 登录鉴权
- 学员提交任务记录
- 接收 GitHub Webhook
- 调用 OpenClaw 进行代码评审
- 回写评审结果与统计数据
- 提供同学榜单（GitHub 列表、commit 次数、完成任务数）

说明：OpenClaw 与后端部署在同一服务器，OpenClaw 只内网访问。

---

## 2. 技术约束

- Node.js >= 20
- TypeScript
- Express
- Prisma + SQLite（首期）
- Cookie Session（HttpOnly）
- GitHub OAuth App
- GitHub Webhook（push + pull_request）

---

## 3. 后端目录结构

在仓库根目录新增 `backend/`：

```text
backend/
  package.json
  tsconfig.json
  prisma/
    schema.prisma
  src/
    index.ts
    config.ts
    middlewares/
      auth.ts
      error.ts
    modules/
      auth/
        auth.controller.ts
        auth.service.ts
      submissions/
        submissions.controller.ts
        submissions.service.ts
      webhook/
        github-webhook.controller.ts
        github-webhook.service.ts
      review/
        review.service.ts
      students/
        students.controller.ts
        students.service.ts
    lib/
      github.ts
      openclaw.ts
      session.ts
      crypto.ts
```

---

## 4. 数据库设计（Prisma）

```prisma
model User {
  id          String   @id @default(cuid())
  githubId    String   @unique
  githubLogin String   @unique
  name        String?
  avatarUrl   String?
  createdAt   DateTime @default(now())

  submissions Submission[]
}

model Submission {
  id              String   @id @default(cuid())
  userId          String
  taskId          String
  repoUrl         String
  targetRef       String
  note            String?
  status          SubmissionStatus @default(submitted)
  createdAt       DateTime @default(now())
  updatedAt       DateTime @updatedAt

  user            User @relation(fields: [userId], references: [id])
  reviews         Review[]

  @@index([userId, taskId])
}

model Review {
  id            String   @id @default(cuid())
  submissionId  String
  provider      String
  model         String?
  score         Int
  decision      ReviewDecision
  confidence    Float
  summary       String
  rawJson       String
  createdAt     DateTime @default(now())

  submission    Submission @relation(fields: [submissionId], references: [id])

  @@index([submissionId])
}

model WebhookEvent {
  id            String   @id @default(cuid())
  deliveryId    String   @unique
  eventType     String
  repoFullName  String
  payloadJson   String
  processedAt   DateTime?
  createdAt     DateTime @default(now())
}

enum SubmissionStatus {
  submitted
  ai_reviewing
  approved
  rejected
  pending_manual_review
}

enum ReviewDecision {
  approved
  rejected
  pending_manual_review
}
```

---

## 5. API 设计（必须实现）

### 5.1 鉴权
- `GET /api/auth/github/start`
- `GET /api/auth/github/callback`
- `GET /api/auth/me`
- `POST /api/auth/logout`

### 5.2 提交
- `POST /api/submissions`
- `GET /api/submissions/me`

### 5.3 Webhook
- `POST /api/integrations/github/webhook`

### 5.4 审核管理
- `POST /api/reviews/:submissionId/override`

### 5.5 榜单
- `GET /api/students/progress`

---

## 6. 鉴权细节（必须）

- 使用 GitHub OAuth code flow。
- 回调地址：`{APP_URL}/api/auth/github/callback`
- session 使用签名 cookie：
  - `httpOnly=true`
  - `sameSite=lax`
  - `secure` 在生产开启
- 必须验证 OAuth `state` 防 CSRF。

---

## 7. Webhook 处理细节（必须）

1. 校验 `X-Hub-Signature-256`（HMAC SHA256）。
2. 读取 `X-GitHub-Delivery`，按 `deliveryId` 幂等入库。
3. 只处理 `push` / `pull_request`。
4. 从 payload 取：
   - `repo.full_name`
   - `sender.login`
   - `after`(commit sha)
5. 根据 `repoUrl + githubLogin + targetRef` 匹配最近一条 `submitted`/`ai_reviewing` 的 submission。
6. 匹配到后：
   - 状态置为 `ai_reviewing`
   - 调 OpenClaw
   - 写 Review
   - 按规则更新 Submission 状态

---

## 8. OpenClaw 调用约定（必须）

后端调用（示例）：
- `POST {OPENCLAW_BASE_URL}/v1/review`

请求体：
```json
{
  "taskId": "task-3",
  "repoUrl": "https://github.com/user/repo",
  "targetRef": "a1b2c3d4",
  "rubric": [
    "核心功能是否实现",
    "代码结构与可读性",
    "异常处理",
    "文档完整性"
  ]
}
```

响应体（约束为结构化 JSON）：
```json
{
  "score": 78,
  "confidence": 0.82,
  "decision": "approved",
  "summary": "核心功能完整，边界处理尚可。",
  "issues": ["建议补充测试覆盖"],
  "model": "openclaw-default"
}
```

状态规则：
- `score >= AI_SCORE_THRESHOLD && confidence >= AI_CONFIDENCE_THRESHOLD` -> `approved`
- `score < AI_SCORE_THRESHOLD && confidence >= AI_CONFIDENCE_THRESHOLD` -> `rejected`
- 其他 -> `pending_manual_review`

---

## 9. 榜单统计口径（必须）

- `commitCount`：按 webhook push 中 commit 数累加到对应 `githubLogin`。
- `completedTaskCount`：该用户 `Submission.status=approved` 的去重 task 数。
- `totalTaskCount`：固定任务总数（当前 5）。
- 返回字段：
```json
{
  "items": [
    {
      "id": "user-id",
      "name": "张同学",
      "githubLogin": "zhang-dev",
      "repoUrl": "https://github.com/zhang-dev/repo",
      "commitCount": 128,
      "completedTaskCount": 4,
      "totalTaskCount": 5,
      "lastActiveAt": "2026-03-04"
    }
  ],
  "total": 1
}
```

---

## 10. 环境变量

```bash
APP_URL=http://localhost:3000
BACKEND_PORT=3001

GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=
GITHUB_WEBHOOK_SECRET=

SESSION_SECRET=replace-with-long-random-string

DATABASE_URL=file:./dev.db

OPENCLAW_BASE_URL=http://127.0.0.1:8088
OPENCLAW_API_KEY=
AI_SCORE_THRESHOLD=70
AI_CONFIDENCE_THRESHOLD=0.7
```

---

## 11. 开发步骤（按顺序执行）

1. 初始化 `backend` 工程 + Prisma。
2. 实现 OAuth 与 session。
3. 实现 `/api/submissions` 与 `/api/submissions/me`。
4. 实现 webhook 验签与幂等。
5. 接入 OpenClaw 评审 + 状态流转。
6. 实现 `/api/students/progress` 统计聚合。
7. 编写基础测试：
   - OAuth 回调成功/失败
   - webhook 验签通过/失败
   - 幂等重复 delivery 不重复处理
   - review 状态流转正确

---

## 12. 验收标准（必须全部满足）

- GitHub 登录可在前端 `/platform/enroll` 成功完成。
- 未登录状态无法提交任务。
- push 到仓库后 webhook 能触发并落库。
- OpenClaw 返回结果后，submission 状态正确更新。
- `/api/students/progress` 能返回真实统计，前端榜单可直接展示。
- 关键失败路径有明确错误日志。

---

## 13. 部署建议（同机）

- OpenClaw: `127.0.0.1:8088`
- Backend: `0.0.0.0:3001`
- 前端 Next.js: `0.0.0.0:3000`
- Nginx：
  - `/api/*` -> backend:3001
  - `/` -> frontend:3000
  - OpenClaw 不暴露公网

