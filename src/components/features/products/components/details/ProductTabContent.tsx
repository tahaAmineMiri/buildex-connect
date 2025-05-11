// ProductTabContent Component
// This component manages the tab content area in the product detail modal
// It renders the correct tab content based on which tab is active
// and provides scrolling functionality for the content

import { TabsContent } from "@/components/common/ui/tabs";
import { ScrollArea } from "@/components/common/ui/scroll-area"; // For scrollable content
import ProductDetailsTab from "./ProductDetailsTab";
import ProductShippingTab from "./ProductShippingTab";
import ProductReviewsTab from "./ProductReviewsTab";
import { ProductProps } from "@/components/features/products/components/listing/ProductCard";

// Props for the tab content component
interface ProductTabContentProps {
  product: ProductProps;  // The product to display information for
  activeTab: string;      // Which tab is currently selected
}

const ProductTabContent = ({ product, activeTab }: ProductTabContentProps) => {
  return (
    <div className="flex-1 overflow-hidden">
      {/* ScrollArea provides scrolling when content is too long */}
      <ScrollArea className="h-full px-6 py-4">
        {/* Details tab - product specifications and description */}
        <TabsContent value="details" className={activeTab === "details" ? "block" : "hidden"}>
          <ProductDetailsTab product={product} />
        </TabsContent>
        
        {/* Shipping tab - delivery information */}
        <TabsContent value="shipping" className={activeTab === "shipping" ? "block" : "hidden"}>
          <ProductShippingTab />
        </TabsContent>
        
        {/* Reviews tab - customer reviews */}
        <TabsContent value="reviews" className={activeTab === "reviews" ? "block" : "hidden"}>
          <ProductReviewsTab />
        </TabsContent>
      </ScrollArea>
    </div>
  );
};

export default ProductTabContent;