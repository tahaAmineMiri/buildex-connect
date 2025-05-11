// ProductFooter Component
// This component displays the footer section of the product detail modal
// It contains the quantity selector and action buttons

import ProductQuantitySelector from "./ProductQuantitySelector";
import ProductActions from "./ProductActions";
import { Dispatch, SetStateAction } from "react"; // React types

// Props for the footer component
interface ProductFooterProps {
  quantity: number;                                  // Current quantity selected
  setQuantity: Dispatch<SetStateAction<number>>;     // Function to update quantity
  price: number;                                     // Price per unit
}

const ProductFooter = ({ quantity, setQuantity, price }: ProductFooterProps) => {
  return (
    <div className="p-6 border-t border-gray-100 flex-shrink-0">
      {/* Quantity selector with total price calculation */}
      <ProductQuantitySelector 
        quantity={quantity} 
        setQuantity={setQuantity} 
        price={price} 
      />
      
      {/* Action buttons (Add to RFQ, Contact Supplier) */}
      <ProductActions />
    </div>
  );
};

export default ProductFooter;