// ProductCard Component
// This component displays a single product in the product grid
// It shows product details, price, availability, and quick action buttons
// It also handles hover animations and status indicators

import { useState } from 'react';
import { motion } from 'framer-motion'; // Animation library
import { Eye, ShoppingCart, Star } from 'lucide-react'; // Icons
import { Button } from '@/components/common/ui/button';
import { Badge } from '@/components/common/ui/badge';

// Define the shape of a product object
// This type is used throughout the application for product data
export interface ProductProps {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  rating: number;
  availability: 'In Stock' | 'Low Stock' | 'Out of Stock';
}

// Props for the ProductCard component
interface ProductCardProps {
  product: ProductProps;        // The product to display
  index: number;                // Position in the list (for animation timing)
  onQuickView?: () => void;     // Function to call when quick view button is clicked
}

const ProductCard = ({ product, index, onQuickView }: ProductCardProps) => {
  // Track whether the card is being hovered over
  const [isHovered, setIsHovered] = useState(false);
  
  // Function to determine the color of the availability indicator
  const getAvailabilityColor = (availability: string) => {
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

  return (
    // Main card container with animations
    <motion.div
      className="group relative rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col"
      // Start with card invisible and below final position
      initial={{ opacity: 0, y: 20 }}
      // Animate to full visibility at proper position
      animate={{ opacity: 1, y: 0 }}
      // Stagger animation based on card position in grid
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product image section */}
      <div className="relative overflow-hidden h-56">
        {/* Product image with zoom effect on hover */}
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
        />
        
        {/* Category badge in top left */}
        <div className="absolute top-4 left-4 z-10">
          <Badge variant="secondary" className="bg-white/90 backdrop-blur-sm text-construction-black font-medium">
            {product.category}
          </Badge>
        </div>
        
        {/* Availability indicator dot in top right */}
        <div 
          className={`absolute top-4 right-4 z-10 w-3 h-3 rounded-full ${getAvailabilityColor(product.availability)}`}
        >
          {/* Animated "ping" effect for the availability indicator */}
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"></span>
        </div>
        
        {/* Dark gradient overlay that appears on hover */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Action buttons that appear on hover */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 p-4 flex justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
          transition={{ duration: 0.3 }}
        >
          {/* Quick view button */}
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
          
          {/* Add to RFQ (Request For Quote) button */}
          <Button size="sm" variant="secondary" className="glass border-0 hover:bg-white/30">
            <ShoppingCart className="h-4 w-4 mr-1" /> Add to RFQ
          </Button>
        </motion.div>
      </div>
      
      {/* Product details section */}
      <div className="p-5 flex flex-col flex-grow">
        {/* Availability and rating */}
        <div className="flex items-center justify-between mb-2">
          <p className="text-sm text-construction-slate font-medium">{product.availability}</p>
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
            <span className="text-sm ml-1 text-construction-slate">{product.rating.toFixed(1)}</span>
          </div>
        </div>
        
        {/* Product name and description */}
        <h3 className="font-bold text-lg mb-1 text-construction-black">{product.name}</h3>
        <p className="text-sm text-construction-slate line-clamp-2 mb-4">{product.description}</p>
        
        {/* Pricing information at the bottom */}
        <div className="mt-auto">
          <p className="text-2xl font-bold text-construction-blue">${product.price.toLocaleString()}</p>
          <p className="text-xs text-construction-slate">per unit • Bulk discounts available</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;