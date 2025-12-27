# CUITBCA Web 后端接口文档

## 概述

本文档描述了前端所需的后端接口规范。所有接口应返回 JSON 格式数据。

**基础 URL**: 根据实际部署情况配置（前端通过 `/api/members` 代理到后端）

---

## 1. 获取成员列表

### 接口信息

- **接口路径**: `/api/members` 或后端实际路径（如 `/members`）
- **请求方法**: `GET`
- **接口描述**: 获取协会核心成员列表

### 请求参数

无

### 响应格式

**成功响应 (200 OK)**

返回成员数组，如果没有任何成员，返回空数组 `[]`。

```json
[
  {
    "id": 1,
    "name": "张明",
    "role": "主席",
    "bio": "区块链技术爱好者，专注智能合约开发",
    "contact": "zhangming@example.com",
    "email": "zhangming@example.com",
    "avatar": "https://example.com/avatars/zhangming.jpg",
    "color": "from-blue-400 to-blue-600",
    "noiseBackground": "/noise.png",
    "linkedin": "https://linkedin.com/in/zhangming",
    "twitter": "https://twitter.com/zhangming",
    "skills": ["Blockchain", "Smart Contracts", "Solidity"]
  },
  {
    "id": 2,
    "name": "李芳",
    "role": "副主席",
    "bio": "数据分析专家，致力于区块链数据研究",
    "contact": "lifang@example.com",
    "color": "from-emerald-400 to-emerald-600"
  },
  {
    "id": 3,
    "name": "王伟",
    "role": "技术负责人",
    "avatar": "https://example.com/avatars/wangwei.jpg",
    "linkedin": "https://linkedin.com/in/wangwei",
    "skills": ["Full Stack", "Web3"]
  }
]
```

**错误响应 (500 Internal Server Error)**

```json
{
  "error": "Failed to fetch members"
}
```

### 字段说明

所有字段均为**可选字段**，如果后端不传递某个字段，前端对应的UI元素将不会显示。

| 字段名 | 类型 | 必填 | 说明 | 示例 |
|--------|------|------|------|------|
| `id` | `string \| number` | 否 | 成员唯一标识符 | `1` 或 `"member-001"` |
| `name` | `string` | 否 | 成员姓名 | `"张明"` |
| `role` | `string` | 否 | 成员职位/角色 | `"主席"`、`"副主席"` |
| `bio` | `string` | 否 | 成员简介/个人描述 | `"区块链技术爱好者，专注智能合约开发"` |
| `contact` | `string` | 否 | 联系方式（通常为邮箱） | `"zhangming@example.com"` |
| `email` | `string` | 否 | 邮箱地址（优先使用此字段，如果没有则使用contact） | `"zhangming@example.com"` |
| `avatar` | `string` | 否 | 头像图片URL（完整URL或相对路径） | `"https://example.com/avatar.jpg"` 或 `"/images/avatar.jpg"` |
| `color` | `string` | 否 | 渐变背景颜色类名（当没有avatar时使用） | `"from-blue-400 to-blue-600"` |
| `noiseBackground` | `string` | 否 | 背景噪点图片URL | `"/noise.png"` |
| `linkedin` | `string` | 否 | LinkedIn个人主页链接 | `"https://linkedin.com/in/username"` |
| `twitter` | `string` | 否 | Twitter个人主页链接 | `"https://twitter.com/username"` |
| `skills` | `string[]` | 否 | 技能标签数组 | `["Blockchain", "Smart Contracts"]` |

### 显示逻辑说明

1. **成员卡片显示条件**: 至少需要 `name` 或 `id` 字段，否则该成员卡片不会显示
2. **头像/背景区域**: 
   - 如果提供了 `avatar`，显示头像图片
   - 如果没有 `avatar` 但提供了 `color`，显示渐变背景
   - 如果两者都没有，不显示图片区域
3. **社交链接图标**: 只有提供了对应的链接字段（`linkedin`、`twitter`、`email`/`contact`）才会显示
4. **技能标签**: 只有提供了 `skills` 数组且不为空时才会显示
5. **内容区域**: 如果没有任何内容字段（`name`、`role`、`bio`、`skills`），内容区域不显示

