import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/common/ui/card';
import { ShoppingCart, Package, Clock } from 'lucide-react';

/**
 * BuyerStats Component
 * 
 * This component displays key metrics for buyers in a dashboard format.
 * It shows three important statistics:
 * - Total Orders: How many orders the buyer has placed
 * - Pending Delivery: Items that are on their way to the buyer
 * - Average Delivery Time: How quickly orders typically arrive
 * 
 * Each stat is displayed in its own card with an icon and comparison to previous period.
 */
const BuyerStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      {/* Total Orders Card */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
          <ShoppingCart className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">24</div>
          <p className="text-xs text-muted-foreground">+2 from last month</p>
        </CardContent>
      </Card>

      {/* Pending Delivery Card */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Pending Delivery</CardTitle>
          <Package className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">3</div>
          <p className="text-xs text-muted-foreground">Expected within 5 days</p>
        </CardContent>
      </Card>

      {/* Average Delivery Time Card */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Average Delivery Time</CardTitle>
          <Clock className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">4.2 days</div>
          <p className="text-xs text-muted-foreground">-0.3 days from last month</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default BuyerStats;