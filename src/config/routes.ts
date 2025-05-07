
// Application routes
export const ROUTES = {
  // Public routes
  HOME: '/',
  AUTH: '/auth',
  PRODUCTS: '/products',
  PRODUCT_DETAIL: (id: string) => `/products/${id}`,
  ABOUT: '/about',
  CONTACT: '/contact',
  REGISTRATION: '/registration',
  
  // Protected routes
  BUYER_DASHBOARD: '/buyer-dashboard',
  SELLER_DASHBOARD: '/seller-dashboard',
  ADMIN_DASHBOARD: '/admin-dashboard',
  
  // Error routes
  NOT_FOUND: '*'
};
