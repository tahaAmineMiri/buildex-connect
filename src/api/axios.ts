// src/api/axios.ts
import axios from 'axios';

// Create a base axios instance with common configuration
const apiClient = axios.create({
  baseURL: '/api/v1', // Updated to match the Spring Boot controller paths
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

// Add a request interceptor for auth header
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Add a response interceptor for error handling
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // Global error handling
    const { response } = error;
    
    if (response) {
      // Log detailed error information for debugging
      console.error('API Error:', {
        status: response.status,
        statusText: response.statusText,
        data: response.data,
        url: response.config.url,
        method: response.config.method
      });
      
      if (response.status === 401) {
        // Handle unauthorized access (redirect to login, etc)
        localStorage.removeItem('token');
        window.location.href = '/auth';
      }
    } else {
      // Network error or request cancelled
      console.error('Network Error:', error.message);
    }
    
    return Promise.reject(error);
  }
);

export default apiClient;