
import { API_BASE_URL, HttpMethod, RequestOptions, ApiResponse } from './config';

/**
 * Generic API client for making HTTP requests
 */
export class ApiClient {
  /**
   * Make a request to the API
   * 
   * @param endpoint - API endpoint to request
   * @param options - Request options
   * @returns Promise with the response data
   */
  static async request<T>(endpoint: string, options: RequestOptions): Promise<ApiResponse<T>> {
    const url = `${API_BASE_URL}${endpoint}`;
    
    const headers = {
      'Content-Type': 'application/json',
      ...options.headers,
    };

    // Get auth token from localStorage if available
    const authToken = localStorage.getItem('auth_token');
    if (authToken) {
      headers['Authorization'] = `Bearer ${authToken}`;
    }

    try {
      const fetchOptions: RequestInit = {
        method: options.method,
        headers,
        credentials: 'include',
      };

      if (options.body) {
        fetchOptions.body = JSON.stringify(options.body);
      }

      const response = await fetch(url, fetchOptions);
      const statusCode = response.status;

      // Handle different status codes
      if (statusCode === 204) {
        return { statusCode, data: undefined };
      }

      // Try to parse JSON response
      let data;
      const text = await response.text();
      try {
        data = text ? JSON.parse(text) : {};
      } catch (e) {
        console.error('Failed to parse JSON response', e);
        data = { message: text };
      }

      // Handle error responses
      if (!response.ok) {
        return {
          statusCode,
          error: data.message || 'An unknown error occurred',
        };
      }

      // Return successful response
      return {
        statusCode,
        data: data as T,
      };
    } catch (error) {
      console.error('API Request failed', error);
      return {
        statusCode: 0,
        error: 'Network error, please check your connection',
      };
    }
  }

  /**
   * Make a GET request
   */
  static async get<T>(endpoint: string, headers?: Record<string, string>): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: HttpMethod.GET,
      headers,
    });
  }

  /**
   * Make a POST request
   */
  static async post<T>(
    endpoint: string,
    body: any,
    headers?: Record<string, string>
  ): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: HttpMethod.POST,
      body,
      headers,
    });
  }

  /**
   * Make a PUT request
   */
  static async put<T>(
    endpoint: string,
    body: any,
    headers?: Record<string, string>
  ): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: HttpMethod.PUT,
      body,
      headers,
    });
  }

  /**
   * Make a DELETE request
   */
  static async delete<T>(endpoint: string, headers?: Record<string, string>): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: HttpMethod.DELETE,
      headers,
    });
  }

  /**
   * Make a PATCH request
   */
  static async patch<T>(
    endpoint: string,
    body: any,
    headers?: Record<string, string>
  ): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: HttpMethod.PATCH,
      body,
      headers,
    });
  }
}
