import { Product } from '@/../../data/products';

interface ProductSchemaProps {
  product: Product;
}

export default function ProductSchema({ product }: ProductSchemaProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "description": product.description,
    "image": `https://vtis.replit.app${product.image}`,
    "brand": {
      "@type": "Brand",
      "name": "VTech Makkers"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "VTech Makkers",
      "url": "https://vtis.replit.app"
    },
    "sku": product.slug,
    "url": `https://vtis.replit.app/products/${product.slug}`,
    "category": product.category,
    "audience": {
      "@type": "Audience",
      "audienceType": "Industrial Equipment Buyers"
    },
    "material": "Steel",
    "gtin": `VTECH${product.id.toString().padStart(6, '0')}`,
    "inProductGroupWithID": product.category.toLowerCase().replace(/\s+/g, '-'),
    "offers": {
      "@type": "Offer",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "url": `https://vtis.replit.app/api/datasheet/${product.slug}`,
      "seller": {
        "@type": "Organization",
        "name": "VTech Makkers"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    },
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "name": "Category",
        "value": product.category
      },
      {
        "@type": "PropertyValue", 
        "name": "Applications",
        "value": product.applications?.join(", ") || ""
      }
    ]
  };

  // Add spec models if available
  if (product.spec_models && product.spec_models.length > 0) {
    const firstModel = product.spec_models[0];
    if (firstModel['Capacity (TPH)']) {
      structuredData.additionalProperty.push({
        "@type": "PropertyValue",
        "name": "Capacity",
        "value": String(firstModel['Capacity (TPH)'])
      });
    }
    if (firstModel['Power (HP)'] || firstModel['Power (kW)']) {
      structuredData.additionalProperty.push({
        "@type": "PropertyValue",
        "name": "Power",
        "value": String(firstModel['Power (HP)']) || String(firstModel['Power (kW)'])
      });
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData, null, 2)
      }}
    />
  );
}