import { useParams, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Mail, ArrowLeft, CheckCircle, Cog, Target } from "lucide-react";
import { Link } from "wouter";

import RecommendedCarousel from "@/components/RecommendedCarousel";
import ProductSpecTable from "@/components/product-spec-table";
import { SpecBadge } from "@/components/SpecBadge";
import { StickyCta } from "@/components/StickyCta";
import ProductSchema from "@/components/seo/ProductSchema";
import ProductFaqSchema from "@/components/seo/ProductFaqSchema";
import StickySummaryBar from "@/components/ui/StickySummaryBar";
import AnchorNav from "@/components/ui/AnchorNav";
import HeroBlock from "@/components/ui/HeroBlock";
import MiniFaqAccordion from "@/components/ui/MiniFaqAccordion";
import SpecsTable from "@/components/ui/SpecsTable";
import FaqItem from "@/components/faq-item";
import singleToggleSpecs from "../data/specs/single-toggle-jaw-crusher.json";
import doubleToggleSpecs from "../data/specs/double-toggle-jaw-crusher.json";
import vsiSpecs from "../data/specs/vsi-cubisand-sand-maker.json";
import hsiSpecs from "../data/specs/hsi-impactors.json";
import screenSpecs from "../data/specs/inclined-vibrating-screens.json";
import feederSpecs from "../data/specs/feeder.json";
import hydrocycloneSpecs from "../data/specs/hydrocyclone-sand-classifiers.json";
import screwWasherSpecs from "../data/specs/screw-sand-washers.json";
import bucketClassifierSpecs from "../data/specs/bucket-sand-classifiers.json";


interface Product {
  id: number;
  slug: string;
  name: string;
  category: string;
  image: string;
  description: string;
  benefits: string[];
  applications: string[];
  spec_models?: Record<string, string | number>[];
  spec_table?: { name: string; value: string }[];
  disclaimer?: string;
  faqs?: { question: string; answer: string }[];
}

interface ApiResponse {
  product: Product;
  jsonLd: any;
  metadata: {
    slug: string;
    category: string;
    lastModified: string;
  };
}



// Helper functions for HeroBlock content
const getProductTagline = (product: Product): string => {
  const taglines: Record<string, string> = {
    'double-toggle-jaw-crusher': 'Heavy-duty primary crushing for quarries and mines. Built to handle the toughest materials.',
    'single-toggle-jaw-crusher': 'Crush 350 t/h of basalt with one moving jaw. VTech Makkers Prime brings big-plant performance to contract fleets.',
    'cone-crusher': 'Secondary and tertiary crushing with precise particle size control.',
    'impact-crusher': 'High-reduction ratio crushing for soft to medium-hard materials.',
    'vibrating-screen': 'Multi-deck screening solutions for accurate material classification.',
    'belt-conveyor': 'Heavy-duty material transport systems for continuous operation.',
    'feeder': 'Controlled material feeding for consistent plant performance.',
    'wash-plant': 'Complete washing and classification systems for clean aggregates.',
    'dust-collector': 'Advanced dust suppression and air quality control systems.',
    'mobile-crusher': 'Portable crushing solutions for on-site material processing.',
    'bucket-sand-classifiers': 'Maximize fine sand recovery with advanced bucket wheel technology. Recover 95%+ of fine sand while providing excellent dewatering.',
    'hydrocyclone-sand-classifiers': 'Precision particle separation using centrifugal force. High-efficiency classification with minimal energy consumption.',
    'screw-sand-washers': 'Efficient sand washing and grading with spiral screw technology. Clean aggregates for high-quality concrete production.',
    'vsi-cubisand-sand-maker': 'Produce premium cubic sand with vertical shaft impact technology. Superior shape and gradation for concrete applications.',
    'hsi-impactors': 'High-reduction ratio impact crushing for superior cubical product. Ideal for secondary and tertiary crushing applications.',
    'inclined-vibrating-screens': 'Multi-deck screening for precise material classification. Heavy-duty construction for continuous operation.',
    'mobile-crushing-plant': 'Complete mobile processing solution for on-site crushing. Quick setup and relocation for maximum project flexibility.',
    'conveyor-systems': 'Heavy-duty material handling for continuous plant operation. Reliable transport systems designed for industrial applications.'
  };
  return taglines[product.slug] || product.description;
};

