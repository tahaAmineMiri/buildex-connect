// src/api/endpoints.ts (updated with COMPANIES endpoints)
// API endpoints constants

// Auth endpoints
export const AUTH = {
  LOGIN: '/auth/login',
  REGISTER_BUYER: '/auth/register/buyer',
  REGISTER_SELLER: '/auth/register/seller',
};

// Product endpoints
export const PRODUCTS = {
  GET_ALL: '/products',
  GET_BY_ID: (id: string) => `/products/${id}`,
  GET_BY_CATEGORY: (category: string) => `/products/category/${category}`,
  GET_BY_SELLER: (sellerId: string) => `/products/seller/${sellerId}`,
  CREATE: '/products/seller',
  UPDATE: (id: string) => `/products/${id}`,
  DELETE: (id: string) => `/products/${id}`,
  UPDATE_STOCK: (id: string) => `/products/${id}/stock`,
  UPDATE_PRICE: (id: string) => `/products/${id}/price`,
};

// Order endpoints
export const ORDERS = {
  GET_ALL: '/orders',
  GET_BY_ID: (id: string) => `/orders/${id}`,
  GET_BY_BUYER: (buyerId: string) => `/orders/buyer/${buyerId}`,
  GET_BY_STATUS: (status: string) => `/orders/status/${status}`,
  CREATE: (buyerId: string) => `/orders/buyer/${buyerId}`,
  UPDATE_STATUS: (id: string) => `/orders/${id}/status`,
  CANCEL: (id: string) => `/orders/${id}/cancel`,
};

// Cart endpoints
export const CART = {
  GET_BY_BUYER: (buyerId: string) => `/carts/buyer/${buyerId}`,
  ADD_ITEM: (buyerId: string) => `/carts/buyer/${buyerId}/items`,
  UPDATE_ITEM: (buyerId: string, itemId: string) => `/carts/buyer/${buyerId}/items/${itemId}`,
  REMOVE_ITEM: (buyerId: string, productId: string) => `/carts/buyer/${buyerId}/items/${productId}`,
  CLEAR: (buyerId: string) => `/carts/buyer/${buyerId}/clear`,
};

// User endpoints
export const USERS = {
  BUYERS: {
    GET_ALL: '/buyers',
    GET_BY_ID: (id: string) => `/buyers/${id}`,
    GET_BY_EMAIL: (email: string) => `/buyers/email/${email}`,
    UPDATE: (id: string) => `/buyers/${id}`,
    DELETE: (id: string) => `/buyers/${id}`,
  },
  SELLERS: {
    GET_ALL: '/sellers',
    GET_BY_ID: (id: string) => `/sellers/${id}`,
    GET_BY_EMAIL: (email: string) => `/sellers/email/${email}`,
    UPDATE: (id: string) => `/sellers/${id}`,
    DELETE: (id: string) => `/sellers/${id}`,
  },
};

// Company endpoints
export const COMPANIES = {
  GET_ALL: '/companies',
  GET_BY_ID: (id: string) => `/companies/${id}`,
  GET_BY_USER: (userId: string) => `/companies/user/${userId}`,
  CREATE_FOR_USER: (userId: string) => `/companies/user/${userId}`,
  UPDATE: (id: string) => `/companies/${id}`,
  DELETE: (id: string) => `/companies/${id}`,
  UPDATE_STATUS: (id: string) => `/companies/${id}/status`,
};