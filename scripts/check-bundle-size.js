#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { gzipSync } from 'zlib';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.join(__dirname, '../dist/public');

console.log('📦 Analyzing bundle size for spec tables...\n');

function getFileSize(filePath) {
  const content = fs.readFileSync(filePath);
  const gzippedSize = gzipSync(content).length;
  return {
    raw: content.length,
    gzipped: gzippedSize
  };
}

function formatBytes(bytes) {
  return (bytes / 1024).toFixed(2) + ' KB';
}

try {
  if (!fs.existsSync(distDir)) {
    console.error('❌ Build directory not found. Run npm run build first.');
    process.exit(1);
  }

  const files = fs.readdirSync(distDir, { recursive: true });
  const jsFiles = files.filter(file => file.endsWith('.js'));
  const cssFiles = files.filter(file => file.endsWith('.css'));
  
  let totalJsSize = 0;
  let totalCssSize = 0;
  let specsRelatedSize = 0;

  console.log('📋 JavaScript bundles:');
  jsFiles.forEach(file => {
    const filePath = path.join(distDir, file);
    const size = getFileSize(filePath);
    totalJsSize += size.gzipped;
    
    console.log(`   ${file}: ${formatBytes(size.raw)} (${formatBytes(size.gzipped)} gzipped)`);
    
    // Check if file likely contains specs-related code
    const content = fs.readFileSync(filePath, 'utf8');
    if (content.includes('SpecsTable') || content.includes('specs-table')) {
      specsRelatedSize += size.gzipped;
    }
  });

  console.log('\n🎨 CSS bundles:');
  cssFiles.forEach(file => {
    const filePath = path.join(distDir, file);
    const size = getFileSize(filePath);
    totalCssSize += size.gzipped;
    
    console.log(`   ${file}: ${formatBytes(size.raw)} (${formatBytes(size.gzipped)} gzipped)`);
  });

  console.log('\n📊 Bundle Analysis:');
  console.log(`   Total JS (gzipped): ${formatBytes(totalJsSize)}`);
  console.log(`   Total CSS (gzipped): ${formatBytes(totalCssSize)}`);
  console.log(`   Estimated specs-related: ${formatBytes(specsRelatedSize)}`);
  console.log(`   Total bundle (gzipped): ${formatBytes(totalJsSize + totalCssSize)}`);

  // Check if specs tables add less than 50KB
  const specsThreshold = 50 * 1024; // 50KB
  if (specsRelatedSize < specsThreshold) {
    console.log(`\n✅ Specs tables under 50KB threshold (${formatBytes(specsRelatedSize)})`);
  } else {
    console.log(`\n⚠️  Specs tables exceed 50KB threshold (${formatBytes(specsRelatedSize)})`);
  }

  // Overall size check
  const totalSize = totalJsSize + totalCssSize;
  const totalThreshold = 500 * 1024; // 500KB reasonable threshold
  
  if (totalSize < totalThreshold) {
    console.log(`✅ Total bundle size acceptable (${formatBytes(totalSize)})`);
  } else {
    console.log(`⚠️  Total bundle size may be large (${formatBytes(totalSize)})`);
  }

} catch (error) {
  console.error('❌ Error analyzing bundle:', error.message);
  process.exit(1);
}