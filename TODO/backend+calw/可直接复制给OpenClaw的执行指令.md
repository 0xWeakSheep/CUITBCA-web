# 给 OpenClaw 的执行指令（可直接复制）

你是一个高级全栈工程师，请在当前仓库中完成“链协平台极简后端”开发，要求与前端已存在页面对齐。

## 目标
实现 GitHub 登录鉴权 + 提交存储 + GitHub webhook + OpenClaw 自动评审 + 同学榜单统计接口。

## 强制要求
1. 在仓库根目录新增 `backend/` Node.js + TypeScript + Express + Prisma 项目。
2. 数据库使用 SQLite，schema 按《后端与OpenClaw完整实施文档.md》实现。
3. 必须实现以下接口：
- `GET /api/auth/github/start`
- `GET /api/auth/github/callback`
- `GET /api/auth/me`
- `POST /api/auth/logout`
- `POST /api/submissions`
- `GET /api/submissions/me`
- `POST /api/integrations/github/webhook`
- `POST /api/reviews/:submissionId/override`
- `GET /api/students/progress`
4. OAuth 必须有 `state` 防 CSRF，session 必须是 HttpOnly 签名 cookie。
5. webhook 必须做 `X-Hub-Signature-256` 验签与 `X-GitHub-Delivery` 幂等处理。
6. OpenClaw 评审结果必须写入数据库并更新 submission 状态。
7. 输出 OpenAPI 文档与 `.env.example`。
8. 输出可运行脚本：`npm run dev`、`npm run build`、`npm run test`。

## 与前端联调要求
- 前端已调用 `/api/auth/me` 检查登录态。
- 前端报名页需要 GitHub 登录成功后才能提交。
- 前端榜单页面需要 `/api/students/progress` 返回真实数据。

## 评审状态规则
- `score >= AI_SCORE_THRESHOLD && confidence >= AI_CONFIDENCE_THRESHOLD` => `approved`
- `score < AI_SCORE_THRESHOLD && confidence >= AI_CONFIDENCE_THRESHOLD` => `rejected`
- 其他 => `pending_manual_review`

## 输出要求
1. 完整代码。
2. Prisma migration。
3. API 示例请求。
4. 最小测试用例。
5. 本地运行步骤。

完成后请给出：
- 新增/修改文件清单
- 启动命令
- curl 联调命令

