// src/types/auth.ts
export interface User {
  userId: number;
  userEmail: string;
  userFullName: string;
  userPosition: string;
  userBusinessPhone: string;
  userIsVerified: boolean;
  userRole?: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  expiresIn: number;
  user: User;
}

export interface UserRequest {
  userEmail: string;
  userPassword: string;
  userFullName: string;
  userPosition: string;
  userBusinessPhone: string;
  userRole: 'BUYER' | 'SELLER' | 'ADMIN';
}

export interface BuyerRequest extends UserRequest {
  userRole: 'BUYER';
}

export interface SellerRequest extends UserRequest {
  userRole: 'SELLER';
}

export interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  registerAsBuyer: (data: Omit<BuyerRequest, 'userRole'>) => Promise<void>;
  registerAsSeller: (data: Omit<SellerRequest, 'userRole'>) => Promise<void>;
}