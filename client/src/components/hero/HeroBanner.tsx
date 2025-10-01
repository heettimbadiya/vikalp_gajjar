import { useState, useEffect } from 'react';
import { Link } from 'wouter';

interface HeroImage {
  src: string;
  alt: string;
  fallback?: string;
}

const heroImages: HeroImage[] = [
  {
    src: "/images/products/double-toggle-jaw-crusher.jpg",
    alt: "High-performance industrial crushing equipment",
    fallback: "/images/products/mobile-crushing-plant.jpg"
  },
  {
    src: "/images/products/mobile-crushing-plant.jpg", 
    alt: "Mobile crushing plant in operation",
    fallback: "/images/products/hsi-impactors.jpg"
  },
  {
    src: "/images/products/hsi-impactors.jpg",
    alt: "HSI Impact crusher technology",
    fallback: "/images/products/double-toggle-jaw-crusher.jpg"
  }
];

export default function HeroBanner() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [currentImage, setCurrentImage] = useState(heroImages[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
      setImageLoaded(false);
    }, 8000); // Change image every 8 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setCurrentImage(heroImages[currentImageIndex]);
  }, [currentImageIndex]);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = (e: any) => {
    const target = e.target as HTMLImageElement;
    if (target) {
      const fallbackSrc = currentImage.fallback;
      
      if (fallbackSrc && target.src !== fallbackSrc) {
        target.src = fallbackSrc;
      } else {
        target.style.display = 'none';
      }
    }
  };

  return (
    <section className="relative bg-slate-900 text-white overflow-hidden min-h-screen flex items-center">
      {/* Background Image with Smooth Transitions */}
      <div className="absolute inset-0">
        <div className="relative w-full h-full">
          <img 
            key={currentImageIndex}
            src={currentImage.src}
            alt={currentImage.alt}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              imageLoaded ? 'opacity-20' : 'opacity-0'
            }`}
            onLoad={handleImageLoad}
            onError={handleImageError}
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-900/40"></div>
          {/* Subtle Pattern Overlay */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-24 lg:py-32 text-center z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400 animate-pulse">
              The Bedrock
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600">
              of Your Operation.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-8 max-w-4xl mx-auto text-xl md:text-2xl text-slate-300 leading-relaxed font-light">
            For over <span className="font-semibold text-blue-400">30 years</span>, VTech Makkers has delivered 
            engineering excellence. Our crushing, screening, and washing solutions are built for 
            <span className="font-semibold text-white"> maximum uptime</span> and a 
            <span className="font-semibold text-blue-400"> lower total cost of ownership</span>.
          </p>

          {/* Key Stats */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-center">
            <div className="px-4">
              <div className="text-3xl font-bold text-blue-400">1,200+</div>
              <div className="text-sm text-slate-400 uppercase tracking-wide">Installations</div>
            </div>
            <div className="px-4">
              <div className="text-3xl font-bold text-blue-400">98%</div>
              <div className="text-sm text-slate-400 uppercase tracking-wide">Uptime Rate</div>
            </div>
            <div className="px-4">
              <div className="text-3xl font-bold text-blue-400">30+</div>
              <div className="text-sm text-slate-400 uppercase tracking-wide">Years Experience</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/products" className="w-full sm:w-auto group">
              <button className="w-full sm:w-auto inline-flex items-center justify-center h-14 px-10 py-4 text-lg font-semibold rounded-xl text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                <span>View All Product Lines</span>
                <svg className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </Link>
            <Link href="/contact" className="w-full sm:w-auto group">
              <button className="w-full sm:w-auto inline-flex items-center justify-center h-14 px-10 py-4 text-lg font-semibold rounded-xl text-white bg-transparent border-2 border-slate-500 hover:border-white hover:bg-white hover:text-slate-900 transition-all duration-300 backdrop-blur-sm">
                <span>Request a Consultation</span>
                <svg className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.418 8-9.879 8-1.171 0-2.292-.14-3.288-.395l-5.833.791.791-5.833C2.395 14.292 2.255 13.171 2.255 12 2.255 7.582 6.673 4 12.131 4S21 7.582 21 12z" />
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Image Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex 
                ? 'bg-blue-500 scale-125' 
                : 'bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`View image ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}