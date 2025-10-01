import fs from 'fs';
import path from 'path';
import { products } from '../data/products.js';

function generateSitemap() {
  const baseUrl = 'https://vtisindustrial.com';
  const today = new Date().toISOString().split('T')[0];
  
  const staticPages = [
    { url: '/', priority: '1.0', changefreq: 'weekly' },
    { url: '/products', priority: '0.9', changefreq: 'weekly' },
    { url: '/about', priority: '0.8', changefreq: 'monthly' },
    { url: '/contact', priority: '0.8', changefreq: 'monthly' },
    { url: '/knowledge-center', priority: '0.7', changefreq: 'weekly' },
    { url: '/solutions', priority: '0.7', changefreq: 'monthly' },
    { url: '/custom-engineering', priority: '0.6', changefreq: 'monthly' },
    { url: '/technical-consultation', priority: '0.6', changefreq: 'monthly' },
    { url: '/installation-support', priority: '0.6', changefreq: 'monthly' },
    { url: '/maintenance-services', priority: '0.6', changefreq: 'monthly' },
    { url: '/parts-components', priority: '0.6', changefreq: 'monthly' },
  ];

  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  // Add static pages
  staticPages.forEach(page => {
    sitemap += `
  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
  });

  // Add product pages
  products.forEach(product => {
    sitemap += `
  <url>
    <loc>${baseUrl}/products/${product.slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`;
  });

  sitemap += `
</urlset>`;

  // Write sitemap to public directory
  const publicDir = path.join(process.cwd(), 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
  console.log('✅ Sitemap generated successfully at public/sitemap.xml');
}

// Run the script if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  generateSitemap();
}

export { generateSitemap };