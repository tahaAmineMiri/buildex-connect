
import { useState, useEffect } from 'react';

export interface AuthUser {
  id: string;
  email: string;
  name: string;
}

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Check if user is authenticated by checking localStorage or sessionStorage
    const storedUser = localStorage.getItem('auth_user');
    
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
        setIsAuthenticated(true);
      } catch (error) {
        console.error('Failed to parse stored user', error);
        localStorage.removeItem('auth_user');
      }
    }
    
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    // This is a placeholder for actual authentication logic
    // In a real application, you would call your backend API here
    
    // Mock successful login
    if (email && password) {
      const mockUser = {
        id: '1',
        email,
        name: email.split('@')[0],
      };
      
      setUser(mockUser);
      setIsAuthenticated(true);
      localStorage.setItem('auth_user', JSON.stringify(mockUser));
      return true;
    }
    
    return false;
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('auth_user');
  };

  const register = async (name: string, email: string, password: string): Promise<boolean> => {
    // This is a placeholder for actual registration logic
    // In a real application, you would call your backend API here
    
    // Mock successful registration
    if (name && email && password) {
      const mockUser = {
        id: '1',
        email,
        name,
      };
      
      setUser(mockUser);
      setIsAuthenticated(true);
      localStorage.setItem('auth_user', JSON.stringify(mockUser));
      return true;
    }
    
    return false;
  };

  return {
    isAuthenticated,
    user,
    isLoading,
    login,
    logout,
    register
  };
};
