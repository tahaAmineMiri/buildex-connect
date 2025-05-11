import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/common/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/common/ui/table';
import { Badge } from '@/components/common/ui/badge';
import { ProductOrder } from '@/types/product';

/**
 * Mock order data for display purposes
 * In a real application, this would come from an API call
 * 
 * Each order contains:
 * - id: Unique order identifier
 * - date: When the order was placed
 * - items: Number of products in the order
 * - total: Total cost of the order
 * - status: Current state of the order (delivered, processing, shipped, pending)
 */
const mockOrders: ProductOrder[] = [
  {
    id: 'ORD-1234',
    date: '2023-05-04',
    items: 3,
    total: 425.99,
    status: 'delivered'
  },
  {
    id: 'ORD-1235',
    date: '2023-05-10',
    items: 1,
    total: 129.99,
    status: 'processing'
  },
  {
    id: 'ORD-1236',
    date: '2023-05-15',
    items: 2,
    total: 249.98,
    status: 'shipped'
  },
  {
    id: 'ORD-1237',
    date: '2023-05-20',
    items: 5,
    total: 599.95,
    status: 'pending'
  }
];

/**
 * OrderHistory Component
 * 
 * Displays a table of the buyer's recent orders with details including:
 * - Order ID
 * - Date
 * - Number of items
 * - Total cost
 * - Current status (with color-coded badges)
 * 
 * This gives buyers a quick overview of their purchase history.
 */
const OrderHistory = () => {
  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>Recent Orders</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order ID</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Items</TableHead>
              <TableHead>Total</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockOrders.map((order) => (
              <TableRow key={order.id}>
                <TableCell className="font-medium">{order.id}</TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>{order.items}</TableCell>
                <TableCell>${order.total.toFixed(2)}</TableCell>
                <TableCell>
                  {/* Status badge with different styles based on status */}
                  <Badge 
                    variant={order.status === 'delivered' ? 'default' : 
                            order.status === 'shipped' ? 'secondary' : 
                            order.status === 'processing' ? 'outline' : 'destructive'}
                  >
                    {order.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default OrderHistory;