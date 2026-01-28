# 快速部署指南（3分钟完成）

## 方法 1：Vercel 网页部署（最简单，推荐）

### 第 1 步：上传到 GitHub

```bash
# 1. 在 GitHub 上创建一个新仓库（例如：trungpa-dharma-ai）
#    - 访问 https://github.com/new
#    - 仓库名称：trungpa-dharma-ai
#    - 选择 Public 或 Private（Private 更安全）
#    - 不要勾选任何初始化选项
#    - 点击 "Create repository"

# 2. 添加远程仓库（替换 YOUR_USERNAME 为你的 GitHub 用户名）
cd trungpa-dharma-ai
git remote add origin https://github.com/YOUR_USERNAME/trungpa-dharma-ai.git

# 3. 推送代码
git branch -M main
git push -u origin main
```

### 第 2 步：在 Vercel 部署

1. 访问 https://vercel.com
2. 点击 "Sign Up" 或 "Login"，使用 **GitHub** 账号登录
3. 登录后，点击 **"Add New..."** → **"Project"**
4. 你会看到 `trungpa-dharma-ai` 仓库，点击 **"Import"**

### 第 3 步：配置环境变量（重要！）

在项目配置页面，找到 **Environment Variables** 部分：

点击 **"Add New"**，添加：
- **Name**: `ZHIPU_API_KEY`
- **Value**: `a3b94c17d28e4940b5102294f1d9cf61.uB51O7OoEEejjWlL`
- **Environment**: 选择 `Production`, `Preview`, `Development`（全部勾选）

### 第 4 步：部署

1. 确认配置无误后，点击 **"Deploy"**
2. 等待 2-3 分钟，部署完成后会显示你的网站地址
3. 点击访问：`https://trungpa-dharma-ai-xxxxx.vercel.app`

---

## 方法 2：Vercel CLI 部署（需要先安装 CLI）

```bash
# 1. 安装 Vercel CLI（已完成）
npm i -g vercel

# 2. 登录 Vercel
vercel login

# 3. 进入项目目录
cd trungpa-dharma-ai

# 4. 部署
vercel

# 5. 配置环境变量（部署时会提示）
# ZHIPU_API_KEY = a3b94c17d28e4940b5102294f1d9cf61.uB51O7OoEEejjWlL

# 6. 生产环境部署
vercel --prod
```

---

## 测试网站

部署完成后，在浏览器中打开你的 Vercel URL，尝试以下问题：

- "什么是精神唯物主义？"
- "如何修习正念冥想？"
- "解释大手印的概念"

## 常见问题

**Q: 部署失败怎么办？**
A: 检查环境变量是否正确配置，确保 `ZHIPU_API_KEY` 完整且正确。

**Q: 网站打开但无法回答问题？**
A: 检查 Vercel 的函数日志，确认 API 调用是否成功。

**Q: 响应很慢？**
A: 首次加载需要时间，Vercel 有冷启动。后续请求会更快。

---

## 费用

**完全免费！**
- ✅ Vercel 免费版：每月 100GB 流量
- ✅ 域名：免费 .vercel.app 域名
- ✅ SSL 证书：自动配置

个人使用完全够用！
