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

interface RelatedProductsProps {
  currentProductId: number;
  currentCategory: string;
}

// Legacy component - use RecommendedCarousel instead
export default function RelatedProducts({ currentProductId, currentCategory }: RelatedProductsProps) {
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRelatedProducts = async () => {
      try {
        const allProducts: Product[] = await fetchApi('/api/products');
        
        // Logic for finding related products
        const related = findRelatedProducts(allProducts, currentProductId, currentCategory);
        setRelatedProducts(related);
      } catch (error) {
        console.error('Error fetching related products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRelatedProducts();
  }, [currentProductId, currentCategory]);

  const findRelatedProducts = (products: Product[], currentId: number, category: string): Product[] => {
    // Exclude current product
    const otherProducts = products.filter(p => p.id !== currentId);
    
    // Define related product logic based on category
    const relationshipMap: Record<string, string[]> = {
      "Crushers": ["Screening", "Material Handling"],
      "Screening": ["Crushers", "Washing"],
      "Washing": ["Screening", "Material Handling"],
      "Material Handling": ["Crushers", "Screening"]
    };
    
    const relatedCategories = relationshipMap[category] || [];
    
    // First try to find products from related categories
    const categoryRelated = otherProducts.filter(p => 
      relatedCategories.includes(p.category)
    );
    
    // If not enough, add products from same category
    const sameCategory = otherProducts.filter(p => 
      p.category === category
    );
    
    // Combine and limit to 3 products
    const combined = [...categoryRelated, ...sameCategory];
    return combined.slice(0, 3);
  };

  if (loading) {
    return (
      <div className="mt-16">
        <h3 className="text-2xl font-bold text-gray-900 mb-8">Related Products</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="animate-pulse">
              <div className="bg-gray-200 h-48 rounded-lg mb-4"></div>
              <div className="bg-gray-200 h-4 rounded mb-2"></div>
              <div className="bg-gray-200 h-3 rounded w-3/4"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (relatedProducts.length === 0) {
    return null;
  }

  return (
    <div className="mt-16">
      <div className="text-center mb-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Complete Your Solution</h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          These complementary products work together to create efficient, integrated processing systems.
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6">
        {relatedProducts.map((product) => (
          <Link key={product.slug} href={`/products/${product.slug}`}>
            <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
              {/* Product Image */}
              <div className="bg-gradient-to-br from-blue-50 to-gray-100 flex items-center justify-center relative overflow-hidden">
                <img 
                  src={product.image}
                  alt={product.name}
                  style={{ objectFit: 'contain', width: '100%', height: 'auto' }}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-blue-600/10"></div>
                <div className="absolute top-3 right-3">
                  <Badge variant="outline" className="bg-white/90 text-blue-600 border-blue-200 text-xs">
                    {product.category}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-4">
                <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {product.name}
                </h4>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>
                
                <button className="w-full py-2 border-2 border-blue-600 rounded-lg text-blue-600 font-medium hover:bg-blue-50 transition">
                  View Details
                </button>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
      
      <div className="text-center mt-8">
        <Link href="/products">
          <Button variant="outline" size="lg">
            View All Products
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
}