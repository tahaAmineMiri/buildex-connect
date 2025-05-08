
import { ProductProps } from '@/components/features/products/components/listing/ProductCard';

interface ProductDetailsTabProps {
  product: ProductProps;
}

const ProductDetailsTab = ({ product }: ProductDetailsTabProps) => {
  return (
    <div className="mt-2 focus:outline-none">
      <p className="text-base text-construction-slate mb-6">
        {product.description}
      </p>
      
      <div className="mt-4 space-y-6">
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h4 className="text-sm font-medium text-construction-slate mb-1">Material</h4>
            <p className="text-construction-black font-medium">Premium Quality</p>
          </div>
          <div>
            <h4 className="text-sm font-medium text-construction-slate mb-1">Dimensions</h4>
            <p className="text-construction-black font-medium">Standard Size</p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h4 className="text-sm font-medium text-construction-slate mb-1">Certification</h4>
            <p className="text-construction-black font-medium">ISO Certified</p>
          </div>
          <div>
            <h4 className="text-sm font-medium text-construction-slate mb-1">Warranty</h4>
            <p className="text-construction-black font-medium">1 Year Limited</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsTab;
