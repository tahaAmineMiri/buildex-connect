// src/api/axios.ts with enhanced logging
import axios from 'axios';

console.log('🔄 Initializing axios client...');

// Create a base axios instance with common configuration
const apiClient = axios.create({
  baseURL: '/api/v1', // Updated to match the Spring Boot controller paths
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

console.log('🔄 Axios client base configuration:', {
  baseURL: apiClient.defaults.baseURL,
  timeout: apiClient.defaults.timeout,
  headers: apiClient.defaults.headers
});

// Add a request interceptor for auth header
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  console.log('🔄 Request interceptor - Token exists:', !!token);
  
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
    console.log('🔄 Adding Authorization header to request');
  } else {
    console.log('🔄 No token found in localStorage, request will be made without Authorization header');
  }
  
  console.log('🔄 Making request to:', config.url);
  console.log('🔄 Request method:', config.method);
  console.log('🔄 Request headers:', config.headers);
  
  if (config.data) {
    console.log('🔄 Request payload:', JSON.stringify(config.data, null, 2));
  }
  
  return config;
}, (error) => {
  console.error('❌ Error in request interceptor:', error);
  return Promise.reject(error);
});

// Add a response interceptor for error handling
apiClient.interceptors.response.use(
  (response) => {
    console.log('🔄 Response received from:', response.config.url);
    console.log('🔄 Response status:', response.status);
    console.log('🔄 Response headers:', response.headers);
    console.log('🔄 Response data:', JSON.stringify(response.data, null, 2));
    return response;
  },
  (error) => {
    // Global error handling
    console.error('❌ Response error:', error);
    
    const { response } = error;
    
    if (response) {
      console.error('❌ Response status:', response.status);
      console.error('❌ Response data:', response.data);
      
      if (response.status === 401) {
        // Handle unauthorized access (redirect to login, etc)
        console.warn('⚠️ 401 Unauthorized - Clearing token and redirecting to auth page');
        localStorage.removeItem('token');
        window.location.href = '/auth';
      }
    } else if (error.request) {
      console.error('❌ Request was made but no response received:', error.request);
    } else {
      console.error('❌ Error setting up request:', error.message);
    }
    
    return Promise.reject(error);
  }
);

console.log('🔄 Axios client setup complete');

export default apiClient;