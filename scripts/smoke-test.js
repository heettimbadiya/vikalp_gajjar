#!/usr/bin/env node

import https from 'https';
import http from 'http';

const baseUrl = process.env.SMOKE_TEST_URL || 'http://localhost:5000';

const productUrls = [
  '/products/single-toggle-jaw-crusher',
  '/products/double-toggle-jaw-crusher',
  '/products/vsi-cubisand-sand-maker',
  '/products/hsi-impactors',
  '/products/inclined-vibrating-screens',
  '/products/feeder',
  '/products/hydrocyclone-sand-classifiers',
  '/products/screw-sand-washers',
  '/products/bucket-sand-classifiers'
];

console.log('🚬 Running smoke tests for specification tables...\n');

async function checkUrl(url) {
  return new Promise((resolve, reject) => {
    const fullUrl = `${baseUrl}${url}`;
    const client = fullUrl.startsWith('https') ? https : http;
    
    const req = client.get(fullUrl, (res) => {
      let data = '';
      
      res.on('data', chunk => {
        data += chunk;
      });
      
      res.on('end', () => {
        const hasTable = data.includes('<table') || data.includes('SpecsTable');
        const hasMobileCards = data.includes('sm:hidden') || data.includes('space-y-4');
        const hasSpecsSection = data.includes('id="specs"');
        
        resolve({
          url,
          status: res.statusCode,
          hasSpecsMarkup: hasTable || hasMobileCards,
          hasSpecsSection,
          contentLength: data.length
        });
      });
    });
    
    req.on('error', (error) => {
      reject({ url, error: error.message });
    });
    
    req.setTimeout(10000, () => {
      req.destroy();
      reject({ url, error: 'Timeout' });
    });
  });
}

async function runSmokeTests() {
  const results = [];
  let passed = 0;
  let failed = 0;
  
  for (const url of productUrls) {
    try {
      console.log(`Testing ${url}...`);
      const result = await checkUrl(url);
      
      if (result.status === 200 && result.hasSpecsSection) {
        console.log(`✅ ${url} - OK (${result.status})`);
        if (result.hasSpecsMarkup) {
          console.log(`   📊 Specs table/cards detected`);
        } else {
          console.log(`   ⚠️  No specs markup detected`);
        }
        passed++;
      } else {
        console.log(`❌ ${url} - FAILED (${result.status})`);
        failed++;
      }
      
      results.push(result);
    } catch (error) {
      console.log(`❌ ${url} - ERROR: ${error.error}`);
      failed++;
      results.push(error);
    }
  }
  
  console.log('\n📊 Smoke Test Results:');
  console.log(`   ✅ Passed: ${passed}`);
  console.log(`   ❌ Failed: ${failed}`);
  console.log(`   📈 Success Rate: ${((passed / productUrls.length) * 100).toFixed(1)}%`);
  
  if (failed > 0) {
    console.log('\n❌ Some tests failed. Check the logs above for details.');
    process.exit(1);
  } else {
    console.log('\n✅ All smoke tests passed!');
  }
}

runSmokeTests().catch(error => {
  console.error('💥 Smoke test runner failed:', error);
  process.exit(1);
});