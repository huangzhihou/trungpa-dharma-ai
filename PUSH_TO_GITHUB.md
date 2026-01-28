# 推送代码到 GitHub

## 方法 1：使用 GitHub Personal Access Token（推荐）

### 第 1 步：创建 Personal Access Token

1. 访问 https://github.com/settings/tokens
2. 点击 **"Generate new token"** → **"Generate new token (classic)"**
3. 勾选权限：`repo`（全选）
4. 点击 **"Generate token"**
5. **复制这个 token**（只显示一次，保存好！）

### 第 2 步：推送到 GitHub

```bash
cd trungpa-dharma-ai

# 推送时会要求输入密码
# 用户名：huangzhihou
# 密码：粘贴刚才创建的 Personal Access Token（不是 GitHub 密码！）
git push -u origin main
```

---

## 方法 2：使用 SSH 密钥（更安全，长期使用）

### 第 1 步：检查是否有 SSH 密钥

```bash
ls -la ~/.ssh
```

如果看到 `id_rsa.pub` 或 `id_ed25519.pub`，说明已有密钥。

### 第 2 步：创建 SSH 密钥（如果没有）

```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
# 按 Enter 接受默认位置
# 可以设置密码或直接按 Enter 跳过
```

### 第 3 步：添加到 GitHub

```bash
# 复制公钥
cat ~/.ssh/id_ed25519.pub
```

1. 访问 https://github.com/settings/keys
2. 点击 **"New SSH key"**
3. 粘贴刚才复制的公钥
4. 点击 **"Add SSH key"**

### 第 4 步：使用 SSH 推送

```bash
cd trungpa-dharma-ai

# 切换到 SSH URL
git remote set-url origin git@github.com:huangzhihou/trungpa-dharma-ai.git

# 推送
git push -u origin main
```

---

## 推送成功后

代码已经在 GitHub 上：https://github.com/huangzhihou/trungpa-dharma-ai

然后继续下一步：**Vercel 部署**