### 请求示例

```bash
# 使用 curl
curl -X GET https://api.example.com/members

# 使用 fetch (前端)
fetch('/api/members')
  .then(response => response.json())
  .then(data => console.log(data));
```

### 响应示例场景

**场景1: 完整数据**
```json
[
  {
    "id": 1,
    "name": "张明",
    "role": "主席",
    "bio": "区块链技术爱好者，专注智能合约开发",
    "email": "zhangming@example.com",
    "avatar": "https://example.com/avatars/zhangming.jpg",
    "linkedin": "https://linkedin.com/in/zhangming",
    "twitter": "https://twitter.com/zhangming",
    "skills": ["Blockchain", "Smart Contracts"]
  }
]
```
**前端显示**: 完整的成员卡片，包含头像、姓名、职位、简介、社交链接和技能标签

**场景2: 部分数据**
```json
[
  {
    "id": 2,
    "name": "李芳",
    "role": "副主席"
  }
]
```
**前端显示**: 只显示姓名和职位的简化卡片，没有头像、简介、社交链接和技能标签

**场景3: 空数据**
```json
[]
```
**前端显示**: 显示"暂无成员信息"

**场景4: 只有头像，没有其他信息**
```json
[
  {
    "id": 3,
    "avatar": "https://example.com/avatar.jpg"
  }
]
```
**前端显示**: 只显示头像区域，不显示内容区域（因为没有name、role、bio、skills）

---

## 2. 接口规范要求

### HTTP 状态码

- `200 OK`: 请求成功，返回数据
- `500 Internal Server Error`: 服务器内部错误

### 响应时间

建议接口响应时间 < 500ms

### 数据格式

- 所有接口返回 JSON 格式
- 字符编码: UTF-8
- Content-Type: `application/json`

### 错误处理

当发生错误时，应返回如下格式：

```json
{
  "error": "错误描述信息"
}
```

### CORS 配置

如果前端和后端不在同一域名，需要配置 CORS：

```
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS
Access-Control-Allow-Headers: Content-Type, Authorization
```

---

## 3. 注意事项

1. **字段可选性**: 所有字段都是可选的，前端会根据字段是否存在来决定是否显示对应的UI元素
2. **空数组处理**: 如果没有成员数据，返回空数组 `[]`，不要返回 `null` 或 `undefined`
3. **图片URL**: `avatar` 和 `noiseBackground` 字段应提供完整的URL或相对于前端的路径
4. **颜色格式**: `color` 字段应使用 Tailwind CSS 的渐变类名格式，如 `"from-blue-400 to-blue-600"`
5. **技能数组**: `skills` 应为字符串数组，如果为空数组或不存在，前端不会显示技能标签区域
6. **唯一标识**: 建议每个成员都有唯一的 `id` 字段，用于 React 的 key 属性

---

## 4. 测试建议

### 测试用例

1. **正常数据测试**: 返回包含所有字段的完整数据
2. **部分数据测试**: 返回只包含部分字段的数据
3. **空数据测试**: 返回空数组 `[]`
4. **错误处理测试**: 返回 500 错误，验证前端是否正确处理

### 测试数据示例

```json
// 测试用例1: 完整数据
{
  "id": 1,
  "name": "测试成员",
  "role": "测试职位",
  "bio": "这是测试简介",
  "email": "test@example.com",
  "avatar": "https://example.com/test.jpg",
  "color": "from-blue-400 to-blue-600",
  "linkedin": "https://linkedin.com/in/test",
  "twitter": "https://twitter.com/test",
  "skills": ["测试技能1", "测试技能2"]
}

// 测试用例2: 最小数据（只有name）
{
  "id": 2,
  "name": "最小数据成员"
}

// 测试用例3: 只有头像
{
  "id": 3,
  "avatar": "https://example.com/avatar.jpg"
}
```

---

## 5. 后续扩展

如果未来需要添加以下功能，可能需要额外的接口：

- 获取单个成员详情: `GET /api/members/:id`
- 创建成员: `POST /api/members`
- 更新成员: `PUT /api/members/:id`
- 删除成员: `DELETE /api/members/:id`

当前版本只需要 `GET /api/members` 接口即可满足需求。

