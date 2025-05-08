
import ProductQuantitySelector from "./ProductQuantitySelector";
import ProductActions from "./ProductActions";
import { Dispatch, SetStateAction } from "react";

interface ProductFooterProps {
  quantity: number;
  setQuantity: Dispatch<SetStateAction<number>>;
  price: number;
}

const ProductFooter = ({ quantity, setQuantity, price }: ProductFooterProps) => {
  return (
    <div className="p-6 border-t border-gray-100 flex-shrink-0">
      <ProductQuantitySelector 
        quantity={quantity} 
        setQuantity={setQuantity} 
        price={price} 
      />
      <ProductActions />
    </div>
  );
};

export default ProductFooter;
