export interface GraphQLQuery {
  query: string;
  variables?: Record<string, any>;
}

export interface GraphQLResponse<T = any> {
  data?: T;
  errors?: Array<{
    message: string;
    locations?: Array<{ line: number; column: number }>;
    path?: Array<string | number>;
  }>;
}

export async function graphqlRequest<T = any>(
  endpoint: string,
  { query, variables }: GraphQLQuery
): Promise<GraphQLResponse<T>> {
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query, variables }),
    credentials: 'include',
  });

  if (!response.ok) {
    throw new Error(`GraphQL request failed: ${response.statusText}`);
  }

  return response.json();
}

// Common GraphQL queries
export const GET_PRODUCTS = `
  query GetProducts {
    products {
      id
      name
      category
      subcategory
      description
      capacity_min
      capacity_max
      motor_power
      weight
      feed_opening
      applications
      specifications
      features
      is_featured
    }
  }
`;

export const SEARCH_PRODUCTS = `
  query SearchProducts($searchQuery: String!) {
    searchProducts(query: $searchQuery) {
      id
      name
      category
      description
      capacity_min
      capacity_max
      applications
      relevance_score
    }
  }
`;

export const GET_PRODUCTS_BY_CATEGORY = `
  query GetProductsByCategory($category: String!) {
    productsByCategory(category: $category) {
      id
      name
      subcategory
      description
      capacity_min
      capacity_max
      applications
      features
    }
  }
`;
