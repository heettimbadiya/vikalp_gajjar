import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Users, Lightbulb, Target, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function TechnicalConsultationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-blue-700 hover:bg-blue-600">
              Services & Support
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Technical Consultation
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
              Expert guidance from industry professionals to optimize your crushing and screening operations. 
              Our technical consultants bring decades of experience to help you achieve maximum efficiency 
              and profitability in your projects.
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
              <Lightbulb className="h-8 w-8 text-blue-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Why Technical Consultation Matters</h2>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              In today's competitive industrial landscape, making the right equipment and process decisions 
              can mean the difference between project success and costly setbacks. Our technical consultation 
              services provide you with expert insights, proven methodologies, and customized solutions 
              that align with your specific operational requirements and business objectives.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Key Offerings */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-blue-50">
                <CardTitle className="flex items-center text-2xl text-blue-900">
                  <Target className="h-6 w-6 mr-3" />
                  Key Offerings
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <ul className="space-y-4">
                  {[
                    "Comprehensive plant design and layout optimization",
                    "Equipment selection and sizing analysis",
                    "Process flow analysis and efficiency studies",
                    "Capacity planning and throughput optimization",
                    "Material handling system design",
                    "Environmental compliance and regulatory guidance",
                    "Cost-benefit analysis and ROI projections",
                    "Risk assessment and mitigation strategies",
                    "Technology evaluation and recommendations",
                    "Operational workflow optimization"
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
                  <Users className="h-6 w-6 mr-3" />
                  Benefits to Your Business
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <ul className="space-y-4">
                  {[
                    "Reduce capital expenditure through optimized equipment selection",
                    "Minimize operational costs and maximize plant efficiency",
                    "Avoid costly mistakes with expert guidance from day one",
                    "Accelerate project timelines with proven methodologies",
                    "Ensure regulatory compliance and environmental standards",
                    "Access to cutting-edge industry knowledge and best practices",
                    "Improved safety standards and risk mitigation",
                    "Enhanced product quality and consistency",
                    "Long-term strategic planning for sustainable growth",
                    "Competitive advantage through optimized operations"
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

          {/* CTA Section */}
          <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Optimize Your Operations?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Connect with our technical experts to discuss your project requirements and discover 
              how our consultation services can drive your success.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-4 text-lg">
                Contact Our Technical Team
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}