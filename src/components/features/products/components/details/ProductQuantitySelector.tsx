
import { Button } from "@/components/common/ui/button";
import { Minus, Plus } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

interface ProductQuantitySelectorProps {
  quantity: number;
  setQuantity: Dispatch<SetStateAction<number>>;
  price: number;
}

const ProductQuantitySelector = ({ quantity, setQuantity, price }: ProductQuantitySelectorProps) => {
  return (
    <div className="flex items-center gap-4 mb-4">
      <div className="flex items-center border rounded-md">
        <Button
          variant="ghost"
          size="icon"
          className="h-10 w-10 rounded-none border-r"
          onClick={() => setQuantity(Math.max(1, quantity - 1))}
        >
          <Minus className="h-4 w-4" />
        </Button>
        <span className="w-10 text-center">{quantity}</span>
        <Button
          variant="ghost"
          size="icon"
          className="h-10 w-10 rounded-none border-l"
          onClick={() => setQuantity(quantity + 1)}
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>
      <div className="flex-1 text-right">
        <span className="text-2xl font-bold">${(price * quantity).toLocaleString()}</span>
      </div>
    </div>
  );
};

export default ProductQuantitySelector;
