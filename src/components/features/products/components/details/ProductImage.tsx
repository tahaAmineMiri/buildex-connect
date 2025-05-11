// ProductImage Component
// This component displays the product image in the product detail modal
// It also shows a category badge overlay on the image

import { Badge } from "@/components/common/ui/badge";
import { ProductProps } from '@/components/features/products/components/listing/ProductCard';

// Props for the product image component
interface ProductImageProps {
  product: ProductProps;  // The product to display the image for
}

const ProductImage = ({ product }: ProductImageProps) => {
  return (
    <div className="relative h-64 md:h-full">
      {/* Product image */}
      <img 
        src={product.image} 
        alt={product.name}
        className="w-full h-full object-cover"
      />
      
      {/* Category badge in top left corner */}
      <div className="absolute top-4 left-4">
        <Badge variant="secondary" className="bg-white/90 backdrop-blur-sm text-construction-black font-medium">
          {product.category}
        </Badge>
      </div>
    </div>
  );
};

export default ProductImage;