import { useEffect } from "react";

export default function PrivacyPolicyPage() {
  // SEO metadata setup
  useEffect(() => {
    document.title = 'Privacy Policy | VTech Makkers Equipment';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'VTech Makkers privacy policy covering data collection, usage, and user rights for our industrial equipment website and services.'
      );
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'VTech Makkers privacy policy covering data collection, usage, and user rights for our industrial equipment website and services.';
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Your privacy matters to us. Learn how VTech Makkers collects, uses, and protects your information.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8 lg:p-12">
            <div className="prose prose-lg max-w-none">


              <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
              <p className="text-gray-700 mb-6">
                VTech Makkers collects information to provide better services to our customers and website visitors. We collect information in the following ways:
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Contact Form Data</h3>
              <p className="text-gray-700 mb-4">
                When you submit inquiries through our contact forms, we collect your name, email address, phone number, company information, and any messages or specifications you provide. This information is used to respond to your requests and provide relevant product information.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Cookies and Tracking Technologies</h3>
              <p className="text-gray-700 mb-4">
                Our website uses cookies and similar tracking technologies to enhance your browsing experience, remember your preferences, and analyze website traffic. These technologies help us understand how visitors interact with our site and improve our services.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Analytics Data</h3>
              <p className="text-gray-700 mb-6">
                We use web analytics services to collect information about your visit, including pages viewed, time spent on our site, referring websites, device information, and general location data. This helps us improve our website performance and user experience.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
              <p className="text-gray-700 mb-4">VTech Makkers uses the collected information for the following purposes:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-6">
                <li>Responding to your inquiries and providing customer support</li>
                <li>Sending product information, quotes, and technical specifications</li>
                <li>Improving our website functionality and user experience</li>
                <li>Analyzing website traffic and usage patterns</li>
                <li>Complying with legal obligations and protecting our rights</li>
                <li>Marketing our products and services (with your consent where required)</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Information Sharing</h2>
              <p className="text-gray-700 mb-4">
                VTech Makkers does not sell, trade, or rent your personal information to third parties. We may share your information in the following limited circumstances:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6">
                <li>With service providers who assist us in operating our website and conducting business</li>
                <li>When required by law or to protect our rights and safety</li>
                <li>In connection with a business transfer or merger</li>
                <li>With your explicit consent for specific purposes</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
              <p className="text-gray-700 mb-4">You have the following rights regarding your personal information:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-6">
                <li><strong>Access:</strong> Request access to the personal information we hold about you</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information, subject to legal requirements</li>
                <li><strong>Opt-out:</strong> Unsubscribe from marketing communications at any time</li>
                <li><strong>Data Portability:</strong> Request a copy of your data in a structured format</li>
                <li><strong>Objection:</strong> Object to certain processing of your personal information</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
              <p className="text-gray-700 mb-6">
                VTech Makkers implements appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no internet transmission is completely secure, and we cannot guarantee absolute security.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
              <p className="text-gray-700 mb-6">
                For questions about this Privacy Policy or to exercise your rights, please contact us at:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mb-8">
                <p className="text-gray-700">
                  <strong>VTech Makkers</strong><br />
                  Near GEB, Ahmedabed Road, Butal<br />
                  TA: Dhansura, Dist: Arvalli - 383 310<br />
                  Email: info@tachmakkers.in<br />
                  Phone: +91 94260 29949
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Policy</h2>
              <p className="text-gray-700 mb-8">
                VTech Makkers may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on our website with an updated effective date.
              </p>

              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Accuracy Disclaimer</h3>
                <p className="text-gray-700 text-sm">
                  All content, data, images, and specifications on this page are provided for general informational purposes only. While we strive for accuracy, content may be incomplete or out of date, and we make no warranties as to its accuracy or reliability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}