
import { useState } from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader
} from "@/components/common/ui/dialog";
import { Tabs } from "@/components/common/ui/tabs";
import { ProductProps } from '@/components/features/products/components/listing/ProductCard';

import ProductImage from './ProductImage';
import ProductDetailHeader from './ProductDetailHeader';
import ProductTabNavigation from './ProductTabNavigation';
import ProductTabContent from './ProductTabContent';
import ProductFooter from './ProductFooter';

interface ProductDetailModalProps {
  product: ProductProps | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProductDetailModal = ({ product, isOpen, onClose }: ProductDetailModalProps) => {
  const [activeTab, setActiveTab] = useState("details");
  const [quantity, setQuantity] = useState(1);
  
  if (!product) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] p-0 overflow-hidden">
        <div className="grid md:grid-cols-2 gap-0">
          {/* Product Image */}
          <ProductImage product={product} />
          
          {/* Product Details */}
          <div className="flex flex-col h-[80vh] md:max-h-[90vh] overflow-hidden">
            <DialogHeader className="p-0 pb-0 border-b-0">
              <ProductDetailHeader product={product} />
            </DialogHeader>
            
            <Tabs defaultValue="details" className="flex-1 flex flex-col overflow-hidden" onValueChange={setActiveTab}>
              <ProductTabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
              
              <ProductTabContent product={product} activeTab={activeTab} />
              
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
