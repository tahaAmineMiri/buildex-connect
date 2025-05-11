/**
 * User Dashboard Component Exports
 * 
 * This file exports all dashboard components to make them easily importable
 * from a single location. The dashboard has two main sections:
 * 
 * 1. Buyer Dashboard - Components for customers who purchase products
 * 2. Seller Dashboard - Components for vendors who sell products
 */

// Buyer Dashboard Components
export { default as BuyerStats } from './buyerDashboard/BuyerStats';
export { default as OrderHistory } from './buyerDashboard/OrderHistory';
export { default as RecommendedProducts } from './buyerDashboard/RecommendedProducts';

// Seller Dashboard Components
export { default as OrdersReceived } from './sellerDashboard/OrdersReceived';
export { default as ProductStats } from './sellerDashboard/ProductStats';
export { default as SellerStats } from './sellerDashboard/SellerStats';