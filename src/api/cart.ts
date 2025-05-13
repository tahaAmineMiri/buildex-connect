// src/api/cart.ts
import apiClient from './axios';
import { CART } from './endpoints';

export interface CartResponse {
  cartId: number;
  buyerResponse: {
    userId: number;
    userEmail: string;
    userFullName: string;
    userPosition: string;
    userBusinessPhone: string;
    userIsVerified: boolean;
  };
  cartItems: {
    cartItemId: number;
    cartItemQuantity: number;
    cartItemPrice: number;
    cartItemSubtotal: number;
    productId: number;
    productName: string;
    productImage: string;
  }[];
  cartTotalAmount: number;
}

export interface CartItemRequest {
  productId: number;
  cartItemQuantity: number;
}

export const getCartByBuyerId = async (buyerId: string): Promise<CartResponse> => {
  try {
    const response = await apiClient.get(CART.GET_BY_BUYER(buyerId));
    return response.data as CartResponse;
  } catch (error) {
    console.error(`Error fetching cart for buyer ${buyerId}:`, error);
    throw error;
  }
};

export const addItemToCart = async (buyerId: string, item: CartItemRequest): Promise<CartResponse> => {
  try {
    const response = await apiClient.post(CART.ADD_ITEM(buyerId), item);
    return response.data as CartResponse;
  } catch (error) {
    console.error(`Error adding item to cart for buyer ${buyerId}:`, error);
    throw error;
  }
};

export const updateCartItem = async (buyerId: string, itemId: string, item: CartItemRequest): Promise<CartResponse> => {
  try {
    const response = await apiClient.put(CART.UPDATE_ITEM(buyerId, itemId), item);
    return response.data as CartResponse;
  } catch (error) {
    console.error(`Error updating cart item ${itemId} for buyer ${buyerId}:`, error);
    throw error;
  }
};

export const removeItemFromCart = async (buyerId: string, productId: string): Promise<CartResponse> => {
  try {
    const response = await apiClient.delete(CART.REMOVE_ITEM(buyerId, productId));
    return response.data as CartResponse;
  } catch (error) {
    console.error(`Error removing product ${productId} from cart for buyer ${buyerId}:`, error);
    throw error;
  }
};

export const clearCart = async (buyerId: string): Promise<void> => {
  try {
    await apiClient.delete(CART.CLEAR(buyerId));
  } catch (error) {
    console.error(`Error clearing cart for buyer ${buyerId}:`, error);
    throw error;
  }
};