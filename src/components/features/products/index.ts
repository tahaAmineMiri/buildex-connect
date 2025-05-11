// Products Feature Components
// This index file exports all components related to the Products feature
// Making it easier to import them in other parts of the application

// Product Listing Components
export { default as ProductCard } from './components/listing/ProductCard';
export { default as ProductGrid } from './components/listing/ProductGrid';
export { default as ProductList } from './components/listing/ProductList';
export { default as ProductSearch } from './components/listing/ProductSearch';
export { default as SearchBar } from './components/listing/SearchBar';

// Product Detail Components
export { default as ProductActions } from './components/details/ProductActions';
export { default as ProductDetailHeader } from './components/details/ProductDetailHeader';
export { default as ProductDetailModal } from './components/details/ProductDetailModal';
export { default as ProductDetailsTab } from './components/details/ProductDetailsTab';
export { default as ProductFooter } from './components/details/ProductFooter';
export { default as ProductImage } from './components/details/ProductImage';
export { default as ProductQuantitySelector } from './components/details/ProductQuantitySelector';
export { default as ProductReviewsTab } from './components/details/ProductReviewsTab';
export { default as ProductShippingTab } from './components/details/ProductShippingTab';
export { default as ProductTabContent } from './components/details/ProductTabContent';
export { default as ProductTabNavigation } from './components/details/ProductTabNavigation';

// UI Components
export { default as LoadingSpinner } from './components/ui/LoadingSpinner';
export { default as NoProducts } from './components/ui/NoProducts';
export { default as ProductEmptyState } from './components/ui/ProductEmptyState';
export { default as ProductEndMessage } from './components/ui/ProductEndMessage';
export { default as ProductLoadingState } from './components/ui/ProductLoadingState';
export { default as ProductPaginationLoader } from './components/ui/ProductPaginationLoader';

// Data Utilities
export { 
  mockProducts, 
  generateMoreProducts,
  fetchInitialProducts,
  fetchMoreProducts
} from './components/data/product-data';

// Export the ProductProps type for use throughout the application
export type { ProductProps } from './components/listing/ProductCard';

// Usage example:
// import { 
//   ProductList, 
//   ProductCard, 
//   ProductDetailModal,
//   mockProducts 
// } from '@/components/features/products';