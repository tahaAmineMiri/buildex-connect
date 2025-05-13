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
  };
}

export const login = async (credentials: LoginRequest): Promise<AuthResponse> => {
  try {
    const response = await apiClient.post(AUTH.LOGIN, {
      email: credentials.email,
      password: credentials.password
    });
    return response.data as AuthResponse;
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
    return response.data as AuthResponse;
  } catch (error) {
    console.error("Seller registration error:", error);
    throw error;
  }
};

export const logout = async (): Promise<void> => {
  localStorage.removeItem('token');
};