
import { login, register, logout as apiLogout } from "@/api/auth";
import { AUTH_TOKEN_KEY, AUTH_USER_KEY } from "@/config/constants";

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  name: string;
  email: string;
  password: string;
  role: 'buyer' | 'seller';
}

export interface AuthResult {
  success: boolean;
  user?: {
    id: string;
    name: string;
    email: string;
    role: string;
  };
  error?: string;
}

// Handle authentication service functions
export const authService = {
  // Login user
  login: async (credentials: LoginCredentials): Promise<AuthResult> => {
    try {
      const response = await login(credentials);
      
      return {
        success: true,
        user: response.user,
      };
    } catch (error) {
      return {
        success: false,
        error: "Invalid credentials",
      };
    }
  },
  
  // Register user
  register: async (userData: RegisterData): Promise<AuthResult> => {
    try {
      const response = await register(userData);
      
      return {
        success: true,
        user: response.user,
      };
    } catch (error) {
      return {
        success: false,
        error: "Registration failed",
      };
    }
  },
  
  // Logout user
  logout: async (): Promise<void> => {
    await apiLogout();
  },
  
  // Check if user is authenticated
  isAuthenticated: (): boolean => {
    return !!localStorage.getItem(AUTH_TOKEN_KEY);
  },
  
  // Get current user from localStorage
  getCurrentUser: () => {
    const userJson = localStorage.getItem(AUTH_USER_KEY);
    if (!userJson) return null;
    
    try {
      return JSON.parse(userJson);
    } catch (error) {
      console.error("Error parsing user data", error);
      return null;
    }
  },
  
  // Get token
  getToken: (): string | null => {
    return localStorage.getItem(AUTH_TOKEN_KEY);
  },
};
