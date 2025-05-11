// ProductDetailsTab Component
// This component displays the detailed product information in the product modal
// It shows the product description and additional specifications

import { ProductProps } from '@/components/features/products/components/listing/ProductCard';

// Props for the details tab
interface ProductDetailsTabProps {
  product: ProductProps;  // The product to display details for
}

const ProductDetailsTab = ({ product }: ProductDetailsTabProps) => {
  return (
    <div className="mt-2 focus:outline-none">
      {/* Product description */}
      <p className="text-base text-construction-slate mb-6">
        {product.description}
      </p>
      
      {/* Product specifications in a grid layout */}
      <div className="mt-4 space-y-6">
        {/* First row of specifications */}
        <div className="grid grid-cols-2 gap-6">
          {/* Material specification */}
          <div>
            <h4 className="text-sm font-medium text-construction-slate mb-1">Material</h4>
            <p className="text-construction-black font-medium">Premium Quality</p>
          </div>
          {/* Dimensions specification */}
          <div>
            <h4 className="text-sm font-medium text-construction-slate mb-1">Dimensions</h4>
            <p className="text-construction-black font-medium">Standard Size</p>
          </div>
        </div>
        
        {/* Second row of specifications */}
        <div className="grid grid-cols-2 gap-6">
          {/* Certification specification */}
          <div>
            <h4 className="text-sm font-medium text-construction-slate mb-1">Certification</h4>
            <p className="text-construction-black font-medium">ISO Certified</p>
          </div>
          {/* Warranty specification */}
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