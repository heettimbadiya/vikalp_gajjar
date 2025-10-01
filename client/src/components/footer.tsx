
import { Link } from "wouter";

export default function Footer() {
  const productLinks = [
    { name: "Single Toggle Jaw Crusher", slug: "single-toggle-jaw-crusher" },
    { name: "Double Toggle Jaw Crusher", slug: "double-toggle-jaw-crusher" },
    { name: "HSI Impactors", slug: "hsi-impactors" },
    { name: "Inclined Vibrating Screens", slug: "inclined-vibrating-screens" },
    { name: "Bucket Sand Classifiers", slug: "bucket-sand-classifiers" },
    { name: "Hydrocyclone Sand Classifiers", slug: "hydrocyclone-sand-classifiers" },
    { name: "VSI (CubiSand)", slug: "vsi-cubisand-sand-maker" },
    { name: "Mobile Crushing Plant", slug: "mobile-crushing-plant" }
  ];

  const companyLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Solutions", href: "/solutions" },
    { name: "Knowledge Center", href: "/knowledge-center" },
    { name: "Contact", href: "/contact" }
  ];

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h4 className="font-semibold mb-4">VTech Makkers</h4>
            <p className="text-slate-400 mb-6">
              Leading manufacturer of heavy industrial equipment with three decades of engineering excellence.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-slate-400">
              {productLinks.map((product) => (
                <li key={product.slug}>
                  <Link href={`/products/${product.slug}`} className="hover:text-white transition-colors">
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-slate-400">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-slate-400">
              <li className="flex items-start">
                📞 <span className="ml-2">+91 94260 29949</span>
              </li>
              <li className="flex items-start">
                📞 <span className="ml-2">+91 99255 22374</span>
              </li>
              <li className="flex items-start">
                ✉️ <span className="ml-2">info@tachmakkers.in</span>
              </li>
              <li className="flex items-start">
                📍 <span className="ml-2">Near GEB, Ahmedabed Road, Butal<br />TA: Dhansura, Dist: Arvalli - 383 310</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">© 2024 VTech Makkers. All rights reserved.</p>
          <div className="flex space-x-6 text-sm text-slate-400 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
