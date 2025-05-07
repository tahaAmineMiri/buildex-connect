
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ProductStat {
  id: string;
  name: string;
  sold: number;
  revenue: number;
}

const ProductStats = () => {
  const topProducts: ProductStat[] = [
    {
      id: '1',
      name: 'Premium Cement Mix',
      sold: 87,
      revenue: 2174.13
    },
    {
      id: '2',
      name: 'Industrial Steel Beams',
      sold: 64,
      revenue: 8320.00
    },
    {
      id: '3',
      name: 'Heavy Duty Toolkit',
      sold: 42,
      revenue: 5459.58
    },
    {
      id: '4',
      name: 'Reinforced Concrete Blocks',
      sold: 36,
      revenue: 2159.64
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Top Selling Products</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {topProducts.map((product) => (
            <li 
              key={product.id}
              className="flex items-center justify-between border-b pb-2 last:border-0"
            >
              <div>
                <p className="font-medium">{product.name}</p>
                <p className="text-sm text-muted-foreground">{product.sold} units sold</p>
              </div>
              <p className="font-bold">${product.revenue.toFixed(2)}</p>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default ProductStats;
