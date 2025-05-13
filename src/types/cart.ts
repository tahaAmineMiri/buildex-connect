// src/types/cart.ts
import { User } from './auth';

export interface CartItem {
  cartItemId: number;
  cartItemQuantity: number;
  cartItemPrice: number;
  cartItemSubtotal: number;
  productId: number;
  productName: string;
  productImage: string;
}

export interface Cart {
  cartId: number;
  buyerResponse: User;
  cartItems: CartItem[];
  cartTotalAmount: number;
}

export interface CartItemRequest {
  productId: number;
  cartItemQuantity: number;
}