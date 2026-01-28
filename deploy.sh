#!/bin/bash

# 自动化部署脚本 - Chögyam Trungpa 教法知识库
# 使用方法: bash deploy.sh

set -e  # 遇到错误立即退出

echo "========================================="
echo "  🚀 自动化部署 - Trungpa Dharma AI"
echo "========================================="
echo ""

# 颜色定义
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# 检查当前目录
PROJECT_DIR="/Users/h/clawd/trungpa-dharma-ai"
cd "$PROJECT_DIR" || exit 1

echo -e "${GREEN}✓${NC} 进入项目目录: $PROJECT_DIR"
echo ""

# 步骤 1: 检查 Git 仓库
echo "========================================="
echo "  步骤 1: 检查 Git 仓库"
echo "========================================="
if [ -d ".git" ]; then
    echo -e "${GREEN}✓${NC} Git 仓库已初始化"
else
    echo -e "${RED}✗${NC} Git 仓库未初始化"
    exit 1
fi
echo ""

# 步骤 2: 检查远程仓库
echo "========================================="
echo "  步骤 2: 检查远程仓库"
echo "========================================="
REMOTE_URL=$(git remote get-url origin 2>/dev/null || echo "")
if [ -z "$REMOTE_URL" ]; then
    echo "远程仓库未配置"
    echo "设置远程仓库: https://github.com/huangzhihou/trungpa-dharma-ai.git"
    git remote add origin https://github.com/huangzhihou/trungpa-dharma-ai.git
    echo -e "${GREEN}✓${NC} 远程仓库已设置"
else
    echo -e "${GREEN}✓${NC} 远程仓库已配置: $REMOTE_URL"
fi
echo ""

# 步骤 3: 检查是否有未提交的更改
echo "========================================="
echo "  步骤 3: 检查更改"
echo "========================================="
if [ -n "$(git status --porcelain)" ]; then
    echo "有未提交的更改，正在提交..."
    git add .
    git commit -m "Auto-commit: Prepare for deployment"
    echo -e "${GREEN}✓${NC} 更改已提交"
else
    echo -e "${GREEN}✓${NC} 没有未提交的更改"
fi
echo ""

# 步骤 4: 推送到 GitHub
echo "========================================="
echo "  步骤 4: 推送到 GitHub"
echo "========================================="
echo -e "${YELLOW}⚠${NC} 此步骤需要 GitHub 认证"
echo ""

# 检查 SSH 密钥
if [ -f ~/.ssh/id_ed25519.pub ]; then
    echo "检测到 SSH 密钥，尝试使用 SSH 推送..."
    git remote set-url origin git@github.com:huangzhihou/trungpa-dharma-ai.git
    if git push -u origin main 2>/dev/null; then
        echo -e "${GREEN}✓${NC} 推送成功（使用 SSH）"
    else
        echo "SSH 推送失败，尝试 HTTPS..."
        git remote set-url origin https://github.com/huangzhihou/trungpa-dharma-ai.git
        echo -e "${YELLOW}⚠${NC} 需要手动输入凭据"
        echo ""
        echo "请执行以下命令完成推送："
        echo "  cd $PROJECT_DIR"
        echo "  git push -u origin main"
        echo ""
        echo "输入:"
        echo "  Username: huangzhihou"
        echo "  Password: [你的 GitHub Personal Access Token]"
        echo ""
        exit 0
    fi
else
    echo "未检测到 SSH 密钥"
    echo ""
    echo -e "${YELLOW}⚠${NC} 需要手动完成推送"
    echo ""
    echo "请执行以下命令："
    echo "  cd $PROJECT_DIR"
    echo "  git push -u origin main"
    echo ""
    echo "输入:"
    echo "  Username: huangzhihou"
    echo "  Password: [你的 GitHub Personal Access Token]"
    echo ""
    echo "如果你还没有 Personal Access Token，请先创建："
    echo "  1. 访问: https://github.com/settings/tokens"
    echo "  2. 点击: Generate new token (classic)"
    echo "  3. 勾选: repo"
    echo "  4. 复制生成的 token"
    echo ""
    exit 0
fi
echo ""

# 步骤 5: 等待 Vercel 部署
echo "========================================="
echo "  步骤 5: Vercel 部署指南"
echo "========================================="
echo ""
echo "代码已推送到 GitHub！"
echo "现在需要在 Vercel 上完成部署："
echo ""
echo "1. 访问: https://vercel.com"
echo "2. 用 GitHub 账号登录"
echo "3. 点击: Add New → Project"
echo "4. 导入: trungpa-dharma-ai"
echo "5. 添加环境变量（重要！）:"
echo "   Name: ZHIPU_API_KEY"
echo "   Value: a3b94c17d28e4940b5102294f1d9cf61.uB51O7OoEEejjWlL"
echo "6. 点击: Deploy"
echo ""
echo -e "${GREEN}✓${NC} 部署准备完成！"
echo ""
