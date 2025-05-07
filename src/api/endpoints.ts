
// API endpoints constants

// Auth endpoints
export const AUTH = {
  LOGIN: '/auth/login',
  REGISTER: '/auth/register',
  LOGOUT: '/auth/logout',
  REFRESH_TOKEN: '/auth/refresh',
};

// Product endpoints
export const PRODUCTS = {
  GET_ALL: '/products',
  GET_BY_ID: (id: string) => `/products/${id}`,
  CREATE: '/products',
  UPDATE: (id: string) => `/products/${id}`,
  DELETE: (id: string) => `/products/${id}`,
};

// Order endpoints
export const ORDERS = {
  GET_ALL: '/orders',
  GET_BY_ID: (id: string) => `/orders/${id}`,
  CREATE: '/orders',
  UPDATE_STATUS: (id: string) => `/orders/${id}/status`,
};

// User endpoints
export const USERS = {
  GET_PROFILE: '/users/profile',
  UPDATE_PROFILE: '/users/profile',
};
