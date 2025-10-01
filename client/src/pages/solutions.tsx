import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

interface Industry {
  id: string;
  name: string;
  icon: string;
  painPoint: string;
  products: string[];
}

export default function SolutionsPage() {
  const [isSticky, setIsSticky] = useState(false);
  const [showUploadPanel, setShowUploadPanel] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedIndustry, setSelectedIndustry] = useState<string>('');
  const queryClient = useQueryClient();
  
  // Fetch industries data from backend API with defensive error handling
  const { data: industries, isLoading: industriesLoading, error: industriesError } = useQuery<Industry[]>({
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

  // Upload mutation for industry background images
  const uploadMutation = useMutation({
    mutationFn: async ({ file, industryId }: { file: File; industryId: string }) => {
      const formData = new FormData();
      formData.append('image', file);
      formData.append('industryId', industryId);
      
      const response = await fetch('/api/upload-industry-image', {
        method: 'POST',
        body: formData,
      });
      
      if (!response.ok) {
        throw new Error('Upload failed');
      }
      
      return response.json();
    },
    onSuccess: (data) => {
      console.log('Upload successful:', data.message);
      setSelectedFile(null);
      setSelectedIndustry('');
      setShowUploadPanel(false);
      // Refresh the page to show updated background
      window.location.reload();
    },
    onError: (error) => {
      console.error('Upload error:', error);
    }
  });

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleUpload = () => {
    if (selectedFile && selectedIndustry) {
      uploadMutation.mutate({ file: selectedFile, industryId: selectedIndustry });
    }
  };

  // Get background image URL for industry card
  const getIndustryBackgroundImage = (industryId: string) => {
    // Map industry IDs to actual image filenames
    const imageMap: Record<string, string> = {
      'turnkey-solutions': 'turnkey-solutions.jpg',
      'construction': 'Mining Operations Solutions.jpeg',
      'washing-m-sand': 'SandWashing&MSang.jpeg',
      'cd-recycling': 'C&D Recycling',
      'mobile': 'mobile.jpg'
    };
    
    const imageFilename = imageMap[industryId];
    if (!imageFilename) {
      return `linear-gradient(135deg, rgba(59, 130, 246, 0.6) 0%, rgba(37, 99, 235, 0.8) 100%)`;
    }
    
    const imageUrl = `/images/solutions/${imageFilename}`;
    return `linear-gradient(135deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.5) 100%), url('${imageUrl}')`;
  };



  useEffect(() => {
    // Set page title and meta description
    document.title = 'VTech Makkers • Engineered Conveyor & Processing Solutions';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Optimize your plant with VTech Makkers\' turnkey conveyor, screening, crushing and washing solutions. Custom layouts, modular kits and full-service support to keep you moving.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Optimize your plant with VTech Makkers\' turnkey conveyor, screening, crushing and washing solutions. Custom layouts, modular kits and full-service support to keep you moving.';
      document.head.appendChild(meta);
    }

    // Sticky CTA scroll handler
    const handleScroll = () => {
      setIsSticky(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const FAQSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What industries does VTech Makkers serve with crushing and screening solutions?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "VTech Makkers serves mining operations, construction & aggregates, sand & mineral washing, manufactured sand (M-Sand) production, and mobile & modular plant applications across India and globally."
        }
      },
      {
        "@type": "Question",
        "name": "What makes VTech Makkers turnkey solutions different from competitors?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "VTech Makkers provides complete plant design from feasibility studies to commissioning, with 30+ years of experience, 150+ expert team members, process optimization, and lifecycle support including maintenance and genuine spares."
        }
      }
    ]
  };

  // Generate ItemList JSON-LD schema for solutions
  const generateItemListSchema = () => {
    if (!industries) return null;
    
    return {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "itemListElement": industries.map((industry, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": industry.name,
        "url": `https://vtechmakkers.com/solutions/${industry.id}`
      }))
    };
  };

  return (
    <main className="bg-white">
      {/* FAQ Schema for AI Search */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQSchema) }}
      />
      
      {/* ItemList Schema for Solutions */}
      {industries && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(generateItemListSchema()) }}
        />
      )}

      {/* Sticky CTA */}
      {isSticky && (
        <div className="fixed top-0 left-0 right-0 z-50 bg-blue-600 text-white py-3 px-4 shadow-lg animate-slide-down">
          <div className="container mx-auto flex justify-between items-center">
            <span className="font-semibold">Ready for a custom solution?</span>
            <Link href="/contact">
              <button className="bg-white text-blue-600 px-4 py-2 rounded font-semibold hover:bg-gray-100 transition-colors">
                Get a Custom Quote
              </button>
            </Link>
          </div>
        </div>
      )}

      {/* 1. Page Header & Hero */}
      <section className="relative bg-gradient-to-br from-slate-50 to-blue-50 py-20 lg:py-32 overflow-hidden">
        {/* Subtle wave background */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 1200 600" preserveAspectRatio="none">
            <path d="M0,300 Q300,200 600,300 T1200,300 L1200,600 L0,600 Z" fill="currentColor" className="text-blue-200">
              <animate attributeName="d" dur="20s" repeatCount="indefinite" 
                values="M0,300 Q300,200 600,300 T1200,300 L1200,600 L0,600 Z;M0,300 Q300,400 600,300 T1200,300 L1200,600 L0,600 Z;M0,300 Q300,200 600,300 T1200,300 L1200,600 L0,600 Z"/>
            </path>
          </svg>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight text-slate-900 animate-fade-in">
            Tailored Equipment & Turnkey Systems for Every Application
          </h1>
          <p className="mt-6 text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto animate-fade-in-delay">
            Engineering excellence across mining, aggregates, washing, sand making, and mobile plants.
          </p>
          <div className="mt-8 animate-fade-in-delay-2">
            <Link href="/contact">
              <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-all transform hover:scale-105">
                Get a Custom Quote
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Page Intro Copy */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            For over 30 years, VTech Makkers has been at the forefront of crushing and screening innovation, delivering turnkey solutions that transform raw materials into profitable products. Our comprehensive approach spans from initial feasibility studies and plant design through manufacturing, installation, and commissioning, ensuring every project meets the highest standards of performance and reliability.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            With 150+ expert team members and global installations across diverse applications, we specialize in <Link href="/products" className="text-blue-600 hover:underline">mining crushing solutions</Link>, precision screening systems, modular crushing plants, and advanced sand shaping VSI technology. Our commitment to engineering excellence and lifecycle support has made us the trusted partner for industry leaders seeking optimal processing solutions.
          </p>
        </div>
      </section>

      {/* 3. Industries We Serve Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-900">Our Solutions</h1>
            <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
              VTech Makkers delivers complete turnkey packages combining world-class equipment with modular design flexibility. Our end-to-end support spans from initial consulting and custom plant layouts through installation, commissioning, and ongoing maintenance—ensuring maximum productivity and return on investment.
            </p>
          </div>

          {/* Industry Cards Grid */}
          {industriesLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="bg-white p-6 rounded-lg shadow-lg border animate-pulse">
                  <div className="w-16 h-16 bg-gray-200 rounded-lg mb-4"></div>
                  <div className="h-6 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded"></div>
                </div>
              ))}
            </div>
          ) : industriesError ? (
            <div className="text-center py-12">
              <div className="text-gray-500 mb-4">
                <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
                <p className="text-lg font-medium">Unable to load industries</p>
                <p className="text-sm text-gray-400 mt-2">Please check your connection and try again</p>
              </div>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(industries || []).map((industry, index) => {
                // Defensive checks for industry object
                if (!industry || typeof industry !== 'object' || !industry.id || !industry.name) {
                  return null;
                }
                
                return (
                  <Link
                    key={industry.id}
                    href={`/solutions/${industry.id}`}
                    className="industry-card relative block h-80 rounded-lg shadow-lg border hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in-up overflow-hidden group cursor-pointer focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50"
                    style={{ 
                      animationDelay: `${index * 0.1}s`,
                      backgroundImage: getIndustryBackgroundImage(industry.id),
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                    aria-label={`Learn more about ${industry.name} solutions and equipment`}
                  >
                    {/* Overlay Content */}
                    <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
                      <div>
                        <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-200 transition-colors">
                          {industry.name}
                        </h3>
                        <p className="text-sm opacity-90 mb-4">
                          Key Challenge: {industry.painPoint || 'Not specified'}
                        </p>
                      </div>
                      
                      <div>
                        <div className="mb-4">
                          <p className="text-sm opacity-75 mb-2">Primary Equipment:</p>
                          <div className="flex flex-wrap gap-2">
                            {(industry.products || []).slice(0, 2).map((product, productIndex) => (
                              <span 
                                key={productIndex}
                                className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium"
                              >
                                {product}
                              </span>
                            ))}
                            {(industry.products || []).length > 2 && (
                              <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                                +{(industry.products || []).length - 2} more
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              }).filter(Boolean)}
            </div>
          )}
        </div>
      </section>

      {/* 4. Why VTIS Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why VTech Makkers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Three decades of engineering excellence delivering turnkey solutions across the globe
            </p>
          </div>
          
          <div className="space-y-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-1 md:order-1">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Complete Plant Design</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    From feasibility studies to layout drawings, we design turnkey crushing & screening plants optimized for your site. 
                    Our comprehensive approach ensures maximum efficiency and minimal operational challenges from day one.
                  </p>
                  <div className="text-sm text-blue-600 font-semibold">End-to-end project management</div>
                </div>
              </div>
              <div className="order-2 md:order-2">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Process Optimization</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Advanced process modeling and wear-testing minimize downtime while maximizing throughput across every stage. 
                    Our simulations ensure optimal material flow and equipment selection for your specific requirements.
                  </p>
                  <div className="text-sm text-blue-600 font-semibold">Proven performance results</div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Global Project Support</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Installation, commissioning, training, and ongoing maintenance support worldwide. 
                    Our dedicated service team provides 24/7 technical assistance and preventive maintenance programs.
                  </p>
                  <div className="text-sm text-blue-600 font-semibold">Worldwide service network</div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Proven Track Record</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Over 200 successful installations across diverse industries with equipment engineered for continuous operation. 
                    Our solutions deliver superior production rates while minimizing operational costs.
                  </p>
                  <div className="text-sm text-blue-600 font-semibold">30+ years experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900">Frequently Asked Questions</h2>
            <p className="mt-4 text-lg text-slate-600">
              Common questions about our turnkey plant solutions and engineering process.
            </p>
          </div>
          <div className="space-y-4">
            <details className="group rounded-lg bg-slate-50 p-6 border border-slate-200">
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900">
                <h3 className="text-lg font-bold">What is the typical lead time for a complete turnkey plant?</h3>
                <span className="relative h-5 w-5 shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9" />
                  </svg>
                </span>
              </summary>
              <div className="mt-4 leading-relaxed text-slate-700">
                Lead times typically range from 1 week to 16 weeks depending on project requirements. Simple equipment installations can be completed within 1-4 weeks, while complex turnkey plants require 12-16 weeks including design, manufacturing, site preparation, installation, and commissioning phases.
              </div>
            </details>

            <details className="group rounded-lg bg-slate-50 p-6 border border-slate-200">
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900">
                <h3 className="text-lg font-bold">Do you provide financing options for large plant installations?</h3>
                <span className="relative h-5 w-5 shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9" />
                  </svg>
                </span>
              </summary>
              <div className="mt-4 leading-relaxed text-slate-700">
                Yes, we partner with leading financial institutions to offer flexible financing solutions including equipment leasing, term loans, and deferred payment options to help manage your capital investment.
              </div>
            </details>

            <details className="group rounded-lg bg-slate-50 p-6 border border-slate-200">
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900">
                <h3 className="text-lg font-bold">What kind of customization is possible for specific material requirements?</h3>
                <span className="relative h-5 w-5 shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9" />
                  </svg>
                </span>
              </summary>
              <div className="mt-4 leading-relaxed text-slate-700">
                Our engineering team designs each plant based on detailed material analysis including hardness, abrasiveness, moisture content, and gradation requirements. This ensures optimal equipment selection and circuit configuration.
              </div>
            </details>

            <details className="group rounded-lg bg-slate-50 p-6 border border-slate-200">
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900">
                <h3 className="text-lg font-bold">What support do you provide after plant commissioning?</h3>
                <span className="relative h-5 w-5 shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9" />
                  </svg>
                </span>
              </summary>
              <div className="mt-4 leading-relaxed text-slate-700">
                We provide comprehensive post-commissioning support including 24/7 technical helpline, preventive maintenance programs, genuine spare parts supply, operator training, and performance optimization services.
              </div>
            </details>

            <details className="group rounded-lg bg-slate-50 p-6 border border-slate-200">
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900">
                <h3 className="text-lg font-bold">Can existing plants be upgraded or expanded using your solutions?</h3>
                <span className="relative h-5 w-5 shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9" />
                  </svg>
                </span>
              </summary>
              <div className="mt-4 leading-relaxed text-slate-700">
                Absolutely. Our retrofit and expansion services can integrate seamlessly with existing infrastructure to increase capacity, improve efficiency, or add new product lines while minimizing operational downtime.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Industry Detail Panels (Desktop Only) */}
      {industries?.map((industry) => (
        <section 
          key={`detail-${industry.id}`}
          id={`industry-${industry.id}`} 
          className="industry-detail py-20 bg-white border-t border-gray-200 hidden lg:block"
        >
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">{industry.name}</h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Key Challenge</h3>
                  <p className="text-lg text-slate-700">{industry.painPoint}</p>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">VTech Makkers Solution Pillar</h3>
                  <p className="text-lg text-slate-700">
                    {industry.id === 'mining' && 'High-Capacity Crushing & Screening Systems'}
                    {industry.id === 'construction' && 'Mobile & Modular Plant Solutions'}
                    {industry.id === 'washing' && 'Advanced Sand Classification & Washing'}
                    {industry.id === 'vsi' && 'Precision Sand Shaping & Cubicization'}
                    {industry.id === 'mobile' && 'Compact & Transportable Processing'}
                  </p>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Primary Equipment Used</h3>
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
                
                <Link href="/contact">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg">
                    Contact Us for This Solution
                  </button>
                </Link>
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
      ))}

      {/* 6. Final CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 relative overflow-hidden">
        {/* Animated particles background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-float"></div>
          <div className="absolute top-3/4 left-1/2 w-1 h-1 bg-white rounded-full animate-float-delay"></div>
          <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-white rounded-full animate-float-delay-2"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to discuss your custom solution?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Connect with our engineering team to explore how we can optimize your processing operations.
          </p>
          <Link href="/contact">
            <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition-all transform hover:scale-105">
              Schedule Your Consultation
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}