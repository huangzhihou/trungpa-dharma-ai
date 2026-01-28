import fs from 'fs';
import path from 'path';
import pdf from 'pdf-parse';
import dotenv from 'dotenv';

dotenv.config();

const PDF_DIR = process.env.PDF_SOURCE_PATH;
const OUTPUT_DIR = './data';

// 确保输出目录存在
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// 提取单个PDF
async function extractPDF(filePath) {
  const dataBuffer = fs.readFileSync(filePath);
  const data = await pdf(dataBuffer);
  return {
    text: data.text,
    pages: data.numpages,
    info: data.info
  };
}

// 处理所有PDF
async function processAllPDFs() {
  console.log('📚 开始提取 PDF 内容...');
  console.log(`📂 源目录: ${PDF_DIR}`);

  const files = fs.readdirSync(PDF_DIR);
  const pdfFiles = files.filter(f => f.endsWith('.pdf'));

  console.log(`\n📄 找到 ${pdfFiles.length} 个 PDF 文件\n`);

  const allContent = [];

  for (let i = 0; i < pdfFiles.length; i++) {
    const file = pdfFiles[i];
    const filePath = path.join(PDF_DIR, file);

    console.log(`[${i + 1}/${pdfFiles.length}] 处理: ${file}`);

    try {
      const result = await extractPDF(filePath);

      // 保存到单独文件
      const safeFileName = file.replace(/[^a-zA-Z0-9.-]/g, '_');
      const outputFile = path.join(OUTPUT_DIR, `${safeFileName}.json`);

      fs.writeFileSync(outputFile, JSON.stringify(result, null, 2));

      allContent.push({
        filename: file,
        ...result
      });

      console.log(`   ✅ 提取完成: ${result.pages} 页, ${(result.text.length / 1024).toFixed(1)} KB`);
    } catch (error) {
      console.error(`   ❌ 错误: ${error.message}`);
    }
  }

  // 保存合并的内容
  const mergedFile = path.join(OUTPUT_DIR, 'all-content.json');
  fs.writeFileSync(mergedFile, JSON.stringify(allContent, null, 2));

  console.log(`\n✅ 全部完成！`);
  console.log(`📝 提取文件保存在: ${OUTPUT_DIR}/`);
  console.log(`📊 总计: ${allContent.length} 本书, ${allContent.reduce((sum, b) => sum + b.pages, 0)} 页`);
}

processAllPDFs().catch(console.error);
