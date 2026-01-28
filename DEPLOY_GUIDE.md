# 自动化部署说明

由于安全和授权的原因，部分操作必须由你亲自完成。但我已经把所有可能的步骤都自动化了！

## 🚀 一键部署（最简单）

只需要你做 **2 件事**，其余全部自动完成！

---

## 第 1 件事：推送到 GitHub（2分钟）

### 选项 A：如果你有 GitHub 账号密码或 Token

打开终端，执行：

```bash
cd /Users/h/clawd/trungpa-dharma-ai
git push -u origin main
```

输入：
- Username: `huangzhihou`
- Password: `你的 GitHub 密码或 Personal Access Token`

### 选项 B：如果没有，30秒创建一个 Token

1. **复制并打开这个链接**：https://github.com/settings/tokens
2. 点击 "Generate new token" → "Generate new token (classic)"
3. 勾选：**`repo`**
4. 点击 "Generate token"
5. **复制 token**（只显示一次！）
6. 返回终端，粘贴 token 作为密码

**⏱️ 整个过程：30 秒**

---

## 第 2 件事：Vercel 部署（3分钟）

### 1. 打开这个链接

**👉 直接点击：[https://vercel.com/new](https://vercel.com/new)**

### 2. 用 GitHub 登录

点击 "Continue with GitHub"

### 3. 导入项目

在仓库列表中找到 `trungpa-dharma-ai`，点击 **Import**

### 4. 添加环境变量（⚠️ 重要）

在页面中找到 "Environment Variables"，点击 "Add New"：

```
Name:  ZHIPU_API_KEY
Value: a3b94c17d28e4940b5102294f1d9cf61.uB51O7OoEEejjWlL
Environment: [✓] Production [✓] Preview [✓] Development
```

### 5. 点击 Deploy

等待 2-3 分钟，完成！

### 6. 访问网站

点击页面上的链接，例如：`https://trungpa-dharma-ai-xxxxx.vercel.app`

---

## ✅ 总耗时：5分钟

| 步骤 | 耗时 | 你的操作 |
|------|------|----------|
| 推送 GitHub | 2分钟 | 1个命令 + 输入凭据 |
| Vercel 部署 | 3分钟 | 点击几 + 配置变量 |

---

## 🎯 你做了什么？

✅ **只做了 2 件事：**
1. 推送代码到 GitHub（1个命令）
2. Vercel 网页部署（点击5-6次）

❌ **不需要做的（我都做了）：**
- 提取 PDF 内容 ✅
- 开发聊天 API ✅
- 开发前端界面 ✅
- 配置 Git 仓库 ✅
- 编写部署脚本 ✅
- 测试本地运行 ✅

---

## 📊 完成后你会得到

- 🌐 **免费网站**：`https://trungpa-dharma-ai-xxxxx.vercel.app`
- 📚 **AI 问答**：基于 11 本书，6,873 页内容
- 💰 **永久免费**：无需付费
- 🔒 **安全稳定**：Vercel 托管，全球加速

---

## 🧪 测试问题

打开网站，试试这些：

1. 什么是精神唯物主义？
2. 如何修习正念冥想？
3. 解释大手印的概念

---

## ❓ 为什么不能完全自动化？

**安全原因：**

1. **GitHub 认证**：推送代码必须凭据，无法自动获取
2. **Vercel 授权**：部署时必须你在浏览器中授权（OAuth）
3. **环境变量**：API Key 等敏感信息不能硬编码

这些都是为了保护你的账户安全。

---

## 🎉 开始吧！

**第 1 步**：打开终端，执行
```bash
cd /Users/h/clawd/trungpa-dharma-ai
git push -u origin main
```

**第 2 步**：打开 https://vercel.com/new 开始部署

**5分钟后你就有网站了！** 🚀
