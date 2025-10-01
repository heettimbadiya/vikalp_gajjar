import { useState, useEffect } from 'react';
import { fetchApi } from '@/lib/utils';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

interface Product {
  id: number;
  slug: string;
  name: string;
  category: string;
  image: string;
  description: string;
}

interface RecommendedCarouselProps {
  currentSlug: string;
  limit?: number;
}

export default function RecommendedCarousel({ currentSlug, limit = 6 }: RecommendedCarouselProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecommendedProducts = async () => {
      try {
        const allProducts: Product[] = await fetchApi('/api/products');
        const currentProduct = allProducts.find(p => p.slug === currentSlug);
        
        if (!currentProduct) {
          setProducts([]);
          return;
        }

        // Get products from same category, excluding current
        let recommended = allProducts.filter(p => 
          p.slug !== currentSlug && 
          p.category === currentProduct.category
        );
        
        // Backfill with other products if needed
        if (recommended.length < limit) {
          const others = allProducts.filter(p => 
            p.slug !== currentSlug && 
            p.category !== currentProduct.category
          );
          recommended = [...recommended, ...others];
        }
        
        setProducts(recommended.slice(0, limit));
      } catch (error) {
        console.error('Error fetching recommended products:', error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    if (currentSlug) {
      fetchRecommendedProducts();
    }
  }, [currentSlug, limit]);

  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement>) => {
    const target = event.currentTarget;
    target.src = '/images/placeholders/product.svg';
  };

  if (loading) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Recommended Equipment</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              After 30 years of plant design we've learned which machines work best together. 
              These picks help you build a seamless flow.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Card key={i} className="animate-pulse">
                <CardContent className="p-0">
                  <div className="aspect-square bg-gray-200 rounded-t-lg"></div>
                  <div className="p-4 space-y-3">
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                    <div className="h-8 bg-gray-200 rounded w-full"></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (products.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Recommended Equipment</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            After 30 years of plant design we've learned which machines work best together. 
            These picks help you build a seamless flow.
          </p>
        </div>

        {/* Mobile: Horizontal scroll */}
        <div className="md:hidden overflow-x-auto">
          <div className="flex gap-4 pb-4" style={{ width: 'max-content' }}>
            {products.map((product) => (
              <div key={product.id} className="w-72 flex-shrink-0">
                <Card className="h-full hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="aspect-square overflow-hidden rounded-t-lg">
                      <img
                        src={product.image}
                        alt={product.name}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        onError={handleImageError}
                      />
                    </div>
                    <div className="p-4">
                      <Badge variant="secondary" className="mb-2">
                        {product.category}
                      </Badge>
                      <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                        {product.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                        {product.description}
                      </p>
                      <Link href={`/products/${product.slug}`}>
                        <Button variant="outline" size="sm" className="w-full">
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: Grid layout */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="h-full hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-0">
                <div className="overflow-hidden rounded-t-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    decoding="async"
                    style={{ objectFit: 'contain', width: '100%', height: 'auto' }}
                    className="transition-transform duration-300 hover:scale-105"
                    onError={handleImageError}
                  />
                </div>
                <div className="p-4">
                  <Badge variant="secondary" className="mb-2">
                    {product.category}
                  </Badge>
                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  <Link href={`/products/${product.slug}`}>
                    <button className="w-full py-2 border-2 border-blue-600 rounded-lg text-blue-600 font-medium hover:bg-blue-50 transition">
                      View Details
                    </button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <Link href="/products">
            <Button variant="outline" size="lg">
              View All Equipment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}