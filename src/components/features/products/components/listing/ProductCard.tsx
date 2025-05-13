// src/components/features/products/components/listing/ProductCard.tsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, ShoppingCart, Star } from 'lucide-react';
import { Button } from '@/components/common/ui/button';
import { Badge } from '@/components/common/ui/badge';
import { Product } from '@/types/product';

// Props for the ProductCard component
interface ProductCardProps {
  product: Product;        // The product to display
  index: number;          // Position in the list (for animation timing)
  onQuickView?: () => void; // Function to call when quick view button is clicked
}

const ProductCard = ({ product, index, onQuickView }: ProductCardProps) => {
  // Track whether the card is being hovered over
  const [isHovered, setIsHovered] = useState(false);
  
  // Function to determine the color of the availability indicator
  const getAvailabilityColor = (availability: string | undefined) => {
    if (!availability) return 'bg-gray-500';
    
    switch (availability) {
      case 'In Stock':
        return 'bg-green-500';
      case 'Low Stock':
        return 'bg-amber-500';
      case 'Out of Stock':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  // Determine availability text to display (fallback if not set)
  const getAvailabilityText = (): string => {
    if (product.availability) return product.availability;
    
    // Fallback to determine from stock quantity
    if (product.productStockQuantity > 10) {
      return 'In Stock';
    } else if (product.productStockQuantity > 0) {
      return 'Low Stock';
    } else {
      return 'Out of Stock';
    }
  };

  return (
    <motion.div
      className="group relative rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden h-56">
        <img 
          src={product.productImage} 
          alt={product.productName}
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80';
          }}
        />
        
        <div className="absolute top-4 left-4 z-10">
          <Badge variant="secondary" className="bg-white/90 backdrop-blur-sm text-construction-black font-medium">
            {product.productCategory}
          </Badge>
        </div>
        
        <div 
          className={`absolute top-4 right-4 z-10 w-3 h-3 rounded-full ${getAvailabilityColor(product.availability)}`}
        >
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"></span>
        </div>
        
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
        
        <motion.div
          className="absolute bottom-0 left-0 right-0 p-4 flex justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
          transition={{ duration: 0.3 }}
        >
          <Button 
            size="sm" 
            variant="secondary" 
            className="glass border-0 hover:bg-white/30"
            onClick={(e) => {
              e.preventDefault();
              if (onQuickView) onQuickView();
            }}
          >
            <Eye className="h-4 w-4 mr-1" /> Quick View
          </Button>
          
          <Button size="sm" variant="secondary" className="glass border-0 hover:bg-white/30">
            <ShoppingCart className="h-4 w-4 mr-1" /> Add to RFQ
          </Button>
        </motion.div>
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-center justify-between mb-2">
          <p className="text-sm text-construction-slate font-medium">{getAvailabilityText()}</p>
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
            <span className="text-sm ml-1 text-construction-slate">
              {(product.productRating || 0).toFixed(1)}
            </span>
          </div>
        </div>
        
        <h3 className="font-bold text-lg mb-1 text-construction-black">
          {product.productName}
        </h3>
        <p className="text-sm text-construction-slate line-clamp-2 mb-4">
          {product.productDescription}
        </p>
        
        <div className="mt-auto">
          <p className="text-2xl font-bold text-construction-blue">
            ${(product.productPrice || 0).toLocaleString()}
          </p>
          <p className="text-xs text-construction-slate">per unit • Bulk discounts available</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;