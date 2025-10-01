import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

interface HeroBlockProps {
  slug: string;
  name: string;
  tagline: string;
  bullets: string[];
  heroImg?: string;
  primaryCta?: {
    text: string;
    action: () => void;
  };
  secondaryCta?: {
    text: string;
    action: () => void;
  };
  category?: string;
}

export default function HeroBlock({
  slug,
  name,
  tagline,
  bullets,
  heroImg,
  primaryCta,
  secondaryCta,
  category
}: HeroBlockProps) {
  // Extract capacity information for micro-facts chips
  const getCapacityRange = () => {
    // This would typically come from product specs
    const capacityMap: Record<string, string> = {
      'double-toggle-jaw-crusher': '100-400 TPH',
      'single-toggle-jaw-crusher': '150-350 TPH',
      'cone-crusher': '200-500 TPH',
      'impact-crusher': '100-300 TPH',
      'vibrating-screen': '50-800 TPH',
      'belt-conveyor': '100-2000 TPH',
      'feeder': '50-600 TPH',
      'wash-plant': '100-400 TPH',
      'dust-collector': '1000-10000 CFM',
      'mobile-crusher': '150-400 TPH'
    };
    return capacityMap[slug] || 'Variable';
  };

  const getMicroFacts = () => {
    const facts = [
      `${getCapacityRange()} Capacity`,
      'Heavy Duty',
      'Field Proven'
    ];
    if (category) {
      facts.unshift(category);
    }
    return facts;
  };

  return (
    <section className="relative py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div className="space-y-6">
            {/* Badge */}
            {category && (
              <Badge variant="secondary" className="text-sm font-medium">
                {category}
              </Badge>
            )}

            {/* Main Heading */}
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
              {name}
            </h1>

            {/* Micro-facts Chips */}
            <div className="flex flex-wrap gap-2">
              {getMicroFacts().map((fact, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-600"
                >
                  {fact}
                </span>
              ))}
            </div>

            {/* Tagline */}
            <p className="text-xl lg:text-2xl text-gray-700 font-medium leading-relaxed">
              {tagline}
            </p>

            {/* Bullet Points */}
            {bullets.length > 0 && (
              <ul className="space-y-3">
                {bullets.map((bullet, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 leading-relaxed">{bullet}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              {primaryCta && (
                <Button
                  size="lg"
                  onClick={primaryCta.action}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
                >
                  {primaryCta.text}
                </Button>
              )}
              {secondaryCta && (
                <Button
                  size="lg"
                  variant="outline"
                  onClick={secondaryCta.action}
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3"
                >
                  {secondaryCta.text}
                </Button>
              )}
            </div>
          </div>

          {/* Image Side */}
          <div className="relative">
            {heroImg ? (
              <div className="overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={heroImg}
                  alt={name}
                  style={{ objectFit: 'contain', width: '100%', height: 'auto' }}
                  className="transition-transform duration-500 hover:scale-105"
                  loading="eager"
                />
              </div>
            ) : (
              <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl shadow-2xl flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <div className="w-24 h-24 mx-auto mb-4 bg-gray-300 rounded-lg flex items-center justify-center">
                    <span className="text-2xl font-bold">VTech Makkers</span>
                  </div>
                  <p className="text-sm">Industrial Equipment</p>
                </div>
              </div>
            )}
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-100 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-100 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
}