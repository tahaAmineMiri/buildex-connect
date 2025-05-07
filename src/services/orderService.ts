
import { getAllOrders, getOrderById, createOrder, updateOrderStatus } from "@/api/orders";

interface OrderProduct {
  productId: string;
  quantity: number;
  price: number;
}

export interface Order {
  id: string;
  userId: string;
  products: OrderProduct[];
  totalAmount: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  createdAt: string;
  updatedAt: string;
}

// Order service functions
export const orderService = {
  // Get all orders for the current user
  getOrders: async (): Promise<Order[]> => {
    try {
      return await getAllOrders();
    } catch (error) {
      console.error("Error fetching orders", error);
      return [];
    }
  },
  
  // Get order by ID
  getOrder: async (id: string): Promise<Order | null> => {
    try {
      return await getOrderById(id);
    } catch (error) {
      console.error(`Error fetching order ${id}`, error);
      return null;
    }
  },
  
  // Create a new order
  createOrder: async (products: { productId: string; quantity: number }[]): Promise<Order | null> => {
    try {
      return await createOrder(products);
    } catch (error) {
      console.error("Error creating order", error);
      return null;
    }
  },
  
  // Update order status
  updateOrderStatus: async (id: string, status: Order['status']): Promise<Order | null> => {
    try {
      return await updateOrderStatus(id, status);
    } catch (error) {
      console.error(`Error updating order ${id} status`, error);
      return null;
    }
  }
};
