
import React, { createContext, useContext, useState } from "react";
import { User, AuthContextType } from "@/types";
import { login as apiLogin, register as apiRegister } from "@/api/auth";
import { AUTH_TOKEN_KEY, AUTH_USER_KEY } from "@/config/constants";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string) => {
    try {
      const response = await apiLogin({ email, password });
      
      // Store token and user data
      localStorage.setItem(AUTH_TOKEN_KEY, response.token);
      localStorage.setItem(AUTH_USER_KEY, JSON.stringify(response.user));
      
      setUser(response.user);
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    }
  };

  const register = async (
    email: string,
    password: string,
    name: string,
    role: 'buyer' | 'seller'
  ) => {
    try {
      const response = await apiRegister({ email, password, name, role });
      
      // Store token and user data
      localStorage.setItem(AUTH_TOKEN_KEY, response.token);
      localStorage.setItem(AUTH_USER_KEY, JSON.stringify(response.user));
      
      setUser(response.user);
    } catch (error) {
      console.error("Registration failed:", error);
      throw error;
    }
  };

  const logout = () => {
    // Clear stored data
    localStorage.removeItem(AUTH_TOKEN_KEY);
    localStorage.removeItem(AUTH_USER_KEY);
    
    setUser(null);
  };

  const value: AuthContextType = {
    user,
    isAuthenticated: !!user,
    login,
    logout,
    register
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  
  return context;
};
