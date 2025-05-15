// src/api/auth.ts
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
  try {
    const response = await apiClient.post(AUTH.LOGIN, {
      email: credentials.email,
      password: credentials.password
    });
    
    // Type the response data to fix type checking issues
    const authResponse = response.data as AuthResponse;
    
    // Store token in localStorage for API requests
    if (authResponse.token) {
      localStorage.setItem('token', authResponse.token);
      // Optionally store user data for quick access
      localStorage.setItem('user', JSON.stringify(authResponse.user));
    }
    
    return authResponse;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};

export const registerBuyer = async (data: Omit<RegisterBuyerRequest, 'userRole'>): Promise<AuthResponse> => {
  try {
    const buyerRequest = {
      ...data,
      userRole: 'BUYER'
    };
    const response = await apiClient.post(AUTH.REGISTER_BUYER, buyerRequest);
    // Do NOT store authentication data on registration
    return response.data as AuthResponse;
  } catch (error) {
    console.error("Buyer registration error:", error);
    throw error;
  }
};

export const registerSeller = async (data: Omit<RegisterSellerRequest, 'userRole'>): Promise<AuthResponse> => {
  try {
    const sellerRequest = {
      ...data,
      userRole: 'SELLER'
    };
    const response = await apiClient.post(AUTH.REGISTER_SELLER, sellerRequest);
    // Do NOT store authentication data on registration
    return response.data as AuthResponse;
  } catch (error) {
    console.error("Seller registration error:", error);
    throw error;
  }
};

export const logout = async (): Promise<void> => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
};