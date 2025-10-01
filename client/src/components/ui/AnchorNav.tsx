import { useLocation } from 'wouter';
import { useEffect, useState } from 'react';

const navItems = [
  { id: 'overview', label: 'Overview' },
  { id: 'specs', label: 'Specs' },
  { id: 'benefits', label: 'Benefits' },
  { id: 'faq', label: 'FAQ' },
  { id: 'downloads', label: 'Downloads' }
];

export default function AnchorNav() {
  const [activeSection, setActiveSection] = useState('overview');
  const [location] = useLocation();

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash && navItems.some(item => item.id === hash)) {
      setActiveSection(hash);
    }
  }, [location]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.replaceState(null, '', `#${sectionId}`);
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="sticky top-0 z-40 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex space-x-8 overflow-x-auto">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeSection === item.id
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}