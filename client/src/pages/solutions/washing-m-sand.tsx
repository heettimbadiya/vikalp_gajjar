import { Link } from "wouter";
import { useEffect } from 'react';

const equipmentData = [
  {
    name: "VSI (CubiSand) Sand Maker",
    slug: "vsi-cubisand-sand-maker", 
    image: "/images/products/vsi-cubisand-sand-maker.jpg"
  },
  {
    name: "Bucket Sand Classifiers",
    slug: "bucket-sand-classifiers",
    image: "/images/products/bucket-elevators.jpg"
  },
  {
    name: "Hydrocyclone Sand Classifiers", 
    slug: "hydrocyclone-sand-classifiers",
    image: "/images/products/Hydrocyclone Sand Classifiers.png"
  }
];

const applications = [
  {
    title: "Manufactured Sand Production",
    description: "High-quality M-Sand with optimal gradation and shape",
    badge: "MS"
  },
  {
    title: "Sand Washing & Classification",
    description: "Ultra-fine removal and precise size classification",
    badge: "SW"
  },
  {
    title: "Concrete & Mortar Mix",
    description: "Premium sand for high-strength concrete applications",
    badge: "CM"
  }
];

export default function WashingMSandSolutionsPage() {
  useEffect(() => {
    document.title = 'Sand Washing & M-Sand Solutions | VTech Makkers';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Sand Washing & M-Sand Solutions Built for Maximum Uptime & Quality. Specialized equipment for manufactured sand production, washing, and classification.'
      );
    }
  }, []);

  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
      <section 
        className="py-20 text-white relative"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.5) 100%), url("/images/optimized/sand-washing-msang.webp")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Sand Washing & M-Sand Solutions Built for Maximum Uptime & Quality
            </h1>
            <p className="text-lg mb-8 max-w-3xl mx-auto opacity-90">
              VTech Makkers delivers advanced sand washing and manufactured sand production systems with superior ultra-fine removal and cubical shape production. Our proven technology ensures consistent quality and maximum operational efficiency for premium sand manufacturing.
            </p>
            <div className="bg-blue-600/20 backdrop-blur-sm rounded-lg p-4 max-w-2xl mx-auto mb-8">
              <h3 className="text-lg font-semibold mb-2 text-blue-100">Key Challenge</h3>
              <p className="text-blue-200">Ultra-fine removal & cubical shape production</p>
            </div>
            <Link href="/contact?solution=sand-washing">
              <button 
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-all transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300"
                aria-label="Get a custom sand washing and M-sand solution"
              >
                Get a Custom Solution
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services We Offer */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Services We Offer</h2>
          
          <div className="max-w-4xl mx-auto space-y-3">
            <div className="flex items-center p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors border-l-4 border-slate-400">
              <div className="w-2 h-2 bg-slate-400 rounded-full mr-4 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold text-slate-900">Sand Washing Systems</h3>
                <p className="text-sm text-slate-600">Advanced washing technology for removing impurities</p>
              </div>
            </div>
            
            <div className="flex items-center p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors border-l-4 border-slate-400">
              <div className="w-2 h-2 bg-slate-400 rounded-full mr-4 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold text-slate-900">M-Sand Production</h3>
                <p className="text-sm text-slate-600">Complete manufactured sand production with VSI technology</p>
              </div>
            </div>
            
            <div className="flex items-center p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors border-l-4 border-slate-400">
              <div className="w-2 h-2 bg-slate-400 rounded-full mr-4 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold text-slate-900">Fine Material Recovery</h3>
                <p className="text-sm text-slate-600">Hydrocyclone and classification systems for fine material recovery</p>
              </div>
            </div>
            
            <div className="flex items-center p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors border-l-4 border-slate-400">
              <div className="w-2 h-2 bg-slate-400 rounded-full mr-4 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold text-slate-900">Quality Control</h3>
                <p className="text-sm text-slate-600">Quality testing and process control for consistent gradation</p>
              </div>
            </div>
            
            <div className="flex items-center p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors border-l-4 border-slate-400">
              <div className="w-2 h-2 bg-slate-400 rounded-full mr-4 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold text-slate-900">Water Treatment</h3>
                <p className="text-sm text-slate-600">Water clarification and recycling systems</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Showcase */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Applications</h2>
          
          <div className="max-w-4xl mx-auto space-y-3">
            <div className="flex items-center p-4 bg-white rounded-lg hover:bg-gray-50 transition-colors border-l-4 border-gray-300">
              <div className="w-2 h-2 bg-gray-400 rounded-full mr-4 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold text-slate-900">Manufactured Sand</h3>
                <p className="text-sm text-slate-600">High-quality manufactured sand with consistent gradation</p>
              </div>
            </div>
            
            <div className="flex items-center p-4 bg-white rounded-lg hover:bg-gray-50 transition-colors border-l-4 border-gray-300">
              <div className="w-2 h-2 bg-gray-400 rounded-full mr-4 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold text-slate-900">Sand Washing</h3>
                <p className="text-sm text-slate-600">Advanced washing for removing silt, clay, and impurities</p>
              </div>
            </div>
            
            <div className="flex items-center p-4 bg-white rounded-lg hover:bg-gray-50 transition-colors border-l-4 border-gray-300">
              <div className="w-2 h-2 bg-gray-400 rounded-full mr-4 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold text-slate-900">Concrete Mix</h3>
                <p className="text-sm text-slate-600">Premium quality sand for concrete production</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Key Equipment</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {equipmentData.map((equipment, index) => (
              <Link key={index} href={`/products/${equipment.slug}`}>
                <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 focus-within:ring-4 focus-within:ring-blue-300 focus-within:outline-none">
                  <div className="aspect-w-16 aspect-h-12 bg-gray-200 rounded-t-lg overflow-hidden">
                    <img 
                      src={equipment.image} 
                      alt={`${equipment.name} - Industrial sand washing and classification equipment`}
                      className="w-full h-48 object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-slate-900 text-center hover:text-blue-600 transition-colors">
                      {equipment.name}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>



      {/* Closing CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to optimize your Sand Washing & M-Sand process?</h2>
          <p className="text-xl mb-8 opacity-90">Get equipment engineered for superior sand quality and operational efficiency</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact?solution=sand-washing">
              <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300">
                Contact Us
              </button>
            </Link>
            <Link href="/products">
              <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all focus:outline-none focus:ring-4 focus:ring-blue-300">
                View All Equipment
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}