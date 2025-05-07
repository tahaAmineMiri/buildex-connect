
import React, { createContext, useContext, useState } from "react";
import { User, AuthContextType } from "@/types";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string) => {
    // In a real application, you would validate credentials with an API
    console.log("Logging in with:", email, password);
    
    // Mock successful login with type-compatible user object
    setUser({
      id: "1",
      name: "John Doe",
      email: email,
      role: "buyer"
    });
  };

  const register = async (
    email: string,
    password: string,
    name: string,
    role: 'buyer' | 'seller'
  ) => {
    // In a real application, you would send registration data to an API
    console.log("Registering:", { email, password, name, role });
    
    // Mock successful registration and automatic login with type-compatible user object
    setUser({
      id: "2",
      name: name,
      email: email,
      role: role
    });
  };

  const logout = () => {
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

export default useAuth;
