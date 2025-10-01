import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Hammer, Shield, Clock, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function InstallationSupportPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-orange-900 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-orange-700 hover:bg-orange-600">
              Services & Support
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Installation Support
            </h1>
            <p className="text-xl md:text-2xl text-orange-100 leading-relaxed">
              Professional installation services ensuring your equipment is commissioned correctly, 
              safely, and efficiently. Our experienced field teams deliver seamless installation 
              support from foundation to final commissioning.
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
              <Hammer className="h-8 w-8 text-orange-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Professional Installation Excellence</h2>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              Proper installation is critical to equipment performance, longevity, and safety. Our installation 
              support services ensure your investment operates at peak efficiency from day one. With decades 
              of field experience, our certified technicians handle every aspect of the installation process, 
              minimizing downtime and ensuring compliance with all safety and operational standards.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Key Offerings */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-orange-50">
                <CardTitle className="flex items-center text-2xl text-orange-900">
                  <Shield className="h-6 w-6 mr-3" />
                  Installation Services
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <ul className="space-y-4">
                  {[
                    "Pre-installation site surveys and preparation",
                    "Foundation design verification and approval",
                    "Equipment positioning and alignment services",
                    "Mechanical assembly and component installation",
                    "Electrical connections and control system setup",
                    "Hydraulic and pneumatic system commissioning",
                    "Safety system integration and testing",
                    "Performance testing and calibration",
                    "Operator training and handover procedures",
                    "Documentation and certification delivery"
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
                  <Clock className="h-6 w-6 mr-3" />
                  Installation Benefits
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <ul className="space-y-4">
                  {[
                    "Faster project commissioning and startup times",
                    "Guaranteed compliance with safety and regulatory standards",
                    "Optimal equipment performance from initial operation",
                    "Reduced risk of installation-related issues and delays",
                    "Comprehensive warranty coverage and support",
                    "Professional certification and documentation",
                    "Minimized disruption to existing operations",
                    "Expert troubleshooting during commissioning phase",
                    "Immediate operational readiness upon completion",
                    "Peace of mind with professional installation standards"
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

          {/* Installation Process */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Installation Process</h2>
            <div className="grid md:grid-cols-5 gap-4">
              {[
                { step: "1", title: "Site Assessment", desc: "Comprehensive evaluation of installation requirements" },
                { step: "2", title: "Planning & Logistics", desc: "Detailed scheduling and resource coordination" },
                { step: "3", title: "Installation Execution", desc: "Professional assembly and system integration" },
                { step: "4", title: "Testing & Commissioning", desc: "Performance validation and system optimization" },
                { step: "5", title: "Training & Handover", desc: "Operator training and project completion" }
              ].map((phase, index) => (
                <Card key={index} className="text-center border-2 border-orange-100 hover:border-orange-300 transition-colors">
                  <CardContent className="p-4">
                    <div className="w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-3">
                      {phase.step}
                    </div>
                    <h3 className="font-semibold text-sm mb-2 text-gray-900">{phase.title}</h3>
                    <p className="text-gray-600 text-xs">{phase.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-gradient-to-r from-orange-600 to-orange-800 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Professional Installation Support
            </h2>
            <p className="text-xl mb-8 text-orange-100">
              Ensure your equipment installation is handled by certified professionals. 
              Contact our installation team to schedule your project support services.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 font-semibold px-8 py-4 text-lg">
                Schedule Installation Support
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}