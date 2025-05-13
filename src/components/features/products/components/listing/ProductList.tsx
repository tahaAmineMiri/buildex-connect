// src/components/features/products/components/listing/ProductList.tsx
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { getAllProducts } from "@/api/products";
import ProductDetailModal from "@/components/features/products/components/details/ProductDetailModal";
import ProductSearch from "@/components/features/products/components/listing/ProductSearch";
import ProductGrid from "@/components/features/products/components/listing/ProductGrid";
import ProductLoadingState from "@/components/features/products/components/ui/ProductLoadingState";
import ProductEmptyState from "@/components/features/products/components/ui/ProductEmptyState";
import { Product } from "@/types/product";

interface ProductListProps {
  infiniteScroll?: boolean;
}

// Maps backend product data to the expected format for our components
const mapBackendProduct = (product: any): Product => {
  // Determine availability based on stock quantity
  let availability: 'In Stock' | 'Low Stock' | 'Out of Stock';
  
  if (product.productStockQuantity > 10) {
    availability = 'In Stock';
  } else if (product.productStockQuantity > 0) {
    availability = 'Low Stock';
  } else {
    availability = 'Out of Stock';
  }
  
  return {
    productId: product.productId,  // Include native backend fields
    productName: product.productName,
    productPrice: product.productPrice,
    productDescription: product.productDescription,
    productImage: product.productImage || 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
    productCategory: product.productCategory,
    productRating: product.productRating,
    productStockQuantity: product.productStockQuantity || 0, // Ensure it's a number
    availability: availability
  };
};

const ProductList = ({ infiniteScroll = false }: ProductListProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    const loadProducts = async () => {
      setIsLoading(true);
      try {
        const response = await getAllProducts();
        const mappedProducts = response.map(mapBackendProduct);
        setProducts(mappedProducts);
      } catch (error) {
        console.error("Error loading products:", error);
        toast.error("Failed to load products");
      } finally {
        setIsLoading(false);
      }
    };

    loadProducts();
  }, []);

  const filteredProducts = products.filter(
    (product) =>
      product.productName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.productDescription?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.productCategory?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleQuickView = (product: Product) => {
    setSelectedProduct(product);
  };

  const closeQuickView = () => {
    setSelectedProduct(null);
  };

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
  };

  const handleFilter = () => {
    console.log("Filter clicked");
  };

  const handleSort = () => {
    console.log("Sort clicked");
  };

  const clearSearch = () => {
    setSearchTerm("");
  };

  return (
    <section className="py-16 bg-construction-gray/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-construction-black">
            Featured Construction Materials
          </h2>
          <p className="text-construction-slate max-w-3xl mx-auto">
            Browse our selection of high-quality construction materials from
            verified suppliers worldwide. Request quotes, compare prices, and
            find exactly what your project needs.
          </p>
        </div>

        <ProductSearch
          searchTerm={searchTerm}
          onSearchChange={handleSearchChange}
          onFilter={handleFilter}
          onSort={handleSort}
        />

        {isLoading ? (
          <ProductLoadingState />
        ) : filteredProducts.length === 0 ? (
          <ProductEmptyState
            searchTerm={searchTerm}
            onClearSearch={clearSearch}
          />
        ) : (
          <ProductGrid
            products={filteredProducts}
            infiniteScroll={false}
            isLoading={isLoading}
            hasMore={false}
            onLoadMore={() => {}}
            onQuickView={handleQuickView}
          />
        )}
      </div>

      <ProductDetailModal
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={closeQuickView}
      />
    </section>
  );
};

export default ProductList;