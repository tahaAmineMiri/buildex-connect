
export interface Admin {
  adminId: number;
  adminName: string;
  adminEmail: string;
  adminRole: string;
  adminCreatedAt: string;
  adminUpdatedAt?: string;
}

export interface AdminRequest {
  adminName: string;
  adminEmail: string;
  adminPassword: string;
}

export interface AdminResponse {
  adminId: number;
  adminName: string;
  adminEmail: string;
  adminRole: string;
  adminCreatedAt: string;
}

export interface Order {
  orderId: number;
  userId: number;
  userName: string;
  orderDate: string;
  orderAmount: number;
  orderStatus: 'PENDING' | 'PROCESSING' | 'SHIPPED' | 'DELIVERED' | 'CANCELLED';
}

export interface OrderResponse {
  orderId: number;
  userId: number;
  userName: string;
  orderDate: string;
  orderAmount: number;
  orderStatus: string;
}

export interface Payment {
  paymentId: number;
  userId: number;
  userName: string;
  paymentAmount: number;
  paymentDate: string;
  referenceNumber: string;
  paymentStatus: 'PENDING' | 'VERIFIED' | 'REJECTED';
}

export interface PaymentResponse {
  paymentId: number;
  userId: number;
  userName: string;
  paymentAmount: number;
  paymentDate: string;
  referenceNumber: string;
  paymentStatus: string;
}

export interface User {
  userId: number;
  userName: string;
  userEmail: string;
  userRole: string;
  isVerified: boolean;
  companyName: string;
  registrationDate: string;
}

export interface ApiResponse {
  message: string;
  success: boolean;
}
