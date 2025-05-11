// OrderManagement.tsx
// This component displays and manages customer orders in the system.
// It allows administrators to view order details and update order statuses.

import React from "react";
// React Query for data fetching and state management
import { useQuery } from "@tanstack/react-query";
// Type definition for order data
import { Order } from "@/types/admin";
// UI components from the common component library
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/common/ui/table";
import { Button } from "@/components/common/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/common/ui/select";
// Toast notifications
import { toast } from "sonner";

// Mocked API function to fetch orders list
// In a real application, this would call an actual API endpoint
const fetchOrders = async (): Promise<Order[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          orderId: 1001,
          userId: 101,
          userName: "Construction Ltd",
          orderDate: "2024-04-10T09:30:00",
          orderAmount: 2500.00,
          orderStatus: "PENDING",
        },
        {
          orderId: 1002,
          userId: 102,
          userName: "Build Master Inc",
          orderDate: "2024-04-09T10:15:00",
          orderAmount: 4200.50,
          orderStatus: "PROCESSING",
        },
        {
          orderId: 1003,
          userId: 103,
          userName: "City Builders",
          orderDate: "2024-04-08T15:45:00",
          orderAmount: 1800.75,
          orderStatus: "SHIPPED",
        },
        {
          orderId: 1004,
          userId: 104,
          userName: "Premier Construction",
          orderDate: "2024-04-07T11:20:00",
          orderAmount: 3750.25,
          orderStatus: "DELIVERED",
        },
      ]);
    }, 500);
  });
};

// Mocked API function to update an order's status
const updateOrderStatus = async (orderId: number, newStatus: string): Promise<Order> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        orderId: orderId,
        userId: 101,
        userName: "Construction Ltd",
        orderDate: "2024-04-10T09:30:00",
        orderAmount: 2500.00,
        orderStatus: newStatus as any,
      });
    }, 500);
  });
};

// The main OrderManagement component
const OrderManagement: React.FC = () => {
  // Fetch the list of orders using React Query
  const { data: orders, isLoading, refetch } = useQuery({
    queryKey: ["orders"],
    queryFn: fetchOrders,
  });

  // Handler for updating an order's status
  const handleStatusChange = async (orderId: number, newStatus: string) => {
    try {
      await updateOrderStatus(orderId, newStatus);
      toast.success(`Order #${orderId} status updated to ${newStatus}`);
      refetch(); // Refresh the list to show the updated status
    } catch (error) {
      toast.error("Failed to update order status");
    }
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Order Management</h2>
      </div>

      {/* Loading indicator */}
      {isLoading ? (
        <div className="flex justify-center py-8">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
        </div>
      ) : (
        // Orders table
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order ID</TableHead>
                <TableHead>User</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders?.map((order) => (
                <TableRow key={order.orderId}>
                  <TableCell>#{order.orderId}</TableCell>
                  <TableCell>{order.userName}</TableCell>
                  <TableCell>
                    {new Date(order.orderDate).toLocaleDateString()}
                  </TableCell>
                  <TableCell>${order.orderAmount.toFixed(2)}</TableCell>
                  <TableCell>
                    {/* Status badge with color coding */}
                    <span
                      className={`px-2 py-1 rounded text-xs font-medium ${
                        order.orderStatus === "PENDING"
                          ? "bg-yellow-100 text-yellow-800"
                          : order.orderStatus === "PROCESSING"
                          ? "bg-blue-100 text-blue-800"
                          : order.orderStatus === "SHIPPED"
                          ? "bg-purple-100 text-purple-800"
                          : order.orderStatus === "DELIVERED"
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {order.orderStatus}
                    </span>
                  </TableCell>
                  <TableCell>
                    {/* Status update dropdown */}
                    <Select
                      onValueChange={(value) => handleStatusChange(order.orderId, value)}
                      defaultValue={order.orderStatus}
                    >
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Update status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="PENDING">PENDING</SelectItem>
                        <SelectItem value="PROCESSING">PROCESSING</SelectItem>
                        <SelectItem value="SHIPPED">SHIPPED</SelectItem>
                        <SelectItem value="DELIVERED">DELIVERED</SelectItem>
                        <SelectItem value="CANCELLED">CANCELLED</SelectItem>
                      </SelectContent>
                    </Select>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
};

export default OrderManagement;