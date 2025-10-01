import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Wrench, Zap, TrendingUp, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function MaintenanceServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-green-900 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-green-700 hover:bg-green-600">
              Services & Support
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Maintenance Services
            </h1>
            <p className="text-xl md:text-2xl text-green-100 leading-relaxed">
              Comprehensive maintenance programs designed to maximize equipment uptime, 
              extend operational life, and optimize performance. Our proactive maintenance 
              approach prevents costly breakdowns and ensures peak productivity.
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
              <Wrench className="h-8 w-8 text-green-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Proactive Maintenance for Peak Performance</h2>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              In the demanding world of industrial operations, equipment reliability is paramount to profitability. 
              Our comprehensive maintenance services combine preventive care, predictive analytics, and emergency 
              response to keep your operations running smoothly. With certified technicians and genuine parts, 
              we deliver maintenance solutions that extend equipment life and maximize your return on investment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Key Offerings */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-green-50">
                <CardTitle className="flex items-center text-2xl text-green-900">
                  <Zap className="h-6 w-6 mr-3" />
                  Maintenance Services
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <ul className="space-y-4">
                  {[
                    "Scheduled plant inspections and comprehensive audits",
                    "Emergency on-site repair services 24/7 availability",
                    "Operator training programs and safety certification",
                    "Wear and tear analysis with predictive maintenance",
                    "Condition monitoring and performance diagnostics",
                    "Preventive maintenance scheduling and execution",
                    "Lubrication programs and fluid analysis",
                    "Vibration analysis and alignment services",
                    "Electrical system maintenance and troubleshooting",
                    "Documentation and maintenance record management"
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
              <CardHeader className="bg-blue-50">
                <CardTitle className="flex items-center text-2xl text-blue-900">
                  <TrendingUp className="h-6 w-6 mr-3" />
                  Maintenance Benefits
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <ul className="space-y-4">
                  {[
                    "Maximize operational uptime and productivity levels",
                    "Extend the lifespan of your valuable equipment investment",
                    "Ensure a safe working environment for all personnel",
                    "Optimize plant efficiency for lower costs per ton",
                    "Reduce unexpected breakdowns and emergency repairs",
                    "Maintain warranty compliance and manufacturer standards",
                    "Improve product quality through consistent equipment performance",
                    "Lower total cost of ownership over equipment lifecycle",
                    "Enhanced resale value through proper maintenance records",
                    "Regulatory compliance and environmental protection"
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

          {/* Maintenance Programs */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Maintenance Program Options</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { 
                  title: "Basic Maintenance", 
                  desc: "Essential preventive maintenance with scheduled inspections and basic repairs",
                  features: ["Quarterly inspections", "Basic lubrication", "Wear part replacement", "Performance reporting"]
                },
                { 
                  title: "Comprehensive Care", 
                  desc: "Complete maintenance solution with predictive analytics and priority support",
                  features: ["Monthly inspections", "Condition monitoring", "Emergency support", "Operator training"]
                },
                { 
                  title: "Total Asset Management", 
                  desc: "Full-service maintenance with guaranteed uptime and performance optimization",
                  features: ["Continuous monitoring", "Predictive maintenance", "24/7 support", "Performance guarantees"]
                }
              ].map((program, index) => (
                <Card key={index} className="border-2 border-green-100 hover:border-green-300 transition-colors">
                  <CardHeader className="bg-green-50">
                    <CardTitle className="text-xl text-green-900">{program.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <p className="text-gray-600 mb-4">{program.desc}</p>
                    <ul className="space-y-2">
                      {program.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-gradient-to-r from-green-600 to-green-800 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Protect Your Investment
            </h2>
            <p className="text-xl mb-8 text-green-100">
              Don't wait for equipment failure to impact your operations. Contact our maintenance 
              specialists to develop a customized maintenance program for your facility.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 font-semibold px-8 py-4 text-lg">
                Request Maintenance Program Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}