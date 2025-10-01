import { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, MessageSquare, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLocation } from 'wouter';

export default function ContactPage() {
  const [location] = useLocation();
  const [isMapOpen, setIsMapOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    product: '',
    productName: ''
  });

  useEffect(() => {
    const urlParams = new URLSearchParams(location.split('?')[1] || '');
    const product = urlParams.get('product') || '';
    const productName = urlParams.get('name') || '';
    
    setFormData(prev => ({
      ...prev,
      product,
      productName,
      message: product ? `I'm interested in learning more about the ${productName || product}.` : ''
    }));
  }, [location]);

  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Hero Section with Background Image */}
        <div className="relative h-64 md:h-80 bg-blue-600 overflow-hidden">
          {/* Abstract Map Background */}
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 100L200 80L300 120L400 90L500 110L600 85L700 100" stroke="currentColor" strokeWidth="2" opacity="0.3"/>
              <path d="M80 150L180 140L280 160L380 145L480 165L580 140L680 155" stroke="currentColor" strokeWidth="2" opacity="0.3"/>
              <circle cx="200" cy="80" r="4" fill="currentColor" opacity="0.5"/>
              <circle cx="400" cy="90" r="4" fill="currentColor" opacity="0.5"/>
              <circle cx="600" cy="85" r="4" fill="currentColor" opacity="0.5"/>
              <path d="M150 200L250 190L350 210L450 195L550 215L650 190" stroke="currentColor" strokeWidth="1" opacity="0.2"/>
            </svg>
          </div>
          
          {/* Semi-transparent Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          
          {/* Header Content */}
          <div className="relative z-10 flex items-center justify-center h-full px-4">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Contact Us</h1>
              <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto">
                Ready to discuss your industrial equipment needs? We're here to help with expert solutions.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          


          {/* Split Screen Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Interactive Map - Desktop Only */}
            <div className="hidden lg:block">
              <div className="sticky top-8">
                <div className="rounded-lg overflow-hidden border border-gray-200 shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235014.1159663883!2d72.4113160716073!3d23.02047389362781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1642574841234!5m2!1sen!2sin"
                    width="100%"
                    height="600"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="VTech Makkers Location"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="space-y-8">
              
              {/* Why Partner With VTech Makkers Section */}
              <div className="bg-blue-600 text-white p-8 rounded-lg relative overflow-hidden">
                {/* Industrial Pattern Background */}
                <div className="absolute inset-0 opacity-10">
                  <svg className="w-full h-full" viewBox="0 0 400 300" fill="none">
                    <defs>
                      <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                      </pattern>
                    </defs>
                    <rect width="400" height="300" fill="url(#grid)" />
                  </svg>
                </div>
                
                <div className="relative z-10">
                  <h2 className="text-2xl font-bold mb-8 text-center">Why Partner With VTech Makkers?</h2>
                  
                  <div className="space-y-6">
                    <div className="border-l-2 border-amber-400 pl-6 bg-slate-800/50 p-4 rounded-r">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-white font-mono text-lg">30+</span>
                        <h3 className="font-semibold text-white">Years of Engineering Excellence</h3>
                      </div>
                      <p className="text-white text-sm">Battle-tested heavy-duty processing solutions proven in the field.</p>
                    </div>

                    <div className="border-l-2 border-blue-400 pl-6 bg-slate-800/50 p-4 rounded-r">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-white font-mono text-lg">24/7</span>
                        <h3 className="font-semibold text-white">Complete Lifecycle Support</h3>
                      </div>
                      <p className="text-white text-sm">Design, installation, maintenance - our in-house team keeps you running.</p>
                    </div>

                    <div className="border-l-2 border-green-400 pl-6 bg-slate-800/50 p-4 rounded-r">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-white font-mono text-lg">95%+</span>
                        <h3 className="font-semibold text-white">Industry-Leading Uptime</h3>
                      </div>
                      <p className="text-white text-sm">Crushers, screens, and washing systems engineered for maximum reliability.</p>
                    </div>

                    <div className="border-l-2 border-purple-400 pl-6 bg-slate-800/50 p-4 rounded-r">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-white font-mono text-lg">100%</span>
                        <h3 className="font-semibold text-white">Custom Plant Configurations</h3>
                      </div>
                      <p className="text-white text-sm">Mining, aggregates, recycling - we engineer to your exact specifications.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Get Your Custom Quote</h2>
                
                {formData.productName && (
                  <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <p className="text-sm text-blue-800">
                      Inquiry about: <strong>{formData.productName}</strong>
                    </p>
                  </div>
                )}

                <form onSubmit={(e) => { e.preventDefault(); /* Handle form submission */ }} className="space-y-6">
                  
                  {/* Name and Email Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                      <input 
                        type="text" 
                        name="name" 
                        id="name" 
                        required 
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        className="peer w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-transparent transition-all"
                        placeholder="Full Name"
                      />
                      <label 
                        htmlFor="name" 
                        className="absolute left-4 -top-2.5 bg-white px-2 text-sm font-medium text-gray-700 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-600"
                      >
                        Full Name *
                      </label>
                    </div>

                    <div className="relative">
                      <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        required 
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        className="peer w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-transparent transition-all"
                        placeholder="Email Address"
                      />
                      <label 
                        htmlFor="email" 
                        className="absolute left-4 -top-2.5 bg-white px-2 text-sm font-medium text-gray-700 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-600"
                      >
                        Email Address *
                      </label>
                    </div>
                  </div>

                  {/* Company and Phone Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                      <input 
                        type="text" 
                        name="company" 
                        id="company" 
                        value={formData.company}
                        onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                        className="peer w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-transparent transition-all"
                        placeholder="Company"
                      />
                      <label 
                        htmlFor="company" 
                        className="absolute left-4 -top-2.5 bg-white px-2 text-sm font-medium text-gray-700 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-600"
                      >
                        Company
                      </label>
                    </div>

                    <div className="relative">
                      <input 
                        type="tel" 
                        name="phone" 
                        id="phone" 
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                        className="peer w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-transparent transition-all"
                        placeholder="Phone Number"
                      />
                      <label 
                        htmlFor="phone" 
                        className="absolute left-4 -top-2.5 bg-white px-2 text-sm font-medium text-gray-700 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-600"
                      >
                        Phone Number *
                      </label>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="relative">
                    <textarea 
                      name="message" 
                      id="message" 
                      rows={5} 
                      required 
                      value={formData.message}
                      onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      className="peer w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-transparent transition-all resize-none"
                      placeholder="Tell us about your project requirements..."
                    ></textarea>
                    <label 
                      htmlFor="message" 
                      className="absolute left-4 -top-2.5 bg-white px-2 text-sm font-medium text-gray-700 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-600"
                    >
                      Project Details *
                    </label>
                  </div>

                  <div>
                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 text-lg font-semibold rounded-lg transition-colors">
                      Submit Inquiry
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Contact Info Cards */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Phone Card */}
            <a 
              href="tel:+919426029949" 
              className="group bg-white p-6 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl hover:border-blue-300 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-14 h-14 bg-blue-100 group-hover:bg-blue-600 rounded-xl flex items-center justify-center transition-colors">
                  <Phone className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">Phone</h3>
                  <p className="text-gray-600">+91 94260 29949</p>
                  <p className="text-gray-600">+91 99255 22374</p>
                  <p className="text-sm text-blue-600">Click to call</p>
                </div>
              </div>
            </a>

            {/* Email Card */}
            <a 
              href="mailto:info@tachmakkers.in" 
              className="group bg-white p-6 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl hover:border-blue-300 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-14 h-14 bg-blue-100 group-hover:bg-blue-600 rounded-xl flex items-center justify-center transition-colors">
                  <Mail className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">Email</h3>
                  <p className="text-gray-600">info@tachmakkers.in</p>
                  <p className="text-sm text-blue-600">Click to email</p>
                </div>
              </div>
            </a>

            {/* Address Card */}
            <div className="group bg-white p-6 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl hover:border-blue-300 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-14 h-14 bg-blue-100 group-hover:bg-blue-600 rounded-xl flex items-center justify-center transition-colors">
                  <MapPin className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">Address</h3>
                  <p className="text-gray-600 text-sm">Near GEB, Ahmedabed Road, Butal</p>
                  <p className="text-gray-600 text-sm">TA: Dhansura, Dist: Arvalli - 383 310</p>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>

      {/* Sticky Floating Quote Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button 
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 font-semibold flex items-center space-x-2"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <MessageSquare className="w-5 h-5" />
          <span>Get Quote</span>
        </Button>
      </div>
    </>
  );
}