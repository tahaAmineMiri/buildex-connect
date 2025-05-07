
import { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct } from "@/api/products";
import { Product } from "@/types";

export interface ProductFilters {
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  search?: string;
}

// Product service functions
export const productService = {
  // Get all products with optional filtering
  getProducts: async (filters?: ProductFilters): Promise<Product[]> => {
    try {
      const products = await getAllProducts();
      
      // Apply filters if provided
      if (filters) {
        return products.filter(product => {
          let match = true;
          
          if (filters.category && product.category !== filters.category) {
            match = false;
          }
          
          if (filters.minPrice && product.price < filters.minPrice) {
            match = false;
          }
          
          if (filters.maxPrice && product.price > filters.maxPrice) {
            match = false;
          }
          
          if (filters.search && !product.name.toLowerCase().includes(filters.search.toLowerCase())) {
            match = false;
          }
          
          return match;
        });
      }
      
      return products;
    } catch (error) {
      console.error("Error fetching products", error);
      return [];
    }
  },
  
  // Get product by ID
  getProduct: async (id: string): Promise<Product | null> => {
    try {
      return await getProductById(id);
    } catch (error) {
      console.error(`Error fetching product ${id}`, error);
      return null;
    }
  },
  
  // Create a new product
  createProduct: async (productData: Omit<Product, 'id'>): Promise<Product | null> => {
    try {
      return await createProduct(productData);
    } catch (error) {
      console.error("Error creating product", error);
      return null;
    }
  },
  
  // Update an existing product
  updateProduct: async (id: string, productData: Partial<Product>): Promise<Product | null> => {
    try {
      return await updateProduct(id, productData);
    } catch (error) {
      console.error(`Error updating product ${id}`, error);
      return null;
    }
  },
  
  // Delete a product
  deleteProduct: async (id: string): Promise<boolean> => {
    try {
      await deleteProduct(id);
      return true;
    } catch (error) {
      console.error(`Error deleting product ${id}`, error);
      return false;
    }
  }
};
