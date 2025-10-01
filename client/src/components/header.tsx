import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, ChevronDown } from "lucide-react";

interface Product {
  id: number;
  slug: string;
  name: string;
  category: string;
}

interface MenuCategory {
  name: string;
  items: Product[];
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [menuCategories, setMenuCategories] = useState<MenuCategory[]>([]);
  const [location] = useLocation();

  useEffect(() => {
    const fetchProductsAndBuildMenu = async () => {
      try {
        const response = await fetch('/api/menu-products');
        const data = await response.json();
        
        if (data.products) {
          const categories = organizeProductsIntoCategories(data.products);
          setMenuCategories(categories);
        }
      } catch (error) {
        console.error('Failed to fetch products for navigation:', error);
      }
    };

    fetchProductsAndBuildMenu();
  }, []);

  // Close mobile menu and dropdowns when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const organizeProductsIntoCategories = (products: Product[]): MenuCategory[] => {
    const categories: MenuCategory[] = [
      {
        name: "Crushing Equipment",
        items: products.filter(p => 
          p.category === 'Crushers'
        )
      },
      {
        name: "Screening Solutions", 
        items: products.filter(p => 
          p.category === 'Screening'
        )
      },
      {
        name: "Sand Processing",
        items: products.filter(p => 
          p.category === 'Washing'
        )
      },
      {
        name: "Material Handling",
        items: products.filter(p => 
          p.category === 'Material Handling'
        )
      }
    ];

    return categories.filter(category => category.items.length > 0);
  };

  const handleDropdownEnter = (categoryName: string) => {
    setActiveDropdown(categoryName);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/95 border-b border-white/30 shadow-lg supports-[backdrop-filter]:bg-white/90">
      <div className="container mx-auto px-4 relative">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center">
              <img 
                src="/images/logos/Logo.png" 
                alt="VTech Makkers logo" 
                width="120" 
                height="40"
                className="h-10 w-auto object-contain rounded-lg"
                style={{
                  mixBlendMode: 'multiply',
                  filter: 'brightness(1.1) contrast(1.1)',
                  background: 'transparent'
                }}
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">
              Home
            </Link>
            
            <Link href="/products" className="text-gray-700 hover:text-blue-600 font-medium">
              Products
            </Link>
            
            <Link href="/solutions" className="text-gray-700 hover:text-blue-600 font-medium">
              Solutions
            </Link>
            
            <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium">
              About
            </Link>
            
            <Link href="/knowledge-center" className="text-gray-700 hover:text-blue-600 font-medium">
              Knowledge Center
            </Link>
            
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium">
              Contact
            </Link>
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden xl:flex items-center space-x-3">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <span className="badge text-xs" aria-label="Phone">📞</span>
              <span className="whitespace-nowrap">+91 94260 29949</span>
            </div>
            <Link href="/contact">
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                Get Quote
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 md:hidden backdrop-blur-xl bg-white/95 border-b border-white/30 shadow-xl supports-[backdrop-filter]:bg-white/90 z-40">
            <div className="py-4 px-4">
              <nav className="flex flex-col space-y-2">
              <Link 
                href="/" 
                className="px-2 py-2 text-gray-700 hover:text-blue-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              
              <Link 
                href="/products" 
                className="px-2 py-2 text-gray-700 hover:text-blue-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
              
              <Link 
                href="/solutions" 
                className="px-2 py-2 text-gray-700 hover:text-blue-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Solutions
              </Link>
              
              <Link 
                href="/knowledge-center" 
                className="px-2 py-2 text-gray-700 hover:text-blue-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Knowledge Center
              </Link>
              
              <Link 
                href="/about" 
                className="px-2 py-2 text-gray-700 hover:text-blue-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              
              <Link 
                href="/contact" 
                className="px-2 py-2 text-gray-700 hover:text-blue-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              
              <div className="pt-4 mt-4 border-t border-gray-200">
                <div className="flex items-center space-x-2 text-sm text-gray-600 px-2 py-1">
                  <span className="badge text-sm" aria-label="Phone">📞</span>
                  <span>+91 94260 29949</span>
                </div>
                <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700 w-full mt-2">
                    Get Quote
                  </Button>
                </Link>
              </div>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}