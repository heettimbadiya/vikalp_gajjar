import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Clock, User } from "lucide-react";
import { Link } from "wouter";
import { articles } from "../data/articles.ts";
import { useEffect } from "react";

export default function KnowledgeCenterPage() {
  // SEO metadata setup
  useEffect(() => {
    document.title = 'Knowledge Center | VTech Makkers Equipment Guides & FAQs';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Stay informed with VTech Makkers\' in-depth technical articles, how-to guides, FAQs and case studies on crushers, screens, washers and conveyors.'
      );
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Stay informed with VTech Makkers\' in-depth technical articles, how-to guides, FAQs and case studies on crushers, screens, washers and conveyors.';
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb JSON-LD Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://vtechmakkers.com/" },
            { "@type": "ListItem", "position": 2, "name": "Knowledge Center", "item": "https://vtechmakkers.com/knowledge-center" }
          ]
        })
      }} />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Knowledge Center
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Comprehensive learning resources for operators, engineers and maintenance teams. Access in-depth technical articles, troubleshooting guides, and operational best practices from VTech Makkers' three decades of crushing and screening equipment expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Latest Technical Articles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay informed with the latest industry insights, maintenance tips, and operational 
              best practices from our engineering experts in Ahmedabad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Card key={article.slug} className="group hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-w-16 aspect-h-12 bg-gray-200 rounded-t-lg overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{article.publishDate}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {article.summary}
                  </p>
                  
                  <Link href={`/knowledge-center/${article.slug}`}>
                    <Button className="w-full group">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {articles.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No articles available at the moment.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Stay Updated with Industry Insights
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Get the latest technical articles, maintenance tips, and industry news delivered to your inbox.
          </p>
          <Link href="/contact">
            <Button size="lg" className="px-8 py-3">
              Subscribe to Updates
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}