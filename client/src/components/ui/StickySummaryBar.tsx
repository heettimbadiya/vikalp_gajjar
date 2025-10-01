import { useState, useEffect } from 'react';
import { Product } from '@/../../data/products';


interface StickySummaryBarProps {
  product: Product;
}

export default function StickySummaryBar({ product }: StickySummaryBarProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      setIsVisible(scrollPercent > 25);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  const maxCapacity = product.spec_models?.[product.spec_models.length - 1]?.['Capacity (TPH)'] || 'N/A';

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h2 className="font-semibold text-gray-900 text-sm sm:text-base truncate">
              {product.name}
            </h2>
            <div className="hidden sm:flex items-center space-x-3 text-sm text-gray-600">
              <span>Up to {maxCapacity} TPH</span>
              <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
              <span>{product.category}</span>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <button 
              onClick={() => window.location.href = `/contact?product=${product.slug}&name=${encodeURIComponent(product.name)}`}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Get Quote
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}