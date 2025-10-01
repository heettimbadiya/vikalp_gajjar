import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Package, Truck, Shield, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function PartsComponentsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-red-900 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-red-700 hover:bg-red-600">
              Services & Support
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Parts & Components
            </h1>
            <p className="text-xl md:text-2xl text-red-100 leading-relaxed">
              Comprehensive inventory of genuine parts and high-quality components to keep your 
              equipment operating at peak performance. Fast delivery, expert support, and 
              guaranteed compatibility for all your maintenance needs.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          
          {/* Introduction */}
          <div className="mb-16">
            <div className="flex items-center mb-6">
              <Package className="h-8 w-8 text-red-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Genuine Parts for Optimal Performance</h2>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              Equipment downtime costs money every minute your operations are halted. Our comprehensive 
              parts and components service ensures you have access to genuine, high-quality replacement 
              parts when you need them. With extensive inventory, fast shipping, and expert technical 
              support, we minimize your downtime and maximize your equipment's operational efficiency.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Key Offerings */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-red-50">
                <CardTitle className="flex items-center text-2xl text-red-900">
                  <Truck className="h-6 w-6 mr-3" />
                  Parts & Components Inventory
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <ul className="space-y-4">
                  {[
                    "Genuine OEM parts with manufacturer warranties",
                    "High-quality aftermarket alternatives for cost savings",
                    "Wear parts including jaw plates, blow bars, and screens",
                    "Electrical components and control system parts",
                    "Hydraulic cylinders, pumps, and fluid components",
                    "Bearings, seals, and mechanical drive components",
                    "Conveyor belting and material handling accessories",
                    "Safety equipment and protective guards",
                    "Lubrication systems and filtration components",
                    "Custom-manufactured parts for specialized applications"
                  ].map((offering, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{offering}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Benefits */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-green-50">
                <CardTitle className="flex items-center text-2xl text-green-900">
                  <Shield className="h-6 w-6 mr-3" />
                  Parts Service Benefits
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <ul className="space-y-4">
                  {[
                    "Minimize equipment downtime with fast parts delivery",
                    "Guaranteed compatibility and quality with genuine parts",
                    "Cost-effective alternatives without compromising performance",
                    "Expert technical support for parts identification",
                    "Comprehensive warranty coverage on all parts supplied",
                    "Emergency parts delivery for critical situations",
                    "Bulk purchasing options for maintenance stock",
                    "Parts upgrade recommendations for improved performance",
                    "Complete documentation and installation support",
                    "Predictive parts replacement planning and scheduling"
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Parts Categories */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Popular Parts Categories</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { 
                  category: "Crusher Wear Parts", 
                  items: ["Jaw Plates", "Blow Bars", "Impact Liners", "Concave Rings"],
                  icon: "🔨"
                },
                { 
                  category: "Screen Components", 
                  items: ["Screen Media", "Deck Frames", "Springs", "Vibrator Motors"],
                  icon: "📊"
                },
                { 
                  category: "Drive Components", 
                  items: ["Bearings", "Pulleys", "V-Belts", "Coupling Sets"],
                  icon: "⚙️"
                },
                { 
                  category: "Electrical Parts", 
                  items: ["Motor Controls", "Sensors", "Wiring", "Junction Boxes"],
                  icon: "⚡"
                }
              ].map((category, index) => (
                <Card key={index} className="border-2 border-red-100 hover:border-red-300 transition-colors">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-4">{category.icon}</div>
                    <h3 className="font-semibold text-lg mb-3 text-gray-900">{category.category}</h3>
                    <ul className="space-y-1 text-sm text-gray-600">
                      {category.items.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Emergency Service */}
          <div className="mt-16 bg-yellow-50 border-l-4 border-yellow-400 p-8 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="bg-yellow-400 text-yellow-900 p-2 rounded-full mr-4">
                <Truck className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold text-yellow-900">Emergency Parts Service</h3>
            </div>
            <p className="text-yellow-800 mb-4">
              Equipment breakdown? Our emergency parts service provides same-day shipping for critical 
              components to get you back in operation quickly. Available 24/7 for urgent situations.
            </p>
            <ul className="text-yellow-800 space-y-2">
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-yellow-600 mr-2" />
                Same-day shipping for stock items
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-yellow-600 mr-2" />
                Expedited manufacturing for custom parts
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-yellow-600 mr-2" />
                Technical support for installation
              </li>
            </ul>
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-gradient-to-r from-red-600 to-red-800 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Get the Parts You Need, When You Need Them
            </h2>
            <p className="text-xl mb-8 text-red-100">
              Don't let parts availability slow down your operations. Contact our parts specialists 
              to check inventory and place your order today.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 font-semibold px-8 py-4 text-lg">
                Contact Parts Department
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}