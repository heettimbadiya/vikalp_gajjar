import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowRight, Hammer, Truck, Layers, Droplets, Route, Building } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";

interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  capacity_min: number;
  capacity_max: number;
  applications: string[];
  features: string[];
}

export default function ProductCategories() {
  const { data: products = [] } = useQuery<Product[]>({
    queryKey: ["/api/products"],
  });

  const categories = [
    {
      id: "crushers",
      name: "Crushers",
      description: "High-performance crushing solutions for all material types and capacities.",
      icon: Hammer,
      items: ["Single & Double Toggle Jaw Crushers", "VSI & HSI Impact Crushers", "Cone Crushers"],
      color: "text-amber-500",
      bgColor: "bg-amber-50",
    },
    {
      id: "mobile-plants",
      name: "Mobile Plants",
      description: "Track-mounted solutions for maximum flexibility and rapid deployment.",
      icon: Truck,
      items: ["Mobile Crushing Plants", "Track-Mounted Systems", "Remote Operation Ready"],
      color: "text-amber-500",
      bgColor: "bg-amber-50",
    },
    {
      id: "screening",
      name: "Screening & Feeding",
      description: "Precise material classification and feeding systems for optimal efficiency.",
      icon: Layers,
      items: ["Vibrating Screens", "Vibrating Feeders", "Grizzly Feeders"],
      color: "text-amber-500",
      bgColor: "bg-amber-50",
    },
    {
      id: "washing",
      name: "Washing Equipment",
      description: "Advanced washing systems for clean, specification-grade materials.",
      icon: Droplets,
      items: ["Hydro Cyclones", "Bucket Sand Washers", "Screw Sand Washers"],
      color: "text-amber-500",
      bgColor: "bg-amber-50",
    },
    {
      id: "conveying",
      name: "Conveying Systems",
      description: "Efficient material transport solutions for any layout requirement.",
      icon: Route,
      items: ["Static Belt Conveyors", "Mobile Belt Systems", "Radial Stackers"],
      color: "text-amber-500",
      bgColor: "bg-amber-50",
    },
    {
      id: "complete-solutions",
      name: "Complete Solutions",
      description: "End-to-end turnkey plant solutions with full engineering support.",
      icon: Building,
      items: ["Turnkey Plant Solutions", "Custom Engineering", "Installation & Commissioning"],
      color: "text-amber-500",
      bgColor: "bg-amber-50",
    },
  ];

  return (
    <section className="py-16 bg-white" id="products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Complete Equipment Solutions</h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            From individual crushers to complete turnkey plant solutions, we provide everything you need for your material processing operations.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Card key={category.id} className="group bg-slate-50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0">
                <div className="w-full h-48 bg-gradient-to-br from-slate-200 to-slate-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon className={`h-20 w-20 ${category.color}`} />
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <Icon className={`text-2xl ${category.color} mr-3 h-6 w-6`} />
                    <h3 className="text-xl font-semibold text-slate-900">{category.name}</h3>
                  </div>
                  <p className="text-slate-600 mb-4">{category.description}</p>
                  <ul className="text-sm text-slate-600 space-y-2 mb-6">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="text-green-600 mr-2 h-4 w-4" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button variant="ghost" className="text-blue-600 font-medium hover:text-blue-700 transition-colors p-0">
                    Explore {category.name} <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
