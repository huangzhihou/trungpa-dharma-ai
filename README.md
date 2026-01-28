# Chögyam Trungpa 教法知识库

基于 Chögyam Trungpa 喇嘛著作的 AI 对话助手，使用智谱 AI API。

## 📚 内容

- 11 本书完整著作集
- 6,873 页内容
- 约 11.7 MB 文本数据

## 🚀 本地运行

```bash
cd trungpa-dharma-ai
npm install
npm run dev
```

访问: http://localhost:3000

## 🌐 部署到 Vercel（免费）

### 方法 1: 使用 Vercel CLI

```bash
# 1. 安装 Vercel CLI
npm i -g vercel

# 2. 登录 Vercel
vercel login

# 3. 部署
cd trungpa-dharma-ai
vercel

# 4. 添加环境变量
# 在部署过程中会提示添加 ZHIPU_API_KEY
# 输入: a3b94c17d28e4940b5102294f1d9cf61.uB51O7OoEEejjWlL
```

### 方法 2: 使用 Vercel Dashboard

1. 访问 https://vercel.com
2. 使用 GitHub 账号登录
3. 点击 "New Project"
4. 导入项目或拖拽文件夹
5. **重要：配置环境变量**
   - 找到 "Environment Variables" 部分
   - 添加：`ZHIPU_API_KEY` = `a3b94c17d28e4940b5102294f1d9cf61.uB51O7OoEEejjWlL`
6. 点击 "Deploy"

部署完成后，你会得到一个免费域名，例如：
- `trungpa-dharma-ai.vercel.app`

## ⚙️ 项目结构

```
trungpa-dharma-ai/
├── api/              # Vercel API 函数
│   └── chat.js       # 聊天 API
├── data/             # 提取的书籍数据
│   └── all-content.json
├── public/           # 前端界面
│   └── index-vercel.html
├── scripts/          # 工具脚本
│   └── extract-pdf.js
├── .env              # 环境变量（本地）
├── vercel.json       # Vercel 配置
└── package.json
```

## 💬 使用示例

- "什么是精神唯物主义？"
- "如何修习正念冥想？"
- "解释大手印的概念"
- "上师在修行中的作用是什么？"

## 🔧 技术栈

- **前端**: HTML + JavaScript
- **后端**: Vercel Serverless Functions (Node.js)
- **AI**: 智谱 GLM-4
- **PDF 解析**: pdf-parse
- **部署**: Vercel（免费）

## 📝 注意事项

1. **API Key 安全**: 不要在代码中硬编码 API Key，使用环境变量
2. **Vercel 免费额度**: 每月 100GB 流量，足够个人使用
3. **数据大小**: 当前约 12MB，在 Vercel 限制内

## 🆓 完全免费

- ✅ Vercel 部署：免费
- ✅ 域名：自动分配 .vercel.app 域名
- ✅ SSL 证书：自动配置
- ✅ CDN：全球加速

## 🤝 贡献

欢迎提出问题和建议！
