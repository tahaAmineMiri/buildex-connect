
import { TabsContent } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import ProductDetailsTab from "./ProductDetailsTab";
import ProductShippingTab from "./ProductShippingTab";
import ProductReviewsTab from "./ProductReviewsTab";
import { ProductProps } from "./ProductCard";

interface ProductTabContentProps {
  product: ProductProps;
  activeTab: string;
}

const ProductTabContent = ({ product, activeTab }: ProductTabContentProps) => {
  return (
    <div className="flex-1 overflow-hidden">
      <ScrollArea className="h-full px-6 py-4">
        <TabsContent value="details" className={activeTab === "details" ? "block" : "hidden"}>
          <ProductDetailsTab product={product} />
        </TabsContent>
        
        <TabsContent value="shipping" className={activeTab === "shipping" ? "block" : "hidden"}>
          <ProductShippingTab />
        </TabsContent>
        
        <TabsContent value="reviews" className={activeTab === "reviews" ? "block" : "hidden"}>
          <ProductReviewsTab />
        </TabsContent>
      </ScrollArea>
    </div>
  );
};

export default ProductTabContent;
