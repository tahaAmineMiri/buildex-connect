// src/api/products.ts
import apiClient from './axios';
import { PRODUCTS } from './endpoints';

export interface ProductResponse {
  productId: number;
  productName: string;
  productDescription: string;
  productPrice: number;
  productStockQuantity: number;
  productCategory: string;
  productImage: string;
  productRating: number;
}

export interface ProductRequest {
  productName: string;
  productDescription: string;
  productPrice: number;
  productStockQuantity: number;
  productCategory: string;
  productImage: string;
}

export const getAllProducts = async (): Promise<ProductResponse[]> => {
  try {
    const response = await apiClient.get(PRODUCTS.GET_ALL);
    return response.data as ProductResponse[];
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

export const getProductById = async (id: string): Promise<ProductResponse> => {
  try {
    const response = await apiClient.get(PRODUCTS.GET_BY_ID(id));
    return response.data as ProductResponse;
  } catch (error) {
    console.error(`Error fetching product ${id}:`, error);
    throw error;
  }
};

export const getProductsByCategory = async (category: string): Promise<ProductResponse[]> => {
  try {
    const response = await apiClient.get(PRODUCTS.GET_BY_CATEGORY(category));
    return response.data as ProductResponse[];
  } catch (error) {
    console.error(`Error fetching products in category ${category}:`, error);
    return [];
  }
};

export const getProductsBySeller = async (sellerId: string): Promise<ProductResponse[]> => {
  try {
    const response = await apiClient.get(PRODUCTS.GET_BY_SELLER(sellerId));
    return response.data as ProductResponse[];
  } catch (error) {
    console.error(`Error fetching products for seller ${sellerId}:`, error);
    return [];
  }
};

export const createProduct = async (sellerId: string, product: ProductRequest): Promise<ProductResponse> => {
  try {
    const response = await apiClient.post(`${PRODUCTS.CREATE}/${sellerId}`, product);
    return response.data as ProductResponse;
  } catch (error) {
    console.error("Error creating product:", error);
    throw error;
  }
};

export const updateProduct = async (id: string, product: ProductRequest): Promise<ProductResponse> => {
  try {
    const response = await apiClient.put(PRODUCTS.UPDATE(id), product);
    return response.data as ProductResponse;
  } catch (error) {
    console.error(`Error updating product ${id}:`, error);
    throw error;
  }
};

export const deleteProduct = async (id: string): Promise<void> => {
  try {
    await apiClient.delete(PRODUCTS.DELETE(id));
  } catch (error) {
    console.error(`Error deleting product ${id}:`, error);
    throw error;
  }
};

export const updateProductStock = async (id: string, quantity: number): Promise<ProductResponse> => {
  try {
    const response = await apiClient.patch(PRODUCTS.UPDATE_STOCK(id), null, {
      params: { quantity }
    });
    return response.data as ProductResponse;
  } catch (error) {
    console.error(`Error updating product ${id} stock:`, error);
    throw error;
  }
};

export const updateProductPrice = async (id: string, price: number): Promise<ProductResponse> => {
  try {
    const response = await apiClient.patch(PRODUCTS.UPDATE_PRICE(id), null, {
      params: { price }
    });
    return response.data as ProductResponse;
  } catch (error) {
    console.error(`Error updating product ${id} price:`, error);
    throw error;
  }
};