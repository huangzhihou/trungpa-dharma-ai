import fs from 'fs';
import path from 'path';
import axios from 'axios';

const DATA_DIR = path.join(process.cwd(), 'data');

// 加载所有书籍内容
let allBooks = [];

try {
  const mergedFile = path.join(DATA_DIR, 'all-content.json');
  if (fs.existsSync(mergedFile)) {
    allBooks = JSON.parse(fs.readFileSync(mergedFile, 'utf8'));
  }
} catch (error) {
  console.error('加载数据失败:', error.message);
}

// 搜索相关内容
function searchContent(query, topResults = 5) {
  const queryLower = query.toLowerCase();
  const results = [];

  allBooks.forEach(book => {
    const paragraphs = book.text.split(/\n+/).filter(p => p.trim().length > 50);

    paragraphs.forEach((para, index) => {
      const score = calculateRelevance(queryLower, para);
      if (score > 0) {
        results.push({
          book: book.filename,
          text: para.trim(),
          score: score
        });
      }
    });
  });

  return results
    .sort((a, b) => b.score - a.score)
    .slice(0, topResults);
}

// 简单的相关度计算
function calculateRelevance(query, text) {
  const words = query.split(/\s+/);
  const textLower = text.toLowerCase();

  let score = 0;
  words.forEach(word => {
    if (word.length > 2) {
      const regex = new RegExp(word, 'gi');
      const matches = textLower.match(regex);
      if (matches) {
        score += matches.length;
      }
    }
  });

  return score;
}

// 调用智谱AI API
async function callZhipuAI(messages, context = '') {
  const apiKey = process.env.ZHIPU_API_KEY;

  try {
    const systemPrompt = context
      ? `你是一位佛学知识助手，专门回答关于Chogyam Trungpa喇嘛教法的问题。

以下是相关资料：
${context}

请基于这些资料回答问题，如果资料中没有相关内容，请诚实说明。回答要准确、清晰，尊重原意。`
      : '你是一位佛学知识助手，专门回答关于Chogyam Trungpa喇嘛教法的问题。';

    const response = await axios({
      method: 'post',
      url: 'https://open.bigmodel.cn/api/paas/v4/chat/completions',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      data: {
        model: 'glm-4',
        messages: [
          { role: 'system', content: systemPrompt },
          ...messages
        ],
        temperature: 0.7,
        max_tokens: 2000
      }
    });

    return response.data.choices[0].message.content;
  } catch (error) {
    console.error('智谱AI调用错误:', error.response?.data || error.message);
    throw error;
  }
}

// Vercel Serverless Function
export default async function handler(req, res) {
  // 设置 CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: '方法不允许' });
  }

  try {
    const { message, history = [] } = req.body;

    if (!message) {
      return res.status(400).json({ error: '请提供消息' });
    }

    // 搜索相关内容
    const relevantContent = searchContent(message, 3);

    // 组合上下文
    let context = '';
    if (relevantContent.length > 0) {
      context = relevantContent.map((item, i) =>
        `[来源 ${i + 1}: ${item.book}]\n${item.text}`
      ).join('\n\n');
    }

    // 调用AI
    const messages = [
      ...history.slice(-10).map(h => ({
        role: h.role,
        content: h.content
      })),
      { role: 'user', content: message }
    ];

    const response = await callZhipuAI(messages, context);

    res.json({
      response: response,
      sources: relevantContent.map(item => item.book)
    });
  } catch (error) {
    console.error('聊天错误:', error);
    res.status(500).json({
      error: '抱歉，处理您的请求时出错了。请稍后再试。',
      details: error.message
    });
  }
}
