import { Link } from "wouter";
import { useEffect } from 'react';

const equipmentData = [
  {
    name: "Single-Toggle Jaw Crusher",
    slug: "single-toggle-jaw-crusher",
    image: "/images/products/single-toggle-jaw-crusher.jpg"
  },
  {
    name: "Double-Toggle Jaw Crusher",
    slug: "double-toggle-jaw-crusher",
    image: "/images/products/double-toggle-jaw-crusher.jpg"
  },
  {
    name: "HSI Impactors", 
    slug: "hsi-impactors",
    image: "/images/products/hsi-impactors.jpg"
  },
  {
    name: "Inclined Vibrating Screens",
    slug: "inclined-vibrating-screens",
    image: "/images/products/inclined-vibrating-screens.jpg"
  },
  {
    name: "Conveyor Systems", 
    slug: "conveyor-systems",
    image: "/images/products/Conveyor Systems.jpeg"
  }
];

const applications = [
  {
    title: "Material Recovery",
    description: "Separation and recovery of valuable construction materials",
    badge: "MR"
  },
  {
    title: "Contamination Removal",
    description: "Separation of wood, metal, and other contaminants",
    badge: "CR"
  },
  {
    title: "Aggregate Production",
    description: "High-quality recycled aggregates for construction use",
    badge: "AP"
  }
];

export default function CDRecyclingSolutions() {
  useEffect(() => {
    document.title = 'C&D Recycling Solutions | VTech Makkers';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'C&D Recycling Solutions Built for Maximum Uptime & Quality. Advanced contamination removal and material recovery systems for construction & demolition waste.'
      );
    }
  }, []);

  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
      <section 
        className="py-20 text-white relative"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.5) 100%), url('/images/optimized/cd-recycling.webp')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              C&D Recycling Solutions Built for Maximum Uptime & Quality
            </h1>
            <p className="text-lg mb-8 max-w-3xl mx-auto opacity-90">
              VTech Makkers provides advanced contamination removal and material recovery systems designed for construction & demolition waste processing. Our proven technology ensures efficient separation and maximum material recovery while maintaining consistent quality output.
            </p>
            <Link href="/contact?solution=cd-recycling">
              <button 
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-all transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300"
                aria-label="Get a custom C&D recycling solution"
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
                <h3 className="font-semibold text-slate-900">Waste Assessment</h3>
                <p className="text-sm text-slate-600">Comprehensive assessment of construction and demolition waste</p>
              </div>
            </div>
            
            <div className="flex items-center p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors border-l-4 border-slate-400">
              <div className="w-2 h-2 bg-slate-400 rounded-full mr-4 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold text-slate-900">Contamination Removal</h3>
                <p className="text-sm text-slate-600">Advanced separation and cleaning systems</p>
              </div>
            </div>
            
            <div className="flex items-center p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors border-l-4 border-slate-400">
              <div className="w-2 h-2 bg-slate-400 rounded-full mr-4 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold text-slate-900">Material Recovery</h3>
                <p className="text-sm text-slate-600">Efficient recovery of valuable materials including concrete and metals</p>
              </div>
            </div>
            
            <div className="flex items-center p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors border-l-4 border-slate-400">
              <div className="w-2 h-2 bg-slate-400 rounded-full mr-4 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold text-slate-900">Quality Processing</h3>
                <p className="text-sm text-slate-600">Processing recycled materials to meet industry standards</p>
              </div>
            </div>
            
            <div className="flex items-center p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors border-l-4 border-slate-400">
              <div className="w-2 h-2 bg-slate-400 rounded-full mr-4 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold text-slate-900">Environmental Compliance</h3>
                <p className="text-sm text-slate-600">Ensuring all recycling processes meet environmental regulations</p>
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
                <h3 className="font-semibold text-slate-900">Material Recovery</h3>
                <p className="text-sm text-slate-600">Comprehensive recovery of valuable materials from construction waste</p>
              </div>
            </div>
            
            <div className="flex items-center p-4 bg-white rounded-lg hover:bg-gray-50 transition-colors border-l-4 border-gray-300">
              <div className="w-2 h-2 bg-gray-400 rounded-full mr-4 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold text-slate-900">Contamination Removal</h3>
                <p className="text-sm text-slate-600">Advanced separation systems for removing contaminants</p>
              </div>
            </div>
            
            <div className="flex items-center p-4 bg-white rounded-lg hover:bg-gray-50 transition-colors border-l-4 border-gray-300">
              <div className="w-2 h-2 bg-gray-400 rounded-full mr-4 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold text-slate-900">Aggregate Production</h3>
                <p className="text-sm text-slate-600">Production of high-quality recycled aggregates</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Key Equipment</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {equipmentData.map((equipment, index) => (
              <Link key={index} href={`/products/${equipment.slug}`}>
                <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 focus-within:ring-4 focus-within:ring-blue-300 focus-within:outline-none">
                  <div className="aspect-w-16 aspect-h-12 bg-gray-200 rounded-t-lg overflow-hidden">
                    <img 
                      src={equipment.image} 
                      alt={`${equipment.name} - C&D recycling and material recovery equipment`}
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
          <h2 className="text-3xl font-bold mb-4">Ready to optimize your C&D Recycling process?</h2>
          <p className="text-xl mb-8 opacity-90">Get equipment engineered for maximum material recovery and contamination removal</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact?solution=cd-recycling">
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