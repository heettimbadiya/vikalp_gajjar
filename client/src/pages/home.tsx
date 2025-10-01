import { Link } from 'wouter';
import { products } from '../data/products';
import { useState, useEffect, useRef } from 'react';
import { Factory, Zap, Shield } from 'lucide-react';
import VideoHero from '../components/VideoHero';

// Industries data with navigation links
const industries = [
  { name: 'Mining & Aggregates', href: '/solutions/construction' },
  { name: 'Sand Washing & M-Sand', href: '/solutions/washing-m-sand' },
  { name: 'Mobile & Modular Plants', href: '/solutions/mobile' },
  { name: 'C&D Recycling', href: '/solutions/cd-recycling' },
  { name: 'Turnkey Solutions', href: '/solutions/turnkey-solutions' }
];

// Our Capabilities data
const capabilities = [
  {
    icon: Factory,
    title: "Complete Plant Design",
    description: "End-to-end crushing and screening plant design tailored to your specific requirements and site conditions."
  },
  {
    icon: Zap,
    title: "Process Optimization",
    description: "Advanced engineering to maximize throughput, reduce operating costs, and improve product quality."
  },
  {
    icon: Shield,
    title: "Lifecycle Support",
    description: "Comprehensive service from installation and commissioning to maintenance and spare parts supply."
  }
];