const getProductBullets = (product: Product): string[] => {
  const bullets: Record<string, string[]> = {
    'double-toggle-jaw-crusher': [
      'Proven double-toggle design for maximum crushing force',
      'Heavy-duty construction for 24/7 operation',
      'Low maintenance costs with accessible service points'
    ],
    'single-toggle-jaw-crusher': [
      'Single moving jaw for simplified maintenance',
      'High capacity with compact footprint',
      'Optimized chamber design for uniform product'
    ],
    'cone-crusher': [
      'Hydraulic adjustment for precise product sizing',
      'Advanced crushing chamber design',
      'Automated control systems for consistent performance'
    ],
    'impact-crusher': [
      'High reduction ratios up to 50:1',
      'Reversible impact bars for extended wear life',
      'Quick-change blow bars for minimal downtime'
    ],
    'vibrating-screen': [
      'Multi-deck configuration for precise sizing',
      'Heavy-duty vibrating mechanisms',
      'Modular design for easy maintenance'
    ],
    'bucket-sand-classifiers': [
      'Advanced bucket wheel design for maximum fine sand recovery',
      'Simultaneous classification and dewatering in one machine',
      'Automated controls for consistent operation'
    ],
    'hydrocyclone-sand-classifiers': [
      'Centrifugal force separation for precise particle classification',
      'High efficiency with minimal energy consumption',
      'Compact design with maintenance-free operation'
    ],
    'screw-sand-washers': [
      'Spiral screw technology for efficient sand washing',
      'Integrated water recycling system',
      'Heavy-duty construction for continuous operation'
    ],
    'vsi-cubisand-sand-maker': [
      'Vertical shaft impact technology for superior sand shape',
      'Adjustable rotor speed for precise product control',
      'Rock-on-rock crushing for maximum efficiency'
    ],
    'hsi-impactors': [
      'High reduction ratios for superior product cubicity',
      'Adjustable impact aprons for precise product sizing',
      'Heavy-duty rotor design for extended wear life'
    ],
    'inclined-vibrating-screens': [
      'Multiple deck configurations for precise sizing',
      'High-frequency vibration for efficient screening',
      'Modular design for easy maintenance and setup'
    ],
    'mobile-crushing-plant': [
      'Complete crushing circuit on mobile chassis',
      'Quick setup and teardown for project mobility',
      'Integrated conveyor systems for efficient operation'
    ],
    'conveyor-systems': [
      'Heavy-duty belt conveyors for industrial applications',
      'Modular design for flexible plant layouts',
      'Low maintenance operation with accessible service points'
    ]
  };
  
  return bullets[product.slug] || [
    'Industrial-grade construction',
    'Proven reliability in harsh conditions',
    'Comprehensive support and service'
  ];
};

// Generate concise meta description for product (155 characters max)
const generateMetaDescription = (product: Product): string => {
  const descriptions: Record<string, string> = {
    'double-toggle-jaw-crusher': 'Double Toggle Jaw Crushers deliver heavy-duty primary crushing for quarries and mines. Explore specs, features, applications and get a quote today.',
    'single-toggle-jaw-crusher': 'Single Toggle Jaw Crushers provide high-capacity primary crushing for aggregates. Explore specs, features, applications and get a quote today.',
    'hsi-impactors': 'HSI Impactors deliver maximum reduction ratios for secondary crushing applications. Explore specs, features, applications and get a quote today.',
    'vsi-cubisand-sand-maker': 'VSI CubiSand Sand Makers produce high-quality manufactured sand for construction. Explore specs, features, applications and get a quote today.',
    'inclined-vibrating-screens': 'Inclined Vibrating Screens provide efficient material classification for all applications. Explore specs, features, applications and get a quote today.',
    'conveyor-systems': 'Conveyor Systems deliver reliable material transport for continuous operations. Explore specs, features, applications and get a quote today.',
    'feeders': 'Vibrating Feeders ensure controlled material feeding for consistent plant performance. Explore specs, features, applications and get a quote today.',
    'hydrocyclone-sand-classifiers': 'Hydrocyclone Sand Classifiers provide precision particle separation using centrifugal force. Explore specs, features, applications and get a quote today.',
    'bucket-sand-classifiers': 'Bucket Sand Classifiers maximize fine sand recovery with advanced bucket wheel technology. Explore specs, features, applications and get a quote today.',
    'screw-sand-washers': 'Screw Sand Washers deliver efficient sand washing and grading with spiral technology. Explore specs, features, applications and get a quote today.',
    'mobile-crushing-plant': 'Mobile Crushing Plants provide complete portable crushing solutions for on-site processing. Explore specs, features, applications and get a quote today.'
  };
  
  return descriptions[product.slug] || `${product.name} delivers superior performance for industrial applications. Explore specs, features, applications and get a quote today.`;
};

