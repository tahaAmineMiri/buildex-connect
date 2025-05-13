// src/types/order.ts
export interface OrderItem {
    orderItemId: number;
    orderItemQuantity: number;
    orderItemPrice: number;
    orderItemSubtotal: number;
    productId: number;
    productName: string;
    productImage: string;
  }
  
  export interface Payment {
    paymentId: number;
    paymentAmount: number;
    paymentDate: string;
    paymentMethod: string;
    paymentStatus: string;
    paymentReferenceNumber: string;
    orderId: number;
  }
  
  export interface Order {
    orderId: number;
    buyerId: number;
    orderStatus: string;
    orderDate: string;
    orderTotalAmount: number;
    orderShippingAddress: string;
    paymentResponse: Payment;
    orderItems: OrderItem[];
  }
  
  export interface OrderRequest {
    orderShippingAddress: string;
    orderBillingAddress?: string;
    orderNotes?: string;
  }