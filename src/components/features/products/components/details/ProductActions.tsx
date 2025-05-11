// ProductActions Component
// This component displays action buttons in the product detail modal
// It provides buttons for adding to RFQ and contacting the supplier

import { Button } from "@/components/common/ui/button";
import { MessageSquare, ShoppingCart } from "lucide-react"; // Icons

const ProductActions = () => {
  return (
    <div className="grid grid-cols-2 gap-3">
      {/* Add to RFQ (Request for Quote) button */}
      <Button className="gap-2 bg-construction-blue hover:bg-construction-blue/90">
        <ShoppingCart className="h-4 w-4" />
        Add to RFQ
      </Button>
      
      {/* Contact Supplier button */}
      <Button variant="outline" className="gap-2">
        <MessageSquare className="h-4 w-4" />
        Contact Supplier
      </Button>
    </div>
  );
};

export default ProductActions;