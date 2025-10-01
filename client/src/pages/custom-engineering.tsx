import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Cog, Wrench, Zap, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function CustomEngineeringPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-purple-900 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-purple-700 hover:bg-purple-600">
              Services & Support
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Custom Engineering
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 leading-relaxed">
              Tailored engineering solutions designed specifically for your unique operational challenges. 
              Our custom engineering services transform standard equipment into specialized solutions 
              that perfectly match your project requirements.
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
              <Cog className="h-8 w-8 text-purple-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Engineering Excellence for Unique Challenges</h2>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              Every industrial operation has unique requirements that standard equipment may not fully address. 
              Our custom engineering services bridge this gap by designing, modifying, and optimizing equipment 
              to meet your exact specifications. From concept to commissioning, we deliver engineering solutions 
              that maximize performance while minimizing operational complexity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Key Offerings */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-purple-50">
                <CardTitle className="flex items-center text-2xl text-purple-900">
                  <Wrench className="h-6 w-6 mr-3" />
                  Custom Engineering Services
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <ul className="space-y-4">
                  {[
                    "Bespoke equipment design and development",
                    "Equipment modification and enhancement",
                    "Integration solutions for existing plant systems",
                    "Specialized wear parts and component design",
                    "Automation and control system integration",
                    "Structural engineering and foundation design",
                    "Material handling system customization",
                    "Environmental and safety system integration",
                    "Prototype development and testing",
                    "Reverse engineering and component replication"
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
                  <Zap className="h-6 w-6 mr-3" />
                  Custom Engineering Benefits
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <ul className="space-y-4">
                  {[
                    "Perfect fit solutions for unique operational requirements",
                    "Enhanced performance beyond standard equipment capabilities",
                    "Optimized efficiency for specific material characteristics",
                    "Integration compatibility with existing plant infrastructure",
                    "Reduced operational complexity through smart design",
                    "Future-proofed solutions with scalability considerations",
                    "Proprietary advantages in competitive markets",
                    "Minimized maintenance requirements through robust design",
                    "Compliance with specific industry standards and regulations",
                    "Cost-effective alternatives to complete system replacement"
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

          {/* Process Overview */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Custom Engineering Process</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: "1", title: "Requirements Analysis", desc: "Detailed assessment of your specific needs and constraints" },
                { step: "2", title: "Concept Development", desc: "Engineering design and feasibility analysis with multiple options" },
                { step: "3", title: "Prototyping & Testing", desc: "Physical or digital prototypes for validation and refinement" },
                { step: "4", title: "Implementation", desc: "Manufacturing, installation, and commissioning support" }
              ].map((phase, index) => (
                <Card key={index} className="text-center border-2 border-purple-100 hover:border-purple-300 transition-colors">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                      {phase.step}
                    </div>
                    <h3 className="font-semibold text-lg mb-2 text-gray-900">{phase.title}</h3>
                    <p className="text-gray-600 text-sm">{phase.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Transform Your Vision into Reality
            </h2>
            <p className="text-xl mb-8 text-purple-100">
              Have a unique engineering challenge? Our custom engineering team is ready to develop 
              the perfect solution tailored to your exact requirements.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-8 py-4 text-lg">
                Request Custom Engineering Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}