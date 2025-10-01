import { useEffect } from "react";

export default function TermsOfServicePage() {
  // SEO metadata setup
  useEffect(() => {
    document.title = 'Terms of Service | VTech Makkers Equipment';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'VTech Makkers terms of service covering use of our website, services, user obligations, and legal disclaimers for industrial equipment services.'
      );
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'VTech Makkers terms of service covering use of our website, services, user obligations, and legal disclaimers for industrial equipment services.';
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
              Terms of Service
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Important terms and conditions governing your use of VTech Makkers services and website.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8 lg:p-12">
            <div className="prose prose-lg max-w-none">


              <h2 className="text-2xl font-bold text-gray-900 mb-4">Agreement to Terms</h2>
              <p className="text-gray-700 mb-6">
                By accessing and using the VTech Makkers website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using our services.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Description of Services</h2>
              <p className="text-gray-700 mb-4">
                VTech Makkers provides industrial equipment manufacturing and related services, including:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6">
                <li>Design, manufacture, and supply of crushing and screening equipment</li>
                <li>Turnkey plant solutions and engineering consulting</li>
                <li>Technical support, maintenance, and spare parts services</li>
                <li>Online product information, specifications, and quotation services</li>
                <li>Knowledge center resources and technical documentation</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Eligibility and User Accounts</h2>
              <p className="text-gray-700 mb-4">
                Our services are intended for business and professional use by companies and individuals involved in mining, construction, aggregates, and related industries. Users must:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6">
                <li>Be at least 18 years of age or the age of majority in their jurisdiction</li>
                <li>Have the legal authority to enter into binding agreements</li>
                <li>Provide accurate and complete information when requested</li>
                <li>Maintain the security and confidentiality of any account credentials</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">User Obligations</h2>
              <p className="text-gray-700 mb-4">When using our services, you agree to:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-6">
                <li>Use our services only for lawful purposes and in accordance with these terms</li>
                <li>Not interfere with or disrupt our website or services</li>
                <li>Not attempt to gain unauthorized access to our systems or data</li>
                <li>Not transmit any harmful, offensive, or illegal content</li>
                <li>Respect intellectual property rights and confidential information</li>
                <li>Provide accurate information in all communications and transactions</li>
                <li>Comply with all applicable laws and regulations in your use of our services</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Intellectual Property Rights</h2>
              <p className="text-gray-700 mb-4">
                All content on the VTech Makkers website, including but not limited to text, graphics, logos, images, specifications, and software, is the property of VTech Makkers and is protected by intellectual property laws. You may not:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6">
                <li>Copy, modify, distribute, or reproduce our content without written permission</li>
                <li>Use our trademarks, logos, or trade names without authorization</li>
                <li>Reverse engineer or attempt to extract source code from our software</li>
                <li>Create derivative works based on our proprietary content</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Content and User Submissions</h2>
              <p className="text-gray-700 mb-6">
                Any content you submit to us through contact forms, inquiries, or other communications becomes our property and may be used for business purposes, including improving our services and developing new solutions. You warrant that you have the right to submit such content and that it does not violate any third-party rights.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Disclaimers</h2>
              <p className="text-gray-700 mb-4">
                VTech Makkers provides its services "as is" without warranties of any kind. We specifically disclaim:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6">
                <li>Any warranties of merchantability or fitness for a particular purpose</li>
                <li>Guarantees of uninterrupted or error-free service</li>
                <li>Warranties regarding the accuracy or completeness of content</li>
                <li>Assurances that our services will meet your specific requirements</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
              <p className="text-gray-700 mb-6">
                To the maximum extent permitted by law, VTech Makkers shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or business opportunities, arising from your use of our services or inability to use our services.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Governing Law and Jurisdiction</h2>
              <p className="text-gray-700 mb-6">
                These Terms of Service are governed by the laws of India. Any disputes arising from these terms or your use of our services shall be subject to the exclusive jurisdiction of the courts in Arvalli, Gujarat, India.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Termination</h2>
              <p className="text-gray-700 mb-6">
                VTech Makkers reserves the right to terminate or suspend your access to our services at any time, with or without notice, for any reason including violation of these terms. Upon termination, your right to use our services ceases immediately.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
              <p className="text-gray-700 mb-6">
                For questions about these Terms of Service, please contact us at:
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

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to Terms</h2>
              <p className="text-gray-700 mb-8">
                VTech Makkers reserves the right to modify these Terms of Service at any time. We will notify users of any material changes by posting the updated terms on our website with a new effective date. Your continued use of our services after such changes constitutes acceptance of the new terms.
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