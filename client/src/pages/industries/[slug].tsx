import { useParams, Link } from 'wouter';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';

interface Industry {
  id: string;
  name: string;
  icon: string;
  painPoint: string;
  products: string[];
}

export default function IndustryPage() {
  const params = useParams();
  const slug = params.slug;

  // Fetch industries data from backend API
  const { data: industries, isLoading } = useQuery<Industry[]>({
    queryKey: ['/api/industries'],
    queryFn: async () => {
      try {
        const response = await fetch('/api/industries');
        if (!response.ok) {
          throw new Error('Failed to fetch industries');
        }
        const data = await response.json();
        return Array.isArray(data) ? data : [];
      } catch (error) {
        console.error('Industries fetch error:', error);
        return [];
      }
    }
  });

  const industry = industries?.find(ind => ind.id === slug);

  useEffect(() => {
    if (industry) {
      document.title = `${industry.name} Solutions | VTech Makkers`;
      
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', 
          `Specialized ${industry.name.toLowerCase()} equipment and solutions. Key challenge: ${industry.painPoint}. Premium crushing, screening, and processing equipment.`
        );
      }
    }
  }, [industry]);

  if (isLoading) {
    return (
      <main className="bg-white min-h-screen">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto">
            <div className="animate-pulse">
              <div className="h-12 bg-gray-200 rounded mb-4"></div>
              <div className="h-6 bg-gray-200 rounded mb-8 w-3/4"></div>
              <div className="space-y-4">
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                <div className="h-4 bg-gray-200 rounded w-4/6"></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  if (!industry) {
    return (
      <main className="bg-white min-h-screen">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Industry Not Found</h1>
            <p className="text-lg text-slate-600 mb-8">
              The industry you're looking for doesn't exist or has been moved.
            </p>
            <Link href="/solutions">
              <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-all transform hover:scale-105">
                View All Solutions
              </button>
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-white min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2">
              <li>
                <Link href="/" className="text-gray-500 hover:text-blue-600">
                  Home
                </Link>
              </li>
              <li>
                <span className="text-gray-400">/</span>
              </li>
              <li>
                <Link href="/solutions" className="text-gray-500 hover:text-blue-600">
                  Solutions
                </Link>
              </li>
              <li>
                <span className="text-gray-400">/</span>
              </li>
              <li>
                <span className="text-gray-900 font-medium">{industry.name}</span>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              {industry.name} Solutions
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              Key Challenge: {industry.painPoint}
            </p>
            <Link href="/contact">
              <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-all transform hover:scale-105">
                Get Custom Solution
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-2xl font-semibold text-slate-900 mb-6">Primary Equipment</h2>
                <div className="space-y-4">
                  {industry.products.map((product, index) => (
                    <div key={index} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                      <div className="w-3 h-3 bg-blue-600 rounded-full flex-shrink-0"></div>
                      <span className="text-slate-700 font-medium">{product}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-semibold text-slate-900 mb-6">Key Benefits</h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg">
                    <div className="w-3 h-3 bg-green-600 rounded-full flex-shrink-0"></div>
                    <span className="text-slate-700">Optimized process flow design</span>
                  </div>
                  <div className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg">
                    <div className="w-3 h-3 bg-green-600 rounded-full flex-shrink-0"></div>
                    <span className="text-slate-700">Reduced operational costs</span>
                  </div>
                  <div className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg">
                    <div className="w-3 h-3 bg-green-600 rounded-full flex-shrink-0"></div>
                    <span className="text-slate-700">Enhanced equipment reliability</span>
                  </div>
                  <div className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg">
                    <div className="w-3 h-3 bg-green-600 rounded-full flex-shrink-0"></div>
                    <span className="text-slate-700">Comprehensive lifecycle support</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center bg-blue-50 p-12 rounded-lg">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Ready to optimize your {industry.name.toLowerCase()} operations?
              </h2>
              <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
                Our engineering team specializes in {industry.name.toLowerCase()} solutions. 
                Let's discuss how we can address your specific challenges and requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-all transform hover:scale-105">
                    Get Custom Quote
                  </button>
                </Link>
                <Link href="/products">
                  <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold rounded-lg transition-all">
                    View All Products
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}