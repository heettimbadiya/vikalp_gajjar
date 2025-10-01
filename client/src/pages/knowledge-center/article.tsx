import { useParams } from "wouter";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, User, Share2 } from "lucide-react";
import { Link } from "wouter";
import { articles } from "../../data/articles.ts";
import { fetchApi } from "@/lib/utils";

interface Article {
  slug: string;
  title: string;
  author: string;
  publishDate: string;
  summary: string;
  image: string;
  content: string;
}

interface ApiResponse {
  article: Article;
  jsonLd: any;
  metadata: {
    slug: string;
    publishDate: string;
    lastModified: string;
  };
}

export default function ArticleDetailPage() {
  const params = useParams();
  const articleSlug = params.slug as string;
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const apiData: ApiResponse = await fetchApi(`/api/articles/${articleSlug}`);
        
        setArticle(apiData.article);

        // Inject JSON-LD structured data into page head
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.textContent = JSON.stringify(apiData.jsonLd);
        document.head.appendChild(script);

        // Update page title and meta description
        document.title = `${apiData.article.title} | VTech Makkers Knowledge Center`;
        
        let metaDescription = document.querySelector('meta[name="description"]');
        if (!metaDescription) {
          metaDescription = document.createElement('meta');
          metaDescription.setAttribute('name', 'description');
          document.head.appendChild(metaDescription);
        }
        metaDescription.setAttribute('content', apiData.article.summary);

      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load article');
      } finally {
        setLoading(false);
      }
    };

    if (articleSlug) {
      fetchArticle();
    }
  }, [articleSlug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading article...</p>
        </div>
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-6">{error || "The article you're looking for doesn't exist."}</p>
          <Link href="/knowledge-center">
            <Button>Back to Knowledge Center</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Article Header */}
      <div className="bg-gray-50 border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link href="/knowledge-center">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Knowledge Center
            </Button>
          </Link>
          
          <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {article.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-gray-600">
            <div className="flex items-center gap-2">
              <User className="h-5 w-5" />
              <span className="font-medium">{article.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              <span>{article.publishDate}</span>
            </div>
            <button className="flex items-center gap-2 hover:text-blue-600 transition-colors">
              <Share2 className="h-5 w-5" />
              <span>Share Article</span>
            </button>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg prose-blue max-w-none">
          <div className="mb-8">
            <img 
              src={article.image} 
              alt={article.title}
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
          
          <div className="text-xl text-gray-700 mb-8 font-medium">
            {article.summary}
          </div>
          
          <div 
            className="article-content"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </div>
      </article>

      {/* Related Articles Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            More Technical Articles
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {articles
              .filter(a => a.slug !== articleSlug)
              .slice(0, 2)
              .map((relatedArticle) => (
                <div key={relatedArticle.slug} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {relatedArticle.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {relatedArticle.summary}
                  </p>
                  <Link href={`/knowledge-center/${relatedArticle.slug}`}>
                    <Button variant="outline" size="sm">
                      Read Article
                    </Button>
                  </Link>
                </div>
              ))
            }
          </div>
          
          <div className="text-center mt-8">
            <Link href="/knowledge-center">
              <Button variant="outline">
                View All Articles
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need Expert Consultation?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Our engineering team in Ahmedabad is ready to help optimize your crushing and screening operations.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              Contact Our Experts
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}