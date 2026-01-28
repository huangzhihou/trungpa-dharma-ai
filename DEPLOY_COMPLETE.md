# 🚀 完整部署指南 - Chögyam Trungpa 教法知识库

## ✅ 已完成

- [x] PDF 内容提取（11 本书，6,873 页）
- [x] 聊天 API 开发完成
- [x] 前端界面开发完成
- [x] 本地测试通过
- [x] Git 仓库初始化

---

## 📝 第 1 步：推送到 GitHub

### 方法 A：使用 Personal Access Token（推荐，快速）

1. **创建 Personal Access Token**
   - 访问：https://github.com/settings/tokens
   - 点击 "Generate new token" → "Generate new token (classic)"
   - 勾选权限：`repo`（全选）
   - 点击 "Generate token"
   - **复制这个 token**（只显示一次！保存好）

2. **打开终端，执行以下命令**

```bash
cd /Users/h/clawd/trungpa-dharma-ai

# 推送代码
git push -u origin main
```

3. **输入凭据**
   - Username: `huangzhihou`
   - Password: `粘贴刚才复制的 Personal Access Token`

推送成功后，访问：https://github.com/huangzhihou/trungpa-dharma-ai

---

### 方法 B：使用 SSH（更安全，长期使用）

1. **检查 SSH 密钥**
```bash
ls -la ~/.ssh
```

2. **如果已有密钥，复制公钥**
```bash
cat ~/.ssh/id_ed25519.pub
# 或
cat ~/.ssh/id_rsa.pub
```

3. **如果没有，创建新密钥**
```bash
ssh-keygen -t ed25519 -C "huangzhihou@github.com"
```

4. **添加到 GitHub**
   - 访问：https://github.com/settings/keys
   - 点击 "New SSH key"
   - 粘贴公钥内容
   - 点击 "Add SSH key"

5. **切换到 SSH 并推送**
```bash
cd /Users/h/clawd/trungpa-dharma-ai

# 切换到 SSH URL
git remote set-url origin git@github.com:huangzhihou/trungpa-dharma-ai.git

# 推送
git push -u origin main
```

---

## 🌐 第 2 步：在 Vercel 部署

### 1. 登录 Vercel

1. 访问：https://vercel.com
2. 点击 "Sign Up" 或 "Login"
3. 选择 **"Continue with GitHub"**
4. 授权 Vercel 访问你的 GitHub

### 2. 导入项目

1. 点击 **"Add New..."** → **"Project"**
2. 在列表中找到 `trungpa-dharma-ai` 仓库
3. 点击 **"Import"**

### 3. 配置项目

你会看到项目配置页面，确保以下设置：

**Framework Preset**: `Other`

**Build and Output Settings**:
- Build Command: (留空)
- Output Directory: (留空)

### 4. ⚠️ 重要：添加环境变量

在页面中找到 **Environment Variables** 部分，点击 **"Add New"**：

```
Name:  ZHIPU_API_KEY
Value: a3b94c17d28e4940b5102294f1d9cf61.uB51O7OoEEejjWlL
Environment: [✓] Production [✓] Preview [✓] Development (全部勾选)
```

### 5. 部署

1. 检查所有配置无误
2. 点击 **"Deploy"** 按钮
3. 等待 2-3 分钟（你会看到部署进度）

### 6. 完成访问

部署成功后，你会看到：
- 🎉 "Congratulations!" 消息
- 你的网站地址，例如：`https://trungpa-dharma-ai-xxxxx.vercel.app`
- 点击这个链接访问你的网站！

---

## 🧪 第 3 步：测试网站

打开你的 Vercel URL，尝试以下问题：

**测试问题 1：**
> 什么是精神唯物主义？

**测试问题 2：**
> 如何修习正念冥想？

**测试问题 3：**
> 解释大手印的概念

**测试问题 4：**
> 上师在修行中的作用是什么？

---

## 📊 项目信息

- **书数量**: 11 本
- **总页数**: 6,873 页
- **文本大小**: 约 11.7 MB
- **AI 模型**: 智谱 GLM-4
- **部署平台**: Vercel（免费）
- **域名**: 免费 .vercel.app 域名

---

## 💰 费用

**完全免费！**

- ✅ Vercel 部署：免费（每月 100GB 流量）
- ✅ 域名：免费 .vercel.app 域名
- ✅ SSL 证书：自动配置
- ✅ 全球 CDN：免费加速

个人使用完全够用！

---

## 🔧 常见问题

### Q: 推送 GitHub 失败，提示 "Authentication failed"？

**A:**
- 确保使用的是 Personal Access Token，而不是 GitHub 密码
- Token 需要有 `repo` 权限
- 复制时不要有多余的空格

### Q: Vercel 部署失败？

**A:**
- 检查环境变量 `ZHIPU_API_KEY` 是否正确
- 查看部署日志中的错误信息
- 确保代码已成功推送到 GitHub

### Q: 网站打开但无法回答问题？

**A:**
- 在 Vercel Dashboard 中查看 Functions 日志
- 检查 API 调用是否成功
- 确认智谱 AI API Key 有效

### Q: 响应很慢？

**A:**
- 首次加载需要时间（冷启动）
- 后续请求会更快
- 可以在 Vercel 中配置 Keep-alive

### Q: 想要自定义域名？

**A:**
1. 购买域名（可选）
2. 在 Vercel 项目中添加域名
3. 配置 DNS 记录
4. 不购买域名也完全可以使用免费的 .vercel.app

---

## 📞 需要帮助？

如果在部署过程中遇到问题，可以：

1. **查看部署日志**：Vercel Dashboard → 项目 → Deployments → 查看日志
2. **检查函数日志**：Vercel Dashboard → 项目 → Functions → 查看错误
3. **重新部署**：在 Vercel 中点击 "Redeploy"

---

## 🎉 完成！

恭喜你！部署成功后，你就有了一个：
- ✅ 基于 11 本书、6,873 页内容的 AI 问答网站
- ✅ 完全免费，永久使用
- ✅ 可以随时访问学习 Chögyam Trungpa 喇嘛的教法
- ✅ 可以分享给朋友使用

开始你的学习之旅吧！🙏

---

**最后检查清单：**

- [ ] 代码已推送到 GitHub
- [ ] Vercel 已登录并导入项目
- [ ] 环境变量 `ZHIPU_API_KEY` 已添加
- [ ] 项目已成功部署
- [ ] 网站可以正常访问
- [ ] 测试提问成功

全部完成就大功告成了！🚀
