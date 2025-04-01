
import { Button } from "@/components/ui/button";
import { MessageSquare, ShoppingCart } from "lucide-react";

const ProductActions = () => {
  return (
    <div className="grid grid-cols-2 gap-3">
      <Button className="gap-2 bg-construction-blue hover:bg-construction-blue/90">
        <ShoppingCart className="h-4 w-4" />
        Add to RFQ
      </Button>
      <Button variant="outline" className="gap-2">
        <MessageSquare className="h-4 w-4" />
        Contact Supplier
      </Button>
    </div>
  );
};

export default ProductActions;
