
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/common/ui/card';
import { Button } from '@/components/common/ui/button';
import { ShoppingCart } from 'lucide-react';
import { RecommendedProduct } from '@/types/product';

const mockRecommendedProducts: RecommendedProduct[] = [
  {
    id: '1',
    name: 'Premium Cement Mix',
    price: 24.99,
    image: '/assets/images/cement.jpg'
  },
  {
    id: '2',
    name: 'Heavy Duty Toolkit',
    price: 129.99,
    image: '/assets/images/toolkit.jpg'
  },
  {
    id: '3',
    name: 'Safety Helmet',
    price: 34.99,
    image: '/assets/images/helmet.jpg'
  }
];

const RecommendedProducts = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recommended Products</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {mockRecommendedProducts.map((product) => (
          <div 
            key={product.id} 
            className="flex items-center space-x-4 border-b pb-4 last:border-0"
          >
            <div className="h-16 w-16 overflow-hidden rounded-md bg-gray-100">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = '/placeholder.svg';
                }}
              />
            </div>
            <div className="flex-1">
              <h4 className="font-medium">{product.name}</h4>
              <p className="text-sm text-muted-foreground">${product.price}</p>
            </div>
            <Button size="sm" variant="outline">
              <ShoppingCart className="mr-1 h-4 w-4" /> Add
            </Button>
          </div>
        ))}
        <Button className="w-full" variant="outline">
          View All Recommendations
        </Button>
      </CardContent>
    </Card>
  );
};

export default RecommendedProducts;
