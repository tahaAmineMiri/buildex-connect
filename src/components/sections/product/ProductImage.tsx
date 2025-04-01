
import { Badge } from "@/components/ui/badge";
import { ProductProps } from './ProductCard';

interface ProductImageProps {
  product: ProductProps;
}

const ProductImage = ({ product }: ProductImageProps) => {
  return (
    <div className="relative h-64 md:h-full">
      <img 
        src={product.image} 
        alt={product.name}
        className="w-full h-full object-cover"
      />
      <div className="absolute top-4 left-4">
        <Badge variant="secondary" className="bg-white/90 backdrop-blur-sm text-construction-black font-medium">
          {product.category}
        </Badge>
      </div>
    </div>
  );
};

export default ProductImage;
