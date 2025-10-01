import { Product } from '@/../../data/products';
import { useFaq } from '@/hooks/useFaq';

interface ProductFaqSchemaProps {
  product: Product;
}

export default function ProductFaqSchema({ product }: ProductFaqSchemaProps) {
  const faqItems = useFaq(product.slug);

  if (faqItems.length === 0) {
    return null;
  }
  const faqData = faqItems.map(item => ({
    question: item.q,
    answer: item.a
  }));

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const techArticleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": `${product.name} - Technical Guide`,
    "description": product.description,
    "author": {
      "@type": "Organization",
      "name": "VTech Makkers"
    },
    "publisher": {
      "@type": "Organization",
      "name": "VTech Makkers",
      "logo": {
        "@type": "ImageObject",
        "url": "https://vtis.replit.app/images/logos/Logo.png"
      }
    },
    "datePublished": "2025-06-17",
    "dateModified": "2025-06-17",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://vtis.replit.app/products/${product.slug}`
    },
    "articleSection": "Industrial Equipment",
    "keywords": [product.name, product.category, ...(product.applications || [])],
    "about": {
      "@type": "Product",
      "name": product.name,
      "category": product.category
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema, null, 2)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(techArticleSchema, null, 2)
        }}
      />
    </>
  );
}