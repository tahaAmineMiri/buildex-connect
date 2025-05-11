// ProductDetailModal Component
// This component displays a modal with detailed product information
// It contains tabs for different sections of product information
// and allows users to select quantity and take actions like adding to RFQ

import { useState } from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader
} from "@/components/common/ui/dialog"; // Modal components
import { Tabs } from "@/components/common/ui/tabs"; // Tab navigation
import { ProductProps } from '@/components/features/products/components/listing/ProductCard';

// Import sub-components used in the modal
import ProductImage from './ProductImage';
import ProductDetailHeader from './ProductDetailHeader';
import ProductTabNavigation from './ProductTabNavigation';
import ProductTabContent from './ProductTabContent';
import ProductFooter from './ProductFooter';

// Props for the modal component
interface ProductDetailModalProps {
  product: ProductProps | null;   // The product to display (null when closed)
  isOpen: boolean;                // Whether the modal is visible
  onClose: () => void;            // Function to call when modal is closed
}

const ProductDetailModal = ({ product, isOpen, onClose }: ProductDetailModalProps) => {
  // State for tracking the active tab and quantity
  const [activeTab, setActiveTab] = useState("details");
  const [quantity, setQuantity] = useState(1);
  
  // Don't render anything if no product is selected
  if (!product) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] p-0 overflow-hidden">
        <div className="grid md:grid-cols-2 gap-0">
          {/* Left side: Product Image */}
          <ProductImage product={product} />
          
          {/* Right side: Product Details */}
          <div className="flex flex-col h-[80vh] md:max-h-[90vh] overflow-hidden">
            {/* Product header with name, price, rating */}
            <DialogHeader className="p-0 pb-0 border-b-0">
              <ProductDetailHeader product={product} />
            </DialogHeader>
            
            {/* Tabs for different product information sections */}
            <Tabs defaultValue="details" className="flex-1 flex flex-col overflow-hidden" onValueChange={setActiveTab}>
              {/* Tab navigation buttons */}
              <ProductTabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
              
              {/* Tab content areas */}
              <ProductTabContent product={product} activeTab={activeTab} />
              
              {/* Footer with quantity selector and action buttons */}
              <ProductFooter 
                quantity={quantity} 
                setQuantity={setQuantity} 
                price={product.price} 
              />
            </Tabs>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDetailModal;