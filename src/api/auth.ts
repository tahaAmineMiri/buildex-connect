
import apiClient from './axios';
import { AUTH } from './endpoints';

interface LoginParams {
  email: string;
  password: string;
}

interface RegisterParams {
  name: string;
  email: string;
  password: string;
  role: 'buyer' | 'seller';
}

interface AuthResponse {
  user: {
    id: string;
    name: string;
    email: string;
    role: 'buyer' | 'seller' | 'admin';
  };
  token: string;
}

// For now, we'll implement mock versions that match our current functionality
export const login = async ({ email, password }: LoginParams): Promise<AuthResponse> => {
  // In a real application, this would be:
  // const response = await apiClient.post(AUTH.LOGIN, { email, password });
  // return response.data;
  
  // Mock implementation to match the current functionality:
  console.log("Logging in with:", email, password);
  
  return {
    user: {
      id: "1",
      name: "John Doe",
      email: email,
      role: "buyer"
    },
    token: "mock-auth-token"
  };
};

export const register = async ({ name, email, password, role }: RegisterParams): Promise<AuthResponse> => {
  // In a real application, this would be:
  // const response = await apiClient.post(AUTH.REGISTER, { name, email, password, role });
  // return response.data;
  
  // Mock implementation to match current functionality:
  console.log("Registering:", { name, email, password, role });
  
  return {
    user: {
      id: "2",
      name: name,
      email: email,
      role: role
    },
    token: "mock-auth-token"
  };
};

export const logout = async (): Promise<void> => {
  // In a real application, this would be:
  // await apiClient.post(AUTH.LOGOUT);
  // localStorage.removeItem('token');
  
  // Mock implementation:
  console.log("Logging out");
  localStorage.removeItem('token');
};
