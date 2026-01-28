# 🎯 快速操作清单

## 📝 你需要做的事情（5分钟搞定）

### 步骤 1：推送到 GitHub（2分钟）

打开你的终端，复制粘贴以下命令：

```bash
cd /Users/h/clawd/trungpa-dharma-ai
git push -u origin main
```

**输入密码时：**
- Username: `huangzhihou`
- Password: 粘贴你的 GitHub Personal Access Token（或密码）

**⚠️ 如果还没有 Personal Access Token：**
1. 访问 https://github.com/settings/tokens
2. 点击 "Generate new token" → "Generate new token (classic)"
3. 勾选 `repo` 权限
4. 生成后复制 token，作为密码使用

---

### 步骤 2：Vercel 部署（3分钟）

1. **访问 Vercel**
   - 打开浏览器：https://vercel.com
   - 用 GitHub 账号登录

2. **导入项目**
   - 点击 "Add New..." → "Project"
   - 找到 `trungpa-dharma-ai` 仓库
   - 点击 "Import"

3. **添加环境变量（重要！）**
   ```
   Name:  ZHIPU_API_KEY
   Value: a3b94c17d28e4940b5102294f1d9cf61.uB51O7OoEEejjWlL
   ```

4. **部署**
   - 点击 "Deploy"
   - 等待 2-3 分钟

5. **访问网站**
   - 部署成功后会显示你的网站地址
   - 例如：`https://trungpa-dharma-ai-xxxxx.vercel.app`

---

## ✅ 完成后测试

打开你的网站，尝试这些问题：

1. 什么是精神唯物主义？
2. 如何修习正念冥想？
3. 解释大手印的概念

---

## 📚 完整文档

详细步骤和常见问题解答，请查看：

- `/Users/h/clawd/trungpa-dharma-ai/DEPLOY_COMPLETE.md`

---

**🚀 祝你部署成功！有任何问题随时告诉我！**
