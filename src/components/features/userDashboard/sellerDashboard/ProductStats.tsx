import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/common/ui/card';

/**
 * Interface that defines the structure of product statistics
 * 
 * id: Unique identifier for the product
 * name: Product name
 * sold: Number of units sold
 * revenue: Total money earned from this product
 */
interface ProductStat {
  id: string;
  name: string;
  sold: number;
  revenue: number;
}

/**
 * ProductStats Component
 * 
 * This component displays statistics about a seller's top-performing products.
 * It shows a list of products ranked by sales performance, including:
 * - Product name
 * - Number of units sold
 * - Total revenue generated
 * 
 * This helps sellers identify their most successful products.
 */
const ProductStats = () => {
  /**
   * Sample product statistics data
   * In a real application, this would come from an API or database
   */
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
          {/* Display each product with its sales statistics */}
          {topProducts.map((product) => (
            <li 
              key={product.id}
              className="flex items-center justify-between border-b pb-2 last:border-0"
            >
              <div>
                {/* Product name and units sold */}
                <p className="font-medium">{product.name}</p>
                <p className="text-sm text-muted-foreground">{product.sold} units sold</p>
              </div>
              {/* Total revenue from this product */}
              <p className="font-bold">${product.revenue.toFixed(2)}</p>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default ProductStats;