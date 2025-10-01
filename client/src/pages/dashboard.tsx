import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Activity, User, Building2, Calendar, Target } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { fetchApi, getApiUrl } from "@/lib/utils";

interface Lead {
  id: number;
  name: string;
  email: string;
  company: string;
  phone?: string;
  project_location: string;
  query_text: string;
  product_name?: string;
  product_slug?: string;
  status: string;
  created_at: string;
}

interface SemanticSearchResult {
  leads: Lead[];
  totalResults: number;
  searchQuery: string;
}

interface LiveActivity {
  id: number;
  name: string;
  company: string;
  product_name?: string;
  created_at: string;
}

export default function Dashboard() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Lead[]>([]);
  const [liveActivities, setLiveActivities] = useState<LiveActivity[]>([]);
  const queryClient = useQueryClient();

  // Fetch recent leads for live activity
  const { data: recentLeads } = useQuery({
    queryKey: ['/api/leads/recent'],
    queryFn: async () => {
      return fetchApi('/api/leads/recent');
    },
    refetchInterval: 5000, // Poll every 5 seconds
  });

  // Semantic search mutation
  const semanticSearch = useMutation({
    mutationFn: async (query: string) => {
      const url = getApiUrl('/api/graphql');
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `
            query InternalSemanticSearchForLeads($searchQuery: String!) {
              internalSemanticSearchForLeads(searchQuery: $searchQuery) {
                leads {
                  id
                  name
                  email
                  company
                  phone
                  project_location
                  query_text
                  product_name
                  product_slug
                  status
                  created_at
                }
                totalResults
                searchQuery
              }
            }
          `,
          variables: { searchQuery: query }
        }),
      });
      
      if (!response.ok) {
        throw new Error('Search failed');
      }
      
      const result = await response.json();
      if (result.errors) {
        throw new Error(result.errors[0].message);
      }
      
      return result.data.internalSemanticSearchForLeads;
    },
    onSuccess: (data: SemanticSearchResult) => {
      setSearchResults(data.leads);
    },
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      semanticSearch.mutate(searchQuery);
    }
  };

  // Update live activities when new leads come in
  useEffect(() => {
    if (recentLeads && Array.isArray(recentLeads)) {
      setLiveActivities(recentLeads.slice(0, 10));
    }
  }, [recentLeads]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString();
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'bg-blue-100 text-blue-800';
      case 'contacted': return 'bg-yellow-100 text-yellow-800';
      case 'qualified': return 'bg-green-100 text-green-800';
      case 'closed': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Sales Intelligence Dashboard</h1>
          <p className="text-gray-600">AI-powered lead analysis and real-time activity monitoring</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Semantic Search Section */}
          <div className="lg:col-span-2">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Search className="mr-2 h-5 w-5 text-blue-600" />
                  Sales Intelligence: Semantic Lead Search
                </CardTitle>
                <p className="text-sm text-gray-600">
                  Search leads using natural language queries like "inquiries about high capacity rock crushing"
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSearch} className="flex gap-4 mb-6">
                  <Input
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="e.g., 'companies interested in jaw crushers for mining operations'"
                    className="flex-1"
                  />
                  <Button 
                    type="submit" 
                    disabled={semanticSearch.isPending}
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    {semanticSearch.isPending ? 'Searching...' : 'Search'}
                  </Button>
                </form>

                {/* Search Results */}
                {searchResults.length > 0 && (
                  <div className="space-y-4">
                    <h3 className="font-semibold text-gray-900">
                      Found {searchResults.length} matching leads for "{searchQuery}"
                    </h3>
                    {searchResults.map((lead) => (
                      <Card key={lead.id} className="border-l-4 border-l-blue-500">
                        <CardContent className="p-4">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h4 className="font-semibold text-gray-900 flex items-center">
                                <User className="mr-2 h-4 w-4" />
                                {lead.name}
                              </h4>
                              <p className="text-sm text-gray-600 flex items-center mt-1">
                                <Building2 className="mr-2 h-4 w-4" />
                                {lead.company} • {lead.email}
                              </p>
                            </div>
                            <div className="flex items-center gap-2">
                              <Badge className={getStatusColor(lead.status)}>
                                {lead.status}
                              </Badge>
                              {lead.product_name && (
                                <Badge variant="outline" className="text-blue-600 border-blue-600">
                                  <Target className="mr-1 h-3 w-3" />
                                  {lead.product_name}
                                </Badge>
                              )}
                            </div>
                          </div>
                          <p className="text-gray-700 mb-2">{lead.query_text}</p>
                          <div className="flex items-center text-xs text-gray-500">
                            <Calendar className="mr-1 h-3 w-3" />
                            {formatDate(lead.created_at)}
                            {lead.project_location && ` • ${lead.project_location}`}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}

                {semanticSearch.isError && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-800">
                      Search failed. Please try again or contact system administrator.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Live Activity Feed */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Activity className="mr-2 h-5 w-5 text-green-600" />
                  Live Lead Activity
                </CardTitle>
                <p className="text-sm text-gray-600">Real-time incoming inquiries</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {liveActivities.length > 0 ? (
                    liveActivities.map((activity) => (
                      <div key={activity.id} className="p-3 bg-green-50 border border-green-200 rounded-lg">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <p className="font-medium text-green-900 text-sm">
                              New Inquiry from {activity.company}
                            </p>
                            <p className="text-green-700 text-xs mt-1">
                              Contact: {activity.name}
                            </p>
                            {activity.product_name && (
                              <p className="text-green-600 text-xs mt-1">
                                Product: {activity.product_name}
                              </p>
                            )}
                          </div>
                          <div className="text-right">
                            <p className="text-xs text-green-600">
                              {formatDate(activity.created_at)}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-8 text-gray-500">
                      <Activity className="mx-auto h-8 w-8 mb-2 text-gray-400" />
                      <p className="text-sm">No recent activity</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}