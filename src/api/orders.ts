// src/api/orders.ts
import apiClient from './axios';
import { ORDERS } from './endpoints';

export interface OrderResponse {
  orderId: number;
  buyerId: number;
  orderStatus: string;
  orderDate: string;
  orderTotalAmount: number;
  orderShippingAddress: string;
  paymentResponse: {
    paymentId: number;
    paymentAmount: number;
    paymentDate: string;
    paymentMethod: string;
    paymentStatus: string;
    paymentReferenceNumber: string;
    orderId: number;
  };
  orderItems: {
    orderItemId: number;
    orderItemQuantity: number;
    orderItemPrice: number;
    orderItemSubtotal: number;
    productId: number;
    productName: string;
    productImage: string;
  }[];
}

export interface OrderRequest {
  orderShippingAddress: string;
  orderBillingAddress?: string;
  orderNotes?: string;
}

export const getAllOrders = async (): Promise<OrderResponse[]> => {
  try {
    const response = await apiClient.get(ORDERS.GET_ALL);
    return response.data as OrderResponse[];
  } catch (error) {
    console.error("Error fetching orders:", error);
    return [];
  }
};

export const getOrderById = async (id: string): Promise<OrderResponse> => {
  try {
    const response = await apiClient.get(ORDERS.GET_BY_ID(id));
    return response.data as OrderResponse;
  } catch (error) {
    console.error(`Error fetching order ${id}:`, error);
    throw error;
  }
};

export const getOrdersByBuyer = async (buyerId: string): Promise<OrderResponse[]> => {
  try {
    const response = await apiClient.get(ORDERS.GET_BY_BUYER(buyerId));
    return response.data as OrderResponse[];
  } catch (error) {
    console.error(`Error fetching orders for buyer ${buyerId}:`, error);
    return [];
  }
};

export const getOrdersByStatus = async (status: string): Promise<OrderResponse[]> => {
  try {
    const response = await apiClient.get(ORDERS.GET_BY_STATUS(status));
    return response.data as OrderResponse[];
  } catch (error) {
    console.error(`Error fetching orders with status ${status}:`, error);
    return [];
  }
};

export const createOrder = async (buyerId: string, order: OrderRequest): Promise<OrderResponse> => {
  try {
    const response = await apiClient.post(ORDERS.CREATE(buyerId), order);
    return response.data as OrderResponse;
  } catch (error) {
    console.error("Error creating order:", error);
    throw error;
  }
};

export const updateOrderStatus = async (id: string, status: string): Promise<OrderResponse> => {
  try {
    const response = await apiClient.patch(ORDERS.UPDATE_STATUS(id), null, {
      params: { status }
    });
    return response.data as OrderResponse;
  } catch (error) {
    console.error(`Error updating order ${id} status:`, error);
    throw error;
  }
};

export const cancelOrder = async (id: string): Promise<OrderResponse> => {
  try {
    const response = await apiClient.patch(ORDERS.CANCEL(id), null);
    return response.data as OrderResponse;
  } catch (error) {
    console.error(`Error cancelling order ${id}:`, error);
    throw error;
  }
};