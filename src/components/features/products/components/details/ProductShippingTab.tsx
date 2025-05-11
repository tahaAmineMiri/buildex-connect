// ProductShippingTab Component
// This component displays shipping and delivery information
// in the product detail modal

import { Info, Truck } from "lucide-react"; // Icons for shipping information

const ProductShippingTab = () => {
  return (
    <div className="mt-2 focus:outline-none">
      <div className="space-y-4">
        {/* Delivery information section */}
        <div className="flex items-start gap-3">
          <Truck className="h-5 w-5 text-construction-blue mt-0.5" />
          <div>
            <h4 className="font-medium">Delivery Information</h4>
            <p className="text-construction-slate">Standard delivery: 3-5 business days</p>
            <p className="text-construction-slate">Express delivery: 1-2 business days (additional cost)</p>
          </div>
        </div>
        
        {/* Additional delivery notes section */}
        <div className="flex items-start gap-3">
          <Info className="h-5 w-5 text-construction-blue mt-0.5" />
          <div>
            <h4 className="font-medium">Delivery Notes</h4>
            <p className="text-construction-slate">Bulk orders may require special delivery arrangements.</p>
            <p className="text-construction-slate">Contact our logistics team for custom delivery options.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductShippingTab;