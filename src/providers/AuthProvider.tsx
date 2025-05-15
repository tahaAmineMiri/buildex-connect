// src/providers/AuthProvider.tsx
import React, { createContext, useContext, useState, useEffect } from "react";
import { login as apiLogin, logout as apiLogout } from "@/api/auth";
import { AUTH_TOKEN_KEY, AUTH_USER_KEY } from "@/config/constants";

interface User {
  userId: number;
  userEmail: string;
  userFullName: string;
  userPosition: string;
  userBusinessPhone: string;
  userIsVerified: boolean;
  userRole?: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);

  // Check for existing session on initial load
  useEffect(() => {
    const storedUser = localStorage.getItem(AUTH_USER_KEY);
    const token = localStorage.getItem(AUTH_TOKEN_KEY);
    
    // Only consider the user authenticated if both user data and token exist
    if (storedUser && token) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (e) {
        // If parsing fails, clear the invalid data
        localStorage.removeItem(AUTH_USER_KEY);
        localStorage.removeItem(AUTH_TOKEN_KEY);
      }
    }
  }, []);

  // Login handler
  const login = async (email: string, password: string) => {
    try {
      const response = await apiLogin({ email, password });

      // Store token and user data
      localStorage.setItem(AUTH_TOKEN_KEY, response.token);
      localStorage.setItem(AUTH_USER_KEY, JSON.stringify(response.user));

      // Update state with user data
      setUser(response.user);
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    }
  };

  // Logout handler
  const logout = () => {
    // Call API logout function which clears localStorage
    apiLogout();
    // Update state
    setUser(null);
  };

  const value: AuthContextType = {
    user,
    isAuthenticated: !!user,
    login,
    logout
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