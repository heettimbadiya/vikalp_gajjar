import { useState } from 'react';
import { Link } from 'wouter';
import { Product } from '../data/products';

interface ProductShowcaseProps {
  products: Product[];
}

export default function ProductShowcase({ products }: ProductShowcaseProps) {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  const handleImageError = (e: any, productId: number) => {
    const target = e.target as HTMLImageElement;
    if (target && target.parentElement) {
      const fallback = target.parentElement.querySelector('.image-fallback') as HTMLElement;
      if (fallback) {
        target.style.display = 'none';
        fallback.style.display = 'flex';
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z" />
            </svg>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Core Equipment Showcase
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Engineered for reliability and performance at every stage of your processing circuit. 
            Each machine represents decades of innovation and real-world testing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group relative"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <Link href={`/products/${product.slug}`}>
                <div className={`relative rounded-2xl border-2 bg-white/90 backdrop-blur-sm border-slate-200 hover:border-blue-300 transition-all duration-500 transform hover:-translate-y-3 hover:shadow-2xl overflow-hidden ${
                  hoveredProduct === product.id ? 'scale-105' : ''
                }`}>
                  
                  {/* Product Image */}
                  <div className="relative h-56 overflow-hidden rounded-t-2xl bg-slate-100">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      onError={(e) => handleImageError(e, product.id)}
                    />
                    <div className="image-fallback absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-200 to-slate-300" style={{ display: 'none' }}>
                      <div className="text-center">
                        <svg className="w-12 h-12 text-slate-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z" />
                        </svg>
                        <p className="text-slate-500 text-sm font-medium">Product Image</p>
                      </div>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 border border-blue-200">
                        {product.category}
                      </span>
                    </div>

                    {/* Hover Overlay */}
                    <div className={`absolute inset-0 bg-blue-600/90 transition-opacity duration-300 flex items-center justify-center ${
                      hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'
                    }`}>
                      <div className="text-white text-center">
                        <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        <p className="font-semibold">View Details</p>
                      </div>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-3 h-14 flex items-center">
                      {product.name}
                    </h3>
                    <p className="text-slate-600 mb-4 h-20 overflow-hidden leading-relaxed">
                      {product.description}
                    </p>
                    
                    {/* Key Benefits */}
                    {product.benefits && product.benefits.length > 0 && (
                      <div className="mb-4">
                        <div className="flex flex-wrap gap-1">
                          {product.benefits.slice(0, 2).map((benefit, idx) => (
                            <span key={idx} className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-green-100 text-green-800">
                              <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                              {benefit}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* CTA */}
                    <div className="flex items-center justify-between">
                      <div className="text-blue-700 font-semibold flex items-center group-hover:text-blue-800">
                        <span>Technical Specifications</span>
                        <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                      
                      {/* Spec Models Count */}
                      {product.spec_models && product.spec_models.length > 0 && (
                        <div className="text-sm text-slate-500">
                          {product.spec_models.length} models
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* View All Products CTA */}
        <div className="text-center">
          <Link href="/products">
            <button className="group inline-flex items-center justify-center h-14 px-10 py-4 text-lg font-semibold rounded-xl text-blue-600 border-2 border-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              <span>View All 10 Product Lines</span>
              <svg className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}