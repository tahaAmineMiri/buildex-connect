import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/common/ui/card';
import { Button } from '@/components/common/ui/button';
import { ShoppingCart } from 'lucide-react';
import { RecommendedProduct } from '@/types/product';

/**
 * Mock recommended product data
 * In a real application, these would be personalized based on user history
 * and would come from an API call
 * 
 * Each product contains:
 * - id: Unique product identifier
 * - name: Product name
 * - price: Cost of the product
 * - image: Path to the product image
 */
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

/**
 * RecommendedProducts Component
 * 
 * Displays a list of products that might interest the buyer based on
 * their purchase history and browsing behavior.
 * 
 * Each product shows:
 * - Product image
 * - Product name
 * - Price
 * - "Add" button to quickly add the item to cart
 * 
 * A "View All Recommendations" button is provided at the bottom for
 * users who want to see more suggestions.
 */
const RecommendedProducts = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recommended Products</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Map through each recommended product */}
        {mockRecommendedProducts.map((product) => (
          <div 
            key={product.id} 
            className="flex items-center space-x-4 border-b pb-4 last:border-0"
          >
            {/* Product image with fallback to placeholder if image fails to load */}
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
            {/* Product details */}
            <div className="flex-1">
              <h4 className="font-medium">{product.name}</h4>
              <p className="text-sm text-muted-foreground">${product.price}</p>
            </div>
            {/* Quick add to cart button */}
            <Button size="sm" variant="outline">
              <ShoppingCart className="mr-1 h-4 w-4" /> Add
            </Button>
          </div>
        ))}
        {/* Button to view more recommendations */}
        <Button className="w-full" variant="outline">
          View All Recommendations
        </Button>
      </CardContent>
    </Card>
  );
};

export default RecommendedProducts;