export default function ProductDetailPage() {
  const params = useParams();
  const [location] = useLocation();
  const slug = params.slug as string;
  const [data, setData] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) return;

    const fetchProductData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/products/${slug}`);
        
        if (!response.ok) {
          throw new Error('Product not found');
        }
        
        const apiData: ApiResponse = await response.json();
        setData(apiData);
        
        // Set page title and meta description with product name
        document.title = `${apiData.product.name} | VTech Makkers Equipment`;
        
        // Generate concise meta description (155 characters max)
        const description = generateMetaDescription(apiData.product);
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
          metaDescription.setAttribute('content', description);
        } else {
          const meta = document.createElement('meta');
          meta.name = 'description';
          meta.content = description;
          document.head.appendChild(meta);
        }
        
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load product');
      } finally {
        setLoading(false);
      }
    };

    fetchProductData();
  }, [slug]);

  // Embed JSON-LD structured data and canonical link in the document head
  useEffect(() => {
    if (!data?.jsonLd || !slug || typeof document === 'undefined') return;

    try {
      // Add canonical link
      const canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      canonicalLink.href = `https://vtechmakkers.com${location}`;
      canonicalLink.id = `canonical-${slug}`;
      
      // Remove existing canonical link
      const existingCanonical = document.getElementById(`canonical-${slug}`);
      if (existingCanonical && existingCanonical.parentNode) {
        existingCanonical.parentNode.removeChild(existingCanonical);
      }
      
      if (document.head) {
        document.head.appendChild(canonicalLink);
      }

      // Add JSON-LD script
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(data.jsonLd);
      script.id = `jsonld-product-${slug}`;
      
      // Remove any existing script first
      const existingScript = document.getElementById(`jsonld-product-${slug}`);
      if (existingScript && existingScript.parentNode) {
        existingScript.parentNode.removeChild(existingScript);
      }
      
      if (document.head) {
        document.head.appendChild(script);
      }

      // Add Breadcrumb JSON-LD schema
      const breadcrumbScript = document.createElement('script');
      breadcrumbScript.type = 'application/ld+json';
      breadcrumbScript.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://vtechmakkers.com/" },
          { "@type": "ListItem", "position": 2, "name": "Products", "item": "https://vtechmakkers.com/products" },
          { "@type": "ListItem", "position": 3, "name": data.product.name, "item": `https://vtechmakkers.com${location}` }
        ]
      });
      breadcrumbScript.id = `jsonld-breadcrumb-${slug}`;
      
      // Remove any existing breadcrumb script first
      const existingBreadcrumb = document.getElementById(`jsonld-breadcrumb-${slug}`);
      if (existingBreadcrumb && existingBreadcrumb.parentNode) {
        existingBreadcrumb.parentNode.removeChild(existingBreadcrumb);
      }
      
      if (document.head) {
        document.head.appendChild(breadcrumbScript);
      }

      return () => {
        try {
          const scriptToRemove = document.getElementById(`jsonld-product-${slug}`);
          const canonicalToRemove = document.getElementById(`canonical-${slug}`);
          const breadcrumbToRemove = document.getElementById(`jsonld-breadcrumb-${slug}`);
          if (scriptToRemove && scriptToRemove.parentNode) {
            scriptToRemove.parentNode.removeChild(scriptToRemove);
          }
          if (canonicalToRemove && canonicalToRemove.parentNode) {
            canonicalToRemove.parentNode.removeChild(canonicalToRemove);
          }
          if (breadcrumbToRemove && breadcrumbToRemove.parentNode) {
            breadcrumbToRemove.parentNode.removeChild(breadcrumbToRemove);
          }
        } catch (error) {
          // Ignore cleanup errors
        }
      };
    } catch (error) {
      console.warn('Error managing document head elements:', error);
    }
  }, [data, slug, location]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="flex justify-center items-center min-h-[400px]">
          <div className="text-lg text-gray-600">Loading product details...</div>
        </div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-8">{error || 'The requested product could not be found.'}</p>
          <Link href="/products">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Products
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const { product } = data;

  return (
    <>
      {/* SEO Schema */}
      <ProductSchema product={product} />
      <ProductFaqSchema product={product} />
      
      {/* Sticky Summary Bar */}
      <StickySummaryBar product={product} />
      
      {/* Breadcrumb Navigation */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-blue-600">Products</Link>
            <span>/</span>
            <span className="text-gray-900">{product.name}</span>
          </nav>
        </div>
      </div>
      
      {/* Anchor Navigation */}
      <AnchorNav />

      <main>
        <meta name="release-tag" content="v2.0-spec-tables" />
        <div className="container mx-auto px-4 py-12">
          {/* Back Button */}
          <div className="mb-8">
            <Link href="/products">
              <Button variant="outline" size="sm">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Products
              </Button>
            </Link>
          </div>

          {/* Hero Section */}
          <HeroBlock
            slug={product.slug}
            name={product.name}
            tagline={getProductTagline(product)}
            bullets={getProductBullets(product)}
            heroImg={product.image}
            category={product.category}
            primaryCta={{
              text: "Get Quote",
              action: () => window.location.href = `/contact?product=${product.slug}&name=${encodeURIComponent(product.name)}`
            }}
            secondaryCta={undefined}
          />

        {/* Key Features & Applications Section */}
        <section id="benefits" className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Key Benefits */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
                Key Benefits
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {product.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Applications */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Target className="h-6 w-6 text-blue-600 mr-3" />
                Applications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {product.applications.map((application, index) => (
                  <li key={index} className="flex items-start">
                    <Target className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{application}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>



        {/* Technical Specifications */}
        <section id="specs" className="mb-12">
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="bg-blue-600 text-white px-6 py-4">
              <h2 className="text-2xl font-bold">Technical Specifications</h2>
              <p className="text-blue-100 mt-1">Detailed parameters and recommended models</p>
            </div>
            <div className="p-6">
              {product.slug === 'single-toggle-jaw-crusher' ? (
                <SpecsTable specs={singleToggleSpecs} />
              ) : product.slug === 'double-toggle-jaw-crusher' ? (
                <SpecsTable specs={doubleToggleSpecs} />
              ) : product.slug === 'vsi-cubisand-sand-maker' ? (
                <SpecsTable specs={vsiSpecs} />
              ) : product.slug === 'hsi-impactors' ? (
                <SpecsTable specs={hsiSpecs} />
              ) : product.slug === 'inclined-vibrating-screens' ? (
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-blue-800">Inclined Vibrating Screens</h3>
                    <SpecsTable specs={screenSpecs.InclinedScreens} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-blue-800">Grizzly Screens</h3>
                    <SpecsTable specs={screenSpecs.GrizzlyScreens} />
                  </div>
                </div>
              ) : product.slug === 'feeder' ? (
                <SpecsTable specs={feederSpecs} />
              ) : product.slug === 'hydrocyclone-sand-classifiers' ? (
                <SpecsTable specs={hydrocycloneSpecs} />
              ) : product.slug === 'screw-sand-washers' ? (
                <SpecsTable specs={screwWasherSpecs} />
              ) : product.slug === 'bucket-sand-classifiers' ? (
                <SpecsTable specs={bucketClassifierSpecs} />
              ) : (
                <SpecsTable data={product} />
              )}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        {product.faqs && product.faqs.length > 0 && (
          <section className="my-16 max-w-4xl mx-auto" id="faq">
            <header className="text-center mb-12">
              <h2 className="text-4xl font-bold text-slate-900">Your Questions, Answered</h2>
              <p className="mt-4 text-lg text-slate-600">
                Key considerations for plant managers and quarry owners when investing in our equipment.
              </p>
            </header>
            <div className="space-y-4">
              {product.faqs?.map((faq, idx) => (
                <FaqItem key={idx} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </section>
        )}



        {/* Recommended Equipment Carousel */}
        <RecommendedCarousel 
          currentSlug={product.slug}
          limit={6}
        />

        {/* Call to Action */}
        <div className="text-center bg-blue-50 rounded-lg p-8 mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Learn More?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Contact our technical experts to discuss your specific requirements and get personalized recommendations for your industrial applications.
          </p>
          <Link href={`/contact?product=${product.slug}&name=${encodeURIComponent(product.name)}`}>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              <Mail className="mr-2 h-5 w-5" />
              Get Expert Consultation
            </Button>
          </Link>
        </div>
        
        {/* Sticky CTA */}
        <StickyCta product={product.slug} />
        </div>
      </main>
    </>
  );
}