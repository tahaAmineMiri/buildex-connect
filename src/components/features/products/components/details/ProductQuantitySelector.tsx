// ProductQuantitySelector Component
// This component provides a control for adjusting product quantity
// It also shows the total price based on the selected quantity

import { Button } from "@/components/common/ui/button";
import { Minus, Plus } from "lucide-react"; // Icons for increment/decrement
import { Dispatch, SetStateAction } from "react"; // React types

// Props for the quantity selector component
interface ProductQuantitySelectorProps {
  quantity: number;                                  // Current quantity selected
  setQuantity: Dispatch<SetStateAction<number>>;     // Function to update quantity
  price: number;                                     // Price per unit
}

const ProductQuantitySelector = ({ quantity, setQuantity, price }: ProductQuantitySelectorProps) => {
  return (
    <div className="flex items-center gap-4 mb-4">
      {/* Quantity adjustment controls */}
      <div className="flex items-center border rounded-md">
        {/* Decrease quantity button */}
        <Button
          variant="ghost"
          size="icon"
          className="h-10 w-10 rounded-none border-r"
          onClick={() => setQuantity(Math.max(1, quantity - 1))} // Don't allow less than 1
        >
          <Minus className="h-4 w-4" />
        </Button>
        
        {/* Display current quantity */}
        <span className="w-10 text-center">{quantity}</span>
        
        {/* Increase quantity button */}
        <Button
          variant="ghost"
          size="icon"
          className="h-10 w-10 rounded-none border-l"
          onClick={() => setQuantity(quantity + 1)}
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>
      
      {/* Total price display (quantity × price) */}
      <div className="flex-1 text-right">
        <span className="text-2xl font-bold">${(price * quantity).toLocaleString()}</span>
      </div>
    </div>
  );
};

export default ProductQuantitySelector;