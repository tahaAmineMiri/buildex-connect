import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/common/ui/card';
import { 
  DollarSign, 
  ShoppingCart, 
  Package, 
  TrendingUp 
} from 'lucide-react';

/**
 * SellerStats Component
 * 
 * This component displays key performance metrics for sellers in a dashboard format.
 * It shows four important statistics:
 * - Total Sales: Money earned from all sales
 * - Total Orders: Number of orders received
 * - Active Products: Items currently listed for sale
 * - Conversion Rate: Percentage of visitors who make a purchase
 * 
 * Each stat is displayed in its own card with an icon and comparison to previous period.
 * This gives sellers a quick overview of their business performance.
 */
const SellerStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
      {/* Total Sales Card */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Total Sales</CardTitle>
          <DollarSign className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">$12,345</div>
          <p className="text-xs text-muted-foreground">+18% from last month</p>
        </CardContent>
      </Card>

      {/* Total Orders Card */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
          <ShoppingCart className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">235</div>
          <p className="text-xs text-muted-foreground">+12% from last month</p>
        </CardContent>
      </Card>

      {/* Active Products Card */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Active Products</CardTitle>
          <Package className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">42</div>
          <p className="text-xs text-muted-foreground">+3 new this month</p>
        </CardContent>
      </Card>

      {/* Conversion Rate Card */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
          <TrendingUp className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">3.2%</div>
          <p className="text-xs text-muted-foreground">+0.5% from last month</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default SellerStats;