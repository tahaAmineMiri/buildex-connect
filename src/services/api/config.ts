
// API configuration 
export const API_BASE_URL = 'https://api.example.com'; // Replace with your actual API URL

export enum HttpMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
  PATCH = 'PATCH',
}

export interface RequestOptions {
  method: HttpMethod;
  headers?: Record<string, string>;
  body?: any;
}

export interface ApiResponse<T> {
  data?: T;
  error?: string;
  statusCode: number;
}
