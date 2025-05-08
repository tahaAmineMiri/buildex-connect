
import { Badge } from "@/components/common/ui/badge";
import { DialogTitle } from "@/components/common/ui/dialog";
import { Star } from "lucide-react";
import { ProductProps } from './ProductCard';

interface ProductDetailHeaderProps {
  product: ProductProps;
}

const ProductDetailHeader = ({ product }: ProductDetailHeaderProps) => {
  const availabilityTextColor = product.availability === 'In Stock' 
    ? 'text-green-600' 
    : product.availability === 'Low Stock' 
      ? 'text-amber-600' 
      : 'text-red-600';

  return (
    <div className="p-6 pb-4 border-b">
      <div className="flex items-center justify-between">
        <Badge variant="outline" className={`border-1 ${availabilityTextColor}`}>
          {product.availability}
        </Badge>
        <div className="flex items-center">
          <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
          <span className="text-lg ml-1 font-medium">{product.rating.toFixed(1)}</span>
        </div>
      </div>
      <DialogTitle className="text-2xl font-bold mt-3">{product.name}</DialogTitle>
      <div className="flex items-baseline mt-2">
        <span className="text-3xl font-bold text-construction-blue">${product.price.toLocaleString()}</span>
        <span className="text-sm text-construction-slate ml-2">per unit • Bulk discounts available</span>
      </div>
    </div>
  );
};

export default ProductDetailHeader;
