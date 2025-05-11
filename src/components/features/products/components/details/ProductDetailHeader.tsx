// ProductDetailHeader Component
// This component displays the header information in the product detail modal
// It shows availability, rating, product name, and price

import { Badge } from "@/components/common/ui/badge";
import { DialogTitle } from "@/components/common/ui/dialog";
import { Star } from "lucide-react"; // Star icon for ratings
import { ProductProps } from '@/components/features/products/components/listing/ProductCard';

// Props for the detail header component
interface ProductDetailHeaderProps {
  product: ProductProps;  // The product to display information for
}

const ProductDetailHeader = ({ product }: ProductDetailHeaderProps) => {
  // Determine text color based on availability status
  const availabilityTextColor = product.availability === 'In Stock' 
    ? 'text-green-600'  // Green for "In Stock"
    : product.availability === 'Low Stock' 
      ? 'text-amber-600'  // Amber/Yellow for "Low Stock"
      : 'text-red-600';   // Red for "Out of Stock"

  return (
    <div className="p-6 pb-4 border-b">
      <div className="flex items-center justify-between">
        {/* Availability badge with dynamic color */}
        <Badge variant="outline" className={`border-1 ${availabilityTextColor}`}>
          {product.availability}
        </Badge>
        
        {/* Rating display with star icon */}
        <div className="flex items-center">
          <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
          <span className="text-lg ml-1 font-medium">{product.rating.toFixed(1)}</span>
        </div>
      </div>
      
      {/* Product name as dialog title */}
      <DialogTitle className="text-2xl font-bold mt-3">{product.name}</DialogTitle>
      
      {/* Price information */}
      <div className="flex items-baseline mt-2">
        <span className="text-3xl font-bold text-construction-blue">${product.price.toLocaleString()}</span>
        <span className="text-sm text-construction-slate ml-2">per unit • Bulk discounts available</span>
      </div>
    </div>
  );
};

export default ProductDetailHeader;