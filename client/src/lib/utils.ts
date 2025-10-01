import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Returns the API URL from environment variables with the given path appended
 * @param path - The API path to append to the base URL
 * @returns The complete API URL
 */
export function getApiUrl(path: string): string {
  const baseUrl = import.meta.env.VITE_API_URL || 'https://my-backend-url.com';
  // Remove trailing slash from baseUrl if it exists
  const normalizedBaseUrl = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;
  // Remove leading slash from path if it exists
  const normalizedPath = path.startsWith('/') ? path.slice(1) : path;
  
  return `${normalizedBaseUrl}/${normalizedPath}`;
}

/**
 * Standardized fetch wrapper that uses the API URL from environment variables
 * @param path - The API path to fetch from
 * @param options - Fetch options
 * @returns Promise with the fetch response
 */
export async function fetchApi<T = any>(path: string, options?: RequestInit): Promise<T> {
  const url = getApiUrl(path);
  const response = await fetch(url, {
    ...options,
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
  });

  if (!response.ok) {
    throw new Error(`API request failed: ${response.statusText}`);
  }

  return response.json();
}
