// Represents a user in the application with basic details and role information.
export interface User {
  id: string; // Unique identifier for the user.
  name: string; // Full name of the user.
  email: string; // Email address of the user.
  role: 'buyer' | 'seller' | 'admin'; // Role of the user in the system.
  avatarUrl?: string; // Optional URL to the user's avatar image.
}

// Defines the structure of the authentication context used in the application.
export interface AuthContextType {
  user: User | null; // The currently authenticated user or null if not authenticated.
  isAuthenticated: boolean; // Indicates whether the user is authenticated.
  login: (email: string, password: string) => Promise<void>; // Function to log in a user.
  logout: () => void; // Function to log out the current user.
  register: (
    email: string,
    password: string,
    name: string,
    role: 'buyer' | 'seller'
  ) => Promise<void>; // Function to register a new user with specified details.
}
