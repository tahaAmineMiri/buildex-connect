// src/api/auth.ts with enhanced logging
import apiClient from './axios';
import { AUTH } from './endpoints';

interface LoginRequest {
  email: string;
  password: string;
}

interface RegisterBuyerRequest {
  userEmail: string;
  userPassword: string;
  userFullName: string;
  userPosition: string;
  userBusinessPhone: string;
  userRole: 'BUYER';
}

interface RegisterSellerRequest {
  userEmail: string;
  userPassword: string;
  userFullName: string;
  userPosition: string;
  userBusinessPhone: string;
  userRole: 'SELLER';
}

export interface AuthResponse {
  token: string;
  expiresIn: number;
  user: {
    userId: number;
    userEmail: string;
    userFullName: string;
    userPosition: string;
    userBusinessPhone: string;
    userIsVerified: boolean;
    userRole: string;
  };
}

export const login = async (credentials: LoginRequest): Promise<AuthResponse> => {
  console.log('🔐 Logging in with email:', credentials.email);
  
  try {
    console.log('🔐 Making login request to:', AUTH.LOGIN);
    const response = await apiClient.post(AUTH.LOGIN, {
      email: credentials.email,
      password: credentials.password
    });
    
    console.log('🔐 Login response status:', response.status);
    console.log('🔐 Login response data type:', typeof response.data);
    console.log('🔐 Login response data:', JSON.stringify(response.data, null, 2));
    
    // Type the response data to fix type checking issues
    const authResponse = response.data as AuthResponse;
    
    console.log('🔐 Parsed auth response token exists:', !!authResponse.token);
    console.log('🔐 Parsed auth response user:', authResponse.user);
    
    // Store token in localStorage for API requests
    if (authResponse.token) {
      localStorage.setItem('token', authResponse.token);
      console.log('🔐 Token stored in localStorage');
      
      // Optionally store user data for quick access
      localStorage.setItem('user', JSON.stringify(authResponse.user));
      console.log('🔐 User data stored in localStorage');
    } else {
      console.warn('⚠️ No token received in auth response');
    }
    
    return authResponse;
  } catch (error: any) {
    console.error('❌ Login error:', error);
    
    if (error.response) {
      console.error('❌ Error response status:', error.response.status);
      console.error('❌ Error response data:', error.response.data);
    }
    
    throw error;
  }
};

export const registerBuyer = async (data: Omit<RegisterBuyerRequest, 'userRole'>): Promise<AuthResponse> => {
  console.log('👤 Registering buyer with data:', JSON.stringify(data, null, 2));
  
  try {
    console.log('👤 Creating buyer request with BUYER role');
    const buyerRequest = {
      ...data,
      userRole: 'BUYER'
    };
    
    console.log('👤 Making buyer registration request to:', AUTH.REGISTER_BUYER);
    console.log('👤 Request payload:', JSON.stringify(buyerRequest, null, 2));
    
    const response = await apiClient.post(AUTH.REGISTER_BUYER, buyerRequest);
    
    console.log('👤 Buyer registration response status:', response.status);
    console.log('👤 Buyer registration response data type:', typeof response.data);
    console.log('👤 Buyer registration response data:', JSON.stringify(response.data, null, 2));
    
    // Check if the response has expected structure
    const authResponse = response.data as AuthResponse;
    
    console.log('👤 Auth response contains token:', !!authResponse.token);
    console.log('👤 Auth response contains user:', !!authResponse.user);
    
    if (authResponse.user) {
      console.log('👤 User ID in response:', authResponse.user.userId);
      console.log('👤 User role in response:', authResponse.user.userRole);
    } else {
      console.warn('⚠️ No user object in auth response');
    }
    
    // Do NOT store authentication data on registration
    return authResponse;
  } catch (error: any) {
    console.error('❌ Buyer registration error:', error);
    
    if (error.response) {
      console.error('❌ Error response status:', error.response.status);
      console.error('❌ Error response data:', error.response.data);
    }
    
    throw error;
  }
};

export const registerSeller = async (data: Omit<RegisterSellerRequest, 'userRole'>): Promise<AuthResponse> => {
  console.log('🏪 Registering seller with data:', JSON.stringify(data, null, 2));
  
  try {
    console.log('🏪 Creating seller request with SELLER role');
    const sellerRequest = {
      ...data,
      userRole: 'SELLER'
    };
    
    console.log('🏪 Making seller registration request to:', AUTH.REGISTER_SELLER);
    console.log('🏪 Request payload:', JSON.stringify(sellerRequest, null, 2));
    
    const response = await apiClient.post(AUTH.REGISTER_SELLER, sellerRequest);
    
    console.log('🏪 Seller registration response status:', response.status);
    console.log('🏪 Seller registration response data type:', typeof response.data);
    console.log('🏪 Seller registration response data:', JSON.stringify(response.data, null, 2));
    
    // Check if the response has expected structure
    const authResponse = response.data as AuthResponse;
    
    console.log('🏪 Auth response contains token:', !!authResponse.token);
    console.log('🏪 Auth response contains user:', !!authResponse.user);
    
    if (authResponse.user) {
      console.log('🏪 User ID in response:', authResponse.user.userId);
      console.log('🏪 User role in response:', authResponse.user.userRole);
    } else {
      console.warn('⚠️ No user object in auth response');
    }
    
    // Do NOT store authentication data on registration
    return authResponse;
  } catch (error: any) {
    console.error('❌ Seller registration error:', error);
    
    if (error.response) {
      console.error('❌ Error response status:', error.response.status);
      console.error('❌ Error response data:', error.response.data);
    }
    
    throw error;
  }
};

export const logout = async (): Promise<void> => {
  console.log('🔐 Logging out - Removing token and user data from localStorage');
  localStorage.removeItem('token');
  localStorage.removeItem('user');
};