import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Cog, Settings, Award, Zap, Users } from "lucide-react";
import { Link } from "wouter";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                About VTech Makkers
              </h1>
              <p className="text-xl lg:text-2xl text-blue-100 mb-8 leading-relaxed">
                Three decades of engineering excellence in heavy industrial equipment manufacturing, 
                serving mining and quarrying operations worldwide.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
                  Partner With Us
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img 
                src="/images/about/About us .jpeg" 
                alt="VTech Makkers Manufacturing Facility"
                className="w-full h-auto object-contain rounded-lg"
                onError={(e) => {
                  e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f3f4f6'/%3E%3Ctext x='200' y='150' text-anchor='middle' fill='%236b7280' font-size='18'%3EManufacturing Facility%3C/text%3E%3C/svg%3E";
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Key Metrics Section */}
      <div className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in 1994 in Ahmedabad, Gujarat, VTech Makkers has grown from a small 
                engineering workshop to one of India's leading manufacturers of crushing, screening, 
                and material handling equipment.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our journey began with a simple mission: to provide robust, reliable equipment 
                that could withstand the demanding conditions of mining operations while delivering 
                consistent performance and exceptional value.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">30+</div>
                  <div className="text-gray-600">Years of Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">200+</div>
                  <div className="text-gray-600">Satisfied Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                  <div className="text-gray-600">Products Delivered</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Engineering Excellence Section */}
      <div className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Engineering Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to industrial-grade performance through proven methodologies
            </p>
          </div>
          
          <div className="space-y-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-1 md:order-1">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Heavy-Duty Engineering</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Every component designed for continuous operation in the harshest mining and industrial environments. 
                    Our equipment withstands extreme temperatures, abrasive materials, and high-impact loads.
                  </p>
                  <div className="text-sm text-blue-600 font-semibold">24/7 operational capability</div>
                </div>
              </div>
              <div className="order-2 md:order-2">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Precision Manufacturing</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Advanced fabrication techniques and quality control ensure consistent performance. 
                    Each machine undergoes rigorous testing before deployment to guarantee operational excellence.
                  </p>
                  <div className="text-sm text-blue-600 font-semibold">ISO certified processes</div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Comprehensive Support</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    From initial consultation through installation, training, and ongoing maintenance. 
                    Our technical team provides rapid response support to maximize uptime.
                  </p>
                  <div className="text-sm text-blue-600 font-semibold">Global service network</div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Performance Optimization</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Engineered for maximum throughput and energy efficiency. Our designs deliver superior 
                    production rates while minimizing operational costs and environmental impact.
                  </p>
                  <div className="text-sm text-blue-600 font-semibold">Proven ROI results</div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Trusted Industrial Partner</h3>
                <p className="text-blue-100 leading-relaxed max-w-3xl mx-auto">
                  Over three decades of experience delivering crushing, screening, and washing solutions 
                  to mining operations, aggregate producers, and construction companies worldwide.
                </p>
                <div className="mt-6 grid grid-cols-3 gap-4 max-w-md mx-auto">
                  <div className="text-center">
                    <div className="text-3xl font-bold">30+</div>
                    <div className="text-blue-200 text-sm">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">200+</div>
                    <div className="text-blue-200 text-sm">Projects Delivered</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">50+</div>
                    <div className="text-blue-200 text-sm">Team Members</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Us Bottom Image Section */}
      <div className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <img 
            src="/images/about/About us 2.jpeg" 
            alt="VTech Makkers Operations"
            className="w-full h-64 lg:h-80 object-cover"
            onError={(e) => {
              e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f3f4f6'/%3E%3Ctext x='200' y='150' text-anchor='middle' fill='%236b7280' font-size='18'%3EAbout Us 2%3C/text%3E%3C/svg%3E";
            }}
          />
        </div>
      </div>

      {/* Ready to Partner CTA */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Partner with VTech Makkers?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Join hundreds of mining and quarrying operations worldwide who trust VTech Makkers 
            for their crushing and screening equipment needs. Let's discuss how we can optimize 
            your operations for maximum efficiency and profitability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
                Start Your Project
              </Button>
            </Link>
            <Link href="/solutions">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
                Explore Solutions
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}