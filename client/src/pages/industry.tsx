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
  const { slug } = useParams<{ slug: string }>();
  
  // Fetch industries data from backend API
  const { data: industries, isLoading } = useQuery<Industry[]>({
    queryKey: ['/api/industries'],
    queryFn: () => fetch('/api/industries').then(res => res.json())
  });

  const industry = industries?.find(ind => ind.id === slug);

  useEffect(() => {
    if (industry) {
      document.title = `${industry.name} Solutions | VTech Makkers`;
      
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', `VTech Makkers delivers specialized crushing and screening solutions for ${industry.name.toLowerCase()}. ${industry.painPoint} - Contact us for custom plant design.`);
      }
    }
  }, [industry]);

  if (isLoading) {
    return (
      <main className="bg-white min-h-screen">
        <div className="container mx-auto px-4 py-20">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/3 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-2/3 mb-8"></div>
            <div className="h-32 bg-gray-200 rounded mb-8"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          </div>
        </div>
      </main>
    );
  }

  if (!industry) {
    return (
      <main className="bg-white min-h-screen">
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Industry Not Found</h1>
          <p className="text-lg text-slate-600 mb-8">The industry you're looking for doesn't exist.</p>
          <Link href="/solutions">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              Back to Solutions
            </button>
          </Link>
        </div>
      </main>
    );
  }

  const getSolutionPillar = (id: string) => {
    switch (id) {
      case 'mining': return 'High-Capacity Crushing & Screening Systems';
      case 'construction': return 'Mobile & Modular Plant Solutions';
      case 'washing': return 'Advanced Sand Classification & Washing';
      case 'vsi': return 'Precision Sand Shaping & Cubicization';
      case 'mobile': return 'Compact & Transportable Processing';
      default: return 'Tailored Processing Solutions';
    }
  };

  return (
    <main className="bg-white min-h-screen">
      {/* Header */}
      <section className="relative bg-gradient-to-br from-slate-50 to-blue-50 py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 1200 600" preserveAspectRatio="none">
            <path d="M0,300 Q300,200 600,300 T1200,300 L1200,600 L0,600 Z" fill="currentColor" className="text-blue-200" />
          </svg>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-8">
            <Link href="/solutions" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium mb-4">
              ← Back to Solutions
            </Link>
            <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mb-6">
              {industry.name}
            </h1>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Industry Details */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Key Challenge</h2>
                <p className="text-lg text-slate-700 leading-relaxed">{industry.painPoint}</p>
              </div>
              
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">VTech Makkers Solution Pillar</h2>
                <p className="text-lg text-slate-700 leading-relaxed">
                  {getSolutionPillar(industry.id)}
                </p>
              </div>
              
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Primary Equipment Used</h2>
                <div className="flex flex-wrap gap-3">
                  {industry.products.map((product, index) => (
                    <span 
                      key={index}
                      className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full font-medium"
                    >
                      {product}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-8 flex items-center justify-center">
                <svg className="w-32 h-32 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-blue-600 rounded-full opacity-10"></div>
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-400 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Why Choose VTech Makkers for {industry.name}?</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow border">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Custom Design</h3>
              <p className="text-slate-600">Tailored solutions engineered for your specific material and capacity requirements.</p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow border">
              <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Proven Performance</h3>
              <p className="text-slate-600">30+ years of field-tested equipment delivering consistent results across industries.</p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow border">
              <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Complete Support</h3>
              <p className="text-slate-600">From installation to maintenance, our expert team ensures optimal performance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to optimize your {industry.name.toLowerCase()} operations?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Connect with our engineering team to discuss your specific requirements and get a custom solution proposal.
          </p>
          <Link href="/contact">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
              Contact Us for This Solution
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}