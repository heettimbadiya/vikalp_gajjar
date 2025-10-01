import { useState, useEffect } from 'react';

export interface FAQ {
  q: string;
  a: string;
}

export function useFaq(slug: string): FAQ[] {
  const [faq, setFaq] = useState<FAQ[]>([]);

  useEffect(() => {
    const loadFaq = async () => {
      try {
        // Dynamically import the FAQ file based on slug
        const faqModule = await import(`../../content/faq/${slug}.faq.ts`);
        setFaq(faqModule.faq || []);
      } catch (error) {
        // If FAQ file doesn't exist, return empty array
        console.log(`No FAQ file found for ${slug}`);
        setFaq([]);
      }
    };

    if (slug) {
      loadFaq();
    }
  }, [slug]);

  return faq;
}