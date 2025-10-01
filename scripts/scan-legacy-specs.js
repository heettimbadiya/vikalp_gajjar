#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const productPagesDir = path.join(__dirname, '../client/src/pages');
const productDetailPath = path.join(productPagesDir, 'product-detail.tsx');

console.log('🔍 Scanning for legacy specification displays...\n');

// Products that should have new SpecsTable implementation
const expectedProducts = [
  'single-toggle-jaw-crusher',
  'double-toggle-jaw-crusher',
  'vsi-cubisand-sand-maker',
  'hsi-impactors',
  'inclined-vibrating-screens',
  'feeder',
  'hydrocyclone-sand-classifiers',
  'screw-sand-washers',
  'bucket-sand-classifiers'
];

// Products that are known to use legacy displays (to be updated later)
const legacyProducts = [
  'conveyor-systems',
  'mobile-crushing-plant',
  'trommel-screens' // archived
];

try {
  const productDetailContent = fs.readFileSync(productDetailPath, 'utf8');
  
  console.log('✅ Products with new SpecsTable implementation:');
  expectedProducts.forEach(product => {
    if (productDetailContent.includes(`product.slug === '${product}'`)) {
      console.log(`   ✓ ${product}`);
    } else {
      console.log(`   ❌ ${product} - MISSING SpecsTable implementation`);
    }
  });
  
  console.log('\n⚠️  Products still using legacy spec displays:');
  legacyProducts.forEach(product => {
    console.log(`   📋 ${product} - needs migration to SpecsTable`);
  });
  
  // Check for any products using old spec components
  const legacyPatterns = [
    'ProductSpecTable',
    'SpecsTableV2',
    'spec_models'
  ];
  
  console.log('\n🔍 Legacy component usage scan:');
  legacyPatterns.forEach(pattern => {
    const matches = (productDetailContent.match(new RegExp(pattern, 'g')) || []).length;
    if (matches > 0) {
      console.log(`   ⚠️  Found ${matches} instances of legacy pattern: ${pattern}`);
    } else {
      console.log(`   ✅ No legacy pattern found: ${pattern}`);
    }
  });
  
  // Check for data files
  const specsDir = path.join(__dirname, '../data/specs');
  console.log('\n📁 Specification data files:');
  
  if (fs.existsSync(specsDir)) {
    const specFiles = fs.readdirSync(specsDir).filter(file => file.endsWith('.json'));
    specFiles.forEach(file => {
      const productSlug = file.replace('.json', '');
      console.log(`   ✅ ${productSlug}.json`);
    });
    
    // Check for missing spec files
    expectedProducts.forEach(product => {
      const specFile = `${product}.json`;
      if (!specFiles.includes(specFile)) {
        console.log(`   ❌ Missing spec file: ${specFile}`);
      }
    });
  } else {
    console.log('   ❌ Specs directory not found');
  }
  
  console.log('\n📊 Summary:');
  console.log(`   • ${expectedProducts.length} products with new SpecsTable`);
  console.log(`   • ${legacyProducts.length} products pending migration`);
  console.log('   • Scan complete');
  
} catch (error) {
  console.error('❌ Error scanning files:', error.message);
  process.exit(1);
}