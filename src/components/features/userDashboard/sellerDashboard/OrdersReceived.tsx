import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/common/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/common/ui/table';
import { Badge } from '@/components/common/ui/badge';
import { Button } from '@/components/common/ui/button';

/**
 * OrdersReceived Component
 * 
 * This component displays orders that customers have placed with the seller.
 * It shows a table with details about each order including:
 * - Order ID
 * - Customer name
 * - Product details
 * - Total amount
 * - Current status (with color-coded indicators)
 * - Action button to view more details
 * 
 * This gives sellers a quick overview of recent customer activity.
 */
const OrdersReceived = () => {
  /**
   * Sample order data
   * In a real application, this would come from an API or database
   */
  const recentOrders = [
    {
      id: '#ORD-7839',
      customer: 'DreamBuilder Construction',
      product: 'Premium Cement Mix (20 units)',
      amount: 259.80,
      status: 'completed'
    },
    {
      id: '#ORD-7840',
      customer: 'Elevation Contractors',
      product: 'PVC Pipes 10ft (15 units)',
      amount: 281.25,
      status: 'processing'
    },
    {
      id: '#ORD-7841',
      customer: 'Atlas Engineering',
      product: 'Steel I-Beam 6"x4" (4 units)',
      amount: 999.96,
      status: 'shipping'
    },
    {
      id: '#ORD-7842',
      customer: 'Cornerstone Builders',
      product: 'Insulation Roll 50ft (10 units)',
      amount: 895.00,
      status: 'pending'
    }
  ];

  /**
   * Returns the appropriate color class based on order status
   * - Green for completed orders
   * - Amber/Yellow for orders being processed
   * - Blue for orders that are shipping
   * - Gray for pending orders
   */
  const getStatusColor = (status: string): string => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'processing':
        return 'bg-amber-100 text-amber-800';
      case 'shipping':
        return 'bg-blue-100 text-blue-800';
      case 'pending':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card>
      <CardHeader className="flex justify-between items-center">
        <CardTitle>Recent Orders</CardTitle>
        <Button variant="outline" size="sm">View All</Button>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order ID</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Product</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {/* Display each order as a row in the table */}
            {recentOrders.map((order) => (
              <TableRow key={order.id}>
                <TableCell className="font-medium">{order.id}</TableCell>
                <TableCell>{order.customer}</TableCell>
                <TableCell>{order.product}</TableCell>
                <TableCell>${order.amount.toFixed(2)}</TableCell>
                <TableCell>
                  {/* Status badge with color based on current status */}
                  <Badge 
                    variant="outline"
                    className={getStatusColor(order.status)}
                  >
                    {/* Capitalize first letter of status */}
                    {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  {/* Button to view detailed information about the order */}
                  <Button variant="ghost" size="sm" className="text-xs">
                    View Details
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default OrdersReceived;