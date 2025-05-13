// src/types/product.ts
export interface Product {
  productId: number;
  productName: string;
  productDescription: string;
  productPrice: number;
  productStockQuantity: number;
  productCategory: string;
  productImage: string;
  productRating: number;
  availability?: 'In Stock' | 'Low Stock' | 'Out of Stock'; // Added for frontend display
}

export interface ProductRequest {
  productName: string;
  productDescription: string;
  productPrice: number;
  productStockQuantity: number;
  productCategory: string;
  productImage: string;
}