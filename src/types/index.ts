
// Re-export types with explicit naming to avoid conflicts
export * from './product';
export type { ProductProps as Product } from './product'; // Export ProductProps as Product
export type { User as AdminUser, Admin, AdminRequest, AdminResponse, Order, OrderResponse, Payment, PaymentResponse, ApiResponse } from './admin';
export * from './user';
