// Admin entity interface - represents admin user data in the system
export interface Admin {
  adminId: number;         // Unique identifier for the admin
  adminName: string;       // Full name of the admin
  adminEmail: string;      // Email address of the admin (used for login/communication)
  adminRole: string;       // Role/permission level of the admin
  adminCreatedAt: string;  // Timestamp when the admin account was created
  adminUpdatedAt?: string; // Optional timestamp when the admin details were last updated
}

// Admin request interface - used when creating a new admin account
export interface AdminRequest {
  adminName: string;       // Full name for the new admin
  adminEmail: string;      // Email address for the new admin
  adminPassword: string;   // Password for the new admin (should be hashed before storage)
}

// Admin response interface - used when returning admin data to clients
// Note: excludes sensitive information like password
export interface AdminResponse {
  adminId: number;         // Unique identifier for the admin
  adminName: string;       // Full name of the admin
  adminEmail: string;      // Email address of the admin
  adminRole: string;       // Role/permission level of the admin
  adminCreatedAt: string;  // Timestamp when the admin account was created
}

// Order entity interface - represents order data in the system
export interface Order {
  orderId: number;         // Unique identifier for the order
  userId: number;          // Identifier of the user who placed the order
  userName: string;        // Name of the user who placed the order
  orderDate: string;       // Timestamp when the order was placed
  orderAmount: number;     // Total monetary value of the order
  orderStatus: 'PENDING' | 'PROCESSING' | 'SHIPPED' | 'DELIVERED' | 'CANCELLED'; // Current status of the order (limited to valid states)
}

// Order response interface - used when returning order data to clients
export interface OrderResponse {
  orderId: number;         // Unique identifier for the order
  userId: number;          // Identifier of the user who placed the order
  userName: string;        // Name of the user who placed the order
  orderDate: string;       // Timestamp when the order was placed
  orderAmount: number;     // Total monetary value of the order
  orderStatus: string;     // Current status of the order (as string instead of union type)
}

// Payment entity interface - represents payment transaction data
export interface Payment {
  paymentId: number;       // Unique identifier for the payment
  userId: number;          // Identifier of the user who made the payment
  userName: string;        // Name of the user who made the payment
  paymentAmount: number;   // Monetary value of the payment
  paymentDate: string;     // Timestamp when the payment was made
  referenceNumber: string; // External reference/transaction number
  paymentStatus: 'PENDING' | 'VERIFIED' | 'REJECTED'; // Current status of the payment (limited to valid states)
}

// Payment response interface - used when returning payment data to clients
export interface PaymentResponse {
  paymentId: number;       // Unique identifier for the payment
  userId: number;          // Identifier of the user who made the payment
  userName: string;        // Name of the user who made the payment
  paymentAmount: number;   // Monetary value of the payment
  paymentDate: string;     // Timestamp when the payment was made
  referenceNumber: string; // External reference/transaction number
  paymentStatus: string;   // Current status of the payment (as string instead of union type)
}

// User entity interface - represents user data in the system
export interface User {
  userId: number;          // Unique identifier for the user
  userName: string;        // Full name of the user
  userEmail: string;       // Email address of the user (used for login/communication)
  userRole: string;        // Role/permission level of the user
  isVerified: boolean;     // Indicates whether the user's account has been verified
  companyName: string;     // Company/organization the user belongs to
  registrationDate: string; // Timestamp when the user registered
}

// API response interface - standard format for API responses
export interface ApiResponse {
  message: string;         // Human-readable message about the operation result
  success: boolean;        // Indicates whether the operation was successful
}