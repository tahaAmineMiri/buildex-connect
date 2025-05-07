
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getAllProducts, getProductById } from '@/api/products';
import { Product } from '@/types';

export const useProducts = () => {
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  
  const { 
    data: products = [], 
    isLoading: isLoadingProducts, 
    error: productsError 
  } = useQuery({
    queryKey: ['products'],
    queryFn: getAllProducts,
  });
  
  const { 
    data: selectedProduct, 
    isLoading: isLoadingProduct, 
    error: productError 
  } = useQuery({
    queryKey: ['product', selectedProductId],
    queryFn: () => selectedProductId ? getProductById(selectedProductId) : null,
    enabled: !!selectedProductId,
  });
  
  return {
    products,
    isLoadingProducts,
    productsError,
    selectedProduct,
    isLoadingProduct,
    productError,
    setSelectedProductId,
  };
};
