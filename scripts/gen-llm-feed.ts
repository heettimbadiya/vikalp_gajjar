import { writeFileSync } from 'fs';
import { products } from '../data/products.js';

function generateLlmFeed() {
  const today = new Date().toISOString().split('T')[0];
  const baseUrl = 'https://vtis.replit.app';
  
  const feedLines = products.map(product => {
    // Extract capacity and power from spec models
    const maxCapacity = product.spec_models 
      ? Math.max(...product.spec_models.map(model => {
          const capacity = model['Capacity (TPH)'];
          if (typeof capacity === 'string') {
            const parts = capacity.split('-');
            return parseInt(parts[parts.length - 1]);
          }
          return Number(capacity) || 0;
        }))
      : 0;

    const maxPower = product.spec_models
      ? Math.max(...product.spec_models.map(model => {
          const power = model['Power (HP)'] || model['Power (kW)'];
          if (typeof power === 'string') {
            const match = power.match(/(\d+)/);
            return match ? parseInt(match[1]) : 0;
          }
          return Number(power) || 0;
        }))
      : 0;

    const specs = `capacity=${maxCapacity}TPH;power=${maxPower}HP`;
    return `${baseUrl}/products/${product.slug}|${today}|${specs}`;
  });

  const content = feedLines.join('\n');
  writeFileSync('public/llm.txt', content);
  console.log(`Generated LLM feed with ${products.length} products`);
}

generateLlmFeed();