import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useFaq } from '@/hooks/useFaq';

interface MiniFaqAccordionProps {
  slug: string;
  title?: string;
}

export default function MiniFaqAccordion({ slug, title = "Frequently Asked Questions" }: MiniFaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqItems = useFaq(slug);
  
  if (faqItems.length === 0) {
    return null;
  }

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      <div className="space-y-2">
        {faqItems.map((item, index) => (
          <div key={index} className="border border-gray-200 rounded-lg">
            <button
              onClick={() => toggleItem(index)}
              className="w-full px-4 py-3 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <span className="font-medium text-gray-900">{item.q}</span>
              <ChevronDown
                className={`w-5 h-5 text-gray-500 transition-transform ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
              />
            </button>
            {openIndex === index && (
              <div className="px-4 pb-3 text-gray-700">
                {item.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}