// Industries Carousel Component with Continuous Smooth Movement
const IndustriesCarousel = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [translateX, setTranslateX] = useState(0);
  const animationRef = useRef<number>();

  // Continuous smooth scrolling animation using transform
  useEffect(() => {
    if (!isPlaying) return;

    const animate = () => {
      setTranslateX(prev => {
        const newTranslateX = prev - 1.5; // Increased speed: Move left continuously
        // Reset when we've moved one full set (1/3 of total width)
        // Assuming each industry item is roughly 200px with gaps
        const singleSetWidth = industries.length * 200;
        if (Math.abs(newTranslateX) >= singleSetWidth) {
          return 0;
        }
        return newTranslateX;
      });
      
      if (isPlaying) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPlaying]);

  const pauseAnimation = () => setIsPlaying(false);
  const resumeAnimation = () => setIsPlaying(true);

  return (
    <section className="bg-blue-600 text-white border-b border-blue-700">
      <div className="w-full py-2">
        <div className="relative overflow-hidden" onMouseEnter={pauseAnimation} onMouseLeave={resumeAnimation}>
          <div 
            ref={carouselRef}
            className="flex gap-6 w-fit"
            style={{ 
              transform: `translateX(${translateX}px)`,
              transition: isPlaying ? 'none' : 'transform 0.3s ease'
            }}
          >
            {/* Triple the items for seamless infinite loop */}
            {[...industries, ...industries, ...industries].map((industry, index) => (
              <div key={`${industry.name}-${index}`} className="flex-none">
                <Link href={industry.href}>
                  <button className="text-white hover:text-blue-100 transition-all duration-300 text-sm md:text-base font-medium px-4 py-2 rounded-lg hover:bg-white/20 whitespace-nowrap">
                    {industry.name}
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Featured Products Carousel Component with Autoplay
const ProductsCarousel = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Autoplay functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const scrollWidth = carouselRef.current.scrollWidth;
        const clientWidth = carouselRef.current.clientWidth;
        const maxScroll = scrollWidth - clientWidth;
        
        if (carouselRef.current.scrollLeft >= maxScroll) {
          carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
          setCurrentIndex(0);
        } else {
          const cardWidth = window.innerWidth >= 1024 ? 320 : window.innerWidth >= 640 ? 288 : 256;
          carouselRef.current.scrollBy({ left: cardWidth + 16, behavior: 'smooth' });
          setCurrentIndex(prev => prev + 1);
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const scrollLeft = () => {
    if (carouselRef.current) {
      const cardWidth = window.innerWidth >= 1024 ? 320 : window.innerWidth >= 640 ? 288 : 256;
      carouselRef.current.scrollBy({ left: -(cardWidth + 16), behavior: 'smooth' });
      setCurrentIndex(prev => Math.max(0, prev - 1));
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      const cardWidth = window.innerWidth >= 1024 ? 320 : window.innerWidth >= 640 ? 288 : 256;
      carouselRef.current.scrollBy({ left: cardWidth + 16, behavior: 'smooth' });
      setCurrentIndex(prev => prev + 1);
    }
  };

  const pauseAutoplay = () => setIsAutoPlaying(false);
  const resumeAutoplay = () => setIsAutoPlaying(true);

  return (
    <section className="py-8 md:py-16 bg-white" aria-live="polite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-900 mb-8 md:mb-12" style={{ fontFamily: '-apple-system, "SF Pro Display", system-ui, sans-serif' }}>
          Our Complete Equipment Range
        </h2>
        
        <div className="relative group">
          {/* Desktop Navigation Arrows */}
          <button 
            onClick={scrollLeft}
            className="hidden md:flex absolute left-0 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg items-center justify-center opacity-0 group-hover:opacity-100 hover:shadow-xl transition-all duration-300"
            aria-label="Previous products"
          >
            <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={scrollRight}
            className="hidden md:flex absolute right-0 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg items-center justify-center opacity-0 group-hover:opacity-100 hover:shadow-xl transition-all duration-300"
            aria-label="Next products"
          >
            <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Scrollable Container */}
          <div 
            ref={carouselRef}
            className="flex overflow-x-auto gap-4 md:gap-6 snap-x snap-mandatory pb-4 scrollbar-hide"
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none',
              scrollSnapType: 'x mandatory'
            }}
            onMouseEnter={pauseAutoplay}
            onMouseLeave={resumeAutoplay}
            onTouchStart={pauseAutoplay}
            onTouchEnd={resumeAutoplay}
          >
            {products.map((product) => (
              <Link key={product.id} href={`/products/${product.slug}`} className="group">
                <div className="flex-none w-64 sm:w-72 lg:w-80 bg-white rounded-lg border border-slate-200 overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105 snap-center h-full">
                  <div className="bg-slate-100 overflow-hidden h-48">
                    <img 
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4 md:p-6 flex flex-col justify-between min-h-[140px]">
                    <h3 className="text-xl md:text-2xl font-semibold text-slate-900 leading-tight mb-2" style={{ fontFamily: '-apple-system, "SF Pro Text", system-ui, sans-serif' }}>
                      {product.name}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: Math.ceil(products.length / 3) }).map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  Math.floor(currentIndex / 3) === index ? 'bg-blue-600' : 'bg-slate-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
                onClick={() => {
                  if (carouselRef.current) {
                    carouselRef.current.scrollTo({ left: index * 960, behavior: 'smooth' });
                    setCurrentIndex(index * 3);
                  }
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default function HomePage() {
  // SEO metadata setup
  useEffect(() => {
    document.title = 'VTech Makkers Equipment | Heavy-Duty Crushers, Screens & Washers';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'VTech Makkers delivers 30+ years of heavy-equipment innovation. Discover our rugged, high-performance crushers, screens, classifiers, feeders and conveyors—engineered for mining, aggregates and recycling.'
      );
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'VTech Makkers delivers 30+ years of heavy-equipment innovation. Discover our rugged, high-performance crushers, screens, classifiers, feeders and conveyors—engineered for mining, aggregates and recycling.';
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <main className="bg-white">
      {/* SEO Meta Tags */}
      <link rel="preload" as="image" href={products[0]?.image} />
      
      {/* Industries Strip */}
      <IndustriesCarousel />

      {/* Video Hero */}
      <VideoHero />

      {/* Tagline Block + Lead-In Copy */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 md:mb-6" style={{ fontFamily: '-apple-system, "SF Pro Display", system-ui, sans-serif' }}>
            VTech Makkers | Heavy Equipment Solutions for Crushing, Screening & Material Handling
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-4">Innovative Solutions for Every Industry</h2>
          <p className="text-base md:text-lg text-slate-600 mb-6 max-w-3xl mx-auto leading-relaxed">
            From primary crushing to final sand washing, VTech Makkers designs every machine for maximum uptime, safety and ROI. Explore our full suite of equipment solutions, backed by global service and support.
          </p>
          <p className="text-base md:text-lg text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            From rugged primary jaw crushers to precision tertiary sand makers, VTech Makkers delivers machinery tailored to your project needs—backed by global support and decades of expertise.
          </p>

          <Link href="/products">
            <button className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 hover:scale-105 hover:shadow-xl transition-all duration-300">
              Explore Products
            </button>
          </Link>
        </div>

        {/* JSON-LD WebSite Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://vtechmakkers.com/",
            "name": "VTech Makkers",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://vtechmakkers.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })
        }} />
        
        {/* JSON-LD Organization Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "VTech Makkers",
            "url": "https://vtechmakkers.com",
            "logo": "https://vtechmakkers.com/images/logos/Logo.png",
            "description": "Premium crushing and screening equipment manufacturer specializing in jaw crushers, impactors, and vibratory screens for mining, construction, and recycling industries.",
            "foundingDate": "1990",
            "areaServed": "India",
            "serviceType": [
              "Industrial Equipment Manufacturing",
              "Crushing Equipment",
              "Screening Equipment",
              "Mining Equipment",
              "Construction Equipment"
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Industrial Equipment Catalog",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Product",
                    "name": "Jaw Crushers",
                    "category": "Crushing Equipment"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Product",
                    "name": "Impact Crushers",
                    "category": "Crushing Equipment"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Product",
                    "name": "Vibratory Screens",
                    "category": "Screening Equipment"
                  }
                }
              ]
            }
          })
        }} />
      </section>

      {/* About Preview → Modern Split Card */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/about" className="block">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300">
              {/* Mobile: Stacked Layout */}
              <div className="md:hidden">
                <div className="aspect-[16/9] overflow-hidden">
                  <video
                    src="/media/about/Overview.mp4"
                    poster="/media/about/overview-poster.jpg"
                    autoPlay
                    muted
                    loop
                    playsInline
                    webkit-playsinline="true"
                    preload="metadata"
                    aria-label="About VTech Makkers overview"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    style={{ 
                      objectFit: 'cover',
                      objectPosition: 'center center' 
                    }}
                    onError={(e) => {
                      console.error('About video failed to load:', e);
                    }}
                  />
                </div>
                <div className="p-6 border-l-4 border-blue-600">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4" style={{ fontFamily: '-apple-system, "SF Pro Display", system-ui, sans-serif' }}>
                    30+ Years of Industrial Innovation
                  </h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    VTech Makkers has been at the forefront of crushing and screening technology since 1990, serving mining and construction operations across India.
                  </p>
                  <button className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-blue-700 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100 transition-colors duration-300">
                    Our Story
                    <span className="badge ml-2" aria-label="Arrow right">→</span>
                  </button>
                </div>
              </div>

              {/* Desktop: Two-Column Grid with Overlap */}
              <div className="hidden md:grid md:grid-cols-2 md:gap-0 md:items-center">
                <div className="relative z-10 -mr-8">
                  <video
                    src="/media/about/Overview.mp4"
                    poster="/media/about/overview-poster.jpg"
                    autoPlay
                    muted
                    loop
                    playsInline
                    webkit-playsinline="true"
                    preload="metadata"
                    aria-label="About VTech Makkers overview"
                    className="w-full h-80 object-cover rounded-l-2xl group-hover:scale-105 transition-transform duration-300"
                    style={{ 
                      objectFit: 'cover',
                      objectPosition: 'center center' 
                    }}
                    onError={(e) => {
                      console.error('About video failed to load:', e);
                    }}
                  />
                </div>
                <div className="bg-white p-8 rounded-r-2xl border-l-4 border-blue-600 relative z-20">
                  <h3 className="text-3xl font-bold text-slate-900 mb-6" style={{ fontFamily: '-apple-system, "SF Pro Display", system-ui, sans-serif' }}>
                    30+ Years of Industrial Innovation
                  </h3>
                  <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                    VTech Makkers has been at the forefront of crushing and screening technology since 1990, serving mining and construction operations across India.
                  </p>
                  <button className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-blue-700 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100 hover:scale-105 transition-all duration-300">
                    Our Story
                    <span className="badge ml-2" aria-label="Arrow right">→</span>
                  </button>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Featured Products Carousel */}
      <ProductsCarousel />

      {/* Our Capabilities */}
      <section className="py-16 md:py-20 bg-blue-600 relative">
        {/* Industrial background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '30px 30px'
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Header with industrial styling */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-blue-400 text-sm font-semibold tracking-wider uppercase">Engineering Excellence</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: '-apple-system, "SF Pro Display", system-ui, sans-serif' }}>
              Our Capabilities
            </h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Beyond equipment manufacturing, we provide comprehensive engineering services 
              for complete project success.
            </p>
          </div>

          {/* Staggered layout for visual interest */}
          <div className="space-y-12">
            {capabilities.map((capability, index) => {
              const IconComponent = capability.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                  {/* Icon section with industrial styling */}
                  <div className="flex-shrink-0 lg:w-1/3">
                    <div className="relative">
                      <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center mx-auto relative overflow-hidden group">
                        {/* Hexagon pattern overlay */}
                        <div className="absolute inset-0 opacity-20">
                          <div className="absolute inset-0" style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Cpolygon points='20,1 37,12 37,28 20,39 3,28 3,12'/%3E%3C/g%3E%3C/svg%3E")`,
                            backgroundSize: '20px 20px'
                          }}></div>
                        </div>
                        <IconComponent className="w-16 h-16 text-white relative z-10 group-hover:scale-110 transition-transform duration-300" />
                        {/* Corner accent */}
                        <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-blue-300"></div>
                        <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-blue-300"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content section */}
                  <div className={`lg:w-2/3 ${isEven ? 'lg:text-left' : 'lg:text-right'} text-center`}>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 justify-center lg:justify-start">
                        <div className="w-8 h-0.5 bg-blue-500"></div>
                        <span className="text-blue-400 text-sm font-semibold tracking-wider uppercase">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        {capability.title}
                      </h3>
                      <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
                        {capability.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Teaser */}
      <section className="py-12 md:py-16" style={{ backgroundColor: '#E0F2FF' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mobile: Stacked Layout */}
          <div className="md:hidden text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4" style={{ fontFamily: '-apple-system, "SF Pro Display", system-ui, sans-serif' }}>
              Have a project in mind?
            </h3>
            <p className="text-lg text-slate-600 mb-6">
              Our experts are here to help.
            </p>
            <Link href="/contact">
              <button className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 hover:scale-105 hover:shadow-xl transition-all duration-300">
                Get in Touch
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.418 8-9.879 8-1.171 0-2.292-.14-3.288-.395l-5.833.791.791-5.833C2.395 14.292 2.255 13.171 2.255 12 2.255 7.582 6.673 4 12.131 4S21 7.582 21 12z" />
                </svg>
              </button>
            </Link>
          </div>

          {/* Desktop: Two-Column Layout */}
          <div className="hidden md:grid md:grid-cols-2 md:gap-8 md:items-center">
            <div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4" style={{ fontFamily: '-apple-system, "SF Pro Display", system-ui, sans-serif' }}>
                Have a project in mind?
              </h3>
              <p className="text-lg text-slate-600">
                Our experts are here to help.
              </p>
            </div>
            <div className="text-right">
              <Link href="/contact">
                <button className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 hover:scale-105 hover:shadow-xl transition-all duration-300">
                  Get in Touch
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.418 8-9.879 8-1.171 0-2.292-.14-3.288-.395l-5.833.791.791-5.833C2.395 14.292 2.255 13.171 2.255 12 2.255 7.582 6.673 4 12.131 4S21 7.582 21 12z" />
                  </svg>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}