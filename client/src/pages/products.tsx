import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

interface ProductCategory {
  id: number;
  slug: string;
  name: string;
  category: string;
  image: string;
  description: string;
  applications: string[];
  modelCount: number;
}

export default function ProductsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  // SEO metadata setup
  useEffect(() => {
    document.title = 'VTech Makkers Equipment • Crushers, Screens, Washers & More';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Explore our full lineup of crushers, vibrating screens, sand washers, classifiers, feeders and conveyors. Engineered for heavy-duty performance in mining, aggregates and recycling.'
      );
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Explore our full lineup of crushers, vibrating screens, sand washers, classifiers, feeders and conveyors. Engineered for heavy-duty performance in mining, aggregates and recycling.';
      document.head.appendChild(meta);
    }
  }, []);

  // Main product categories - exactly 11 categories in specified order
  const productCategories: ProductCategory[] = [
    {
      id: 1,
      slug: "single-toggle-jaw-crusher",
      name: "Single Toggle Jaw Crushers",
      category: "Crushers",
      image: "/images/products/single-toggle-jaw-crusher.jpg",
      description: "High-capacity primary crushing with simple, robust design. Featuring single toggle mechanism for efficient operation, ideal for general quarrying and aggregate production.",
      applications: ["General Quarrying Operations", "Aggregate Production Plants", "Road Construction Projects"],
      modelCount: 3
    },
    {
      id: 2,
      slug: "double-toggle-jaw-crusher",
      name: "Double Toggle Jaw Crushers",
      category: "Crushers",
      image: "/images/products/double-toggle-jaw-crusher.jpg",
      description: "Heavy-duty crushers engineered for the toughest applications. Superior crushing performance with enhanced reliability for demanding mining operations.",
      applications: ["Hard Rock Crushing", "Mining Operations", "Heavy-Duty Quarrying"],
      modelCount: 4
    },
    {
      id: 3,
      slug: "hsi-impactors",
      name: "HSI Impactors",
      category: "Crushers",
      image: "/images/products/hsi-impactors.jpg",
      description: "Horizontal shaft impact crushers designed for maximum reduction ratios and excellent particle shape in secondary and tertiary applications.",
      applications: ["Secondary Crushing", "Recycling Operations", "Soft to Medium Hard Materials"],
      modelCount: 3
    },
    {
      id: 4,
      slug: "vsi-cubisand-sand-maker",
      name: "VSI (CubiSand) Sand Maker",
      category: "Tertiary Crushers",
      image: "/images/products/vsi-cubisand-sand-maker.jpg",
      description: "Advanced tertiary crusher producing high-quality manufactured sand with superior shape and consistency for construction applications.",
      applications: ["Manufactured Sand Production", "Sand Shape Improvement", "Concrete Sand Preparation"],
      modelCount: 3
    },
    {
      id: 5,
      slug: "inclined-vibrating-screens",
      name: "Inclined Vibrating Screens",
      category: "Screening",
      image: "/images/products/inclined-vibrating-screens.jpg",
      description: "Heavy-duty screening solutions for efficient material classification. Multi-deck capability with superior screening efficiency for all applications.",
      applications: ["Material Classification", "Aggregate Screening", "Dewatering Operations"],
      modelCount: 4
    },
    {
      id: 6,
      slug: "hydrocyclone-sand-classifiers",
      name: "Hydrocyclone Sand Classifiers",
      category: "Washing",
      image: "/images/products/Hydrocyclone Sand Classifiers.png",
      description: "Precision particle size separation using centrifugal force. Maintenance-free operation with exceptional classification efficiency.",
      applications: ["Fine Sand Classification", "Mineral Processing", "Industrial Process Water Treatment"],
      modelCount: 3
    },
    {
      id: 7,
      slug: "bucket-sand-classifiers",
      name: "Bucket Sand Classifiers",
      category: "Washing",
      image: "/images/products/bucket-elevators.jpg",
      description: "Advanced bucket wheel sand classifiers designed to maximize fine sand recovery while providing excellent dewatering performance.",
      applications: ["Fine Sand Recovery", "Sand Classification", "Tailings Management"],
      modelCount: 3
    },
    {
      id: 8,
      slug: "screw-sand-washers",
      name: "Screw Sand Washers",
      category: "Washing",
      image: "/images/products/Screw Sand Washers.jpeg",
      description: "Efficient sand washing systems utilizing spiral classifier technology for excellent cleaning and dewatering performance.",
      applications: ["Sand Washing", "Fine Material Recovery", "Aggregate Cleaning"],
      modelCount: 3
    },
    {
      id: 9,
      slug: "feeder",
      name: "Vibrating Feeders",
      category: "Feeding",
      image: "/images/products/Vibrating Feeders.png",
      description: "Reliable material feeding systems ensuring consistent flow rates. Designed for continuous operation in demanding industrial environments.",
      applications: ["Primary Feeding", "Material Conveying", "Flow Control"],
      modelCount: 4
    },
    {
      id: 10,
      slug: "conveyor-systems",
      name: "Conveyor Systems",
      category: "Material Handling",
      image: "/images/products/Conveyor Systems.jpeg",
      description: "Heavy-duty belt conveyor systems for efficient material transport in mining and aggregate operations. Modular design for maximum flexibility.",
      applications: ["Material Transport", "Plant Integration", "Stockpile Feeding"],
      modelCount: 3
    },
    {
      id: 11,
      slug: "mobile-crushing-plant",
      name: "Mobile Crushing Plant",
      category: "Mobile",
      image: "/images/products/mobile-crushing-plant.jpg",
      description: "Complete mobile crushing and screening solution for on-site material processing. Track-mounted unit with integrated systems.",
      applications: ["Construction Sites", "Quarry Operations", "Recycling Applications"],
      modelCount: 3
    }
  ];

  // Filter categories based on active filter
  const filteredCategories = activeFilter === "All" 
    ? productCategories 
    : productCategories.filter(category => category.category === activeFilter);

  const categories = ["All", "Crushers", "Tertiary Crushers", "Screening", "Washing", "Feeding", "Material Handling", "Mobile"];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Equipment</h1>
          <p className="text-xl text-gray-600 max-w-3xl mb-6">
            VTech Makkers brings 30+ years of engineering excellence to your site. Browse our range of primary and secondary crushers, screens, washers and material‐handling equipment—designed to maximize uptime, safety and ROI.
          </p>
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeFilter === category ? "default" : "outline"}
                onClick={() => setActiveFilter(category)}
                className="transition-all duration-200"
              >
                {category}
                {category !== "All" && (
                  <Badge variant="secondary" className="ml-2">
                    {productCategories.filter(cat => cat.category === category).length}
                  </Badge>
                )}
                {category === "All" && (
                  <Badge variant="secondary" className="ml-2">
                    {productCategories.length}
                  </Badge>
                )}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Product Categories Grid - Exactly 8 Main Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredCategories.map((category) => (
            <Link key={category.slug} href={`/products/${category.slug}`}>
              <Card 
                className="group hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                itemScope
                itemType="https://schema.org/Product"
              >
                {/* Product Image */}
                <div className="w-full bg-gradient-to-br from-blue-50 to-gray-100 flex items-center justify-center relative overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={`${category.name} - Heavy-duty industrial equipment by VTech Makkers`}
                    style={{ objectFit: 'contain', width: '100%', height: 'auto' }}
                    className="group-hover:scale-105 transition-transform duration-300"
                    itemProp="image"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge variant="outline" className="bg-white/90 text-blue-600 border-blue-200">
                      {category.category}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <Badge variant="secondary" className="bg-white/90 text-gray-700">
                      {category.modelCount} Models
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 
                    className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors"
                    itemProp="name"
                  >
                    {category.name}
                  </h3>
                  <meta itemProp="url" content={`https://vtechmakkers.com/products/${category.slug}`} />
                  <meta itemProp="brand" content="VTech Makkers" />
                  <meta itemProp="category" content={category.category} />
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                    {category.description}
                  </p>
                  
                  {/* Key Applications */}
                  <div className="space-y-2 mb-6">
                    <h4 className="text-xs font-medium text-gray-700 mb-1">Key Applications:</h4>
                    <div className="flex flex-wrap gap-1">
                      {category.applications.slice(0, 2).map((app, index) => (
                        <span key={index} className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Button className="w-full group pointer-events-none">
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {filteredCategories.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No products found in this category.</p>
          </div>
        )}

        {/* JSON-LD ProductList Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": productCategories.map((category, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "url": `https://vtechmakkers.com/products/${category.slug}`
            }))
          })
        }} />
      </div>
    </div>
  );
}