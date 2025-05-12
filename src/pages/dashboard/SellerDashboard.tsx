// Import React library
import React from 'react';

// Import common layout components
import NavBar from "@/components/common/layout/NavBar";
import Footer from "@/components/common/layout/Footer";

// Import seller-specific dashboard components
import SellerStats from '@/components/features/userDashboard/sellerDashboard/SellerStats';
import OrdersReceived from '@/components/features/userDashboard/sellerDashboard/OrdersReceived';
import ProductStats from '@/components/features/userDashboard/sellerDashboard/ProductStats';

// Main Seller Dashboard component
const SellerDashboard = () => {
  return (
    // Main container with full height and light gray background
    <div className="min-h-screen bg-gray-50">
      {/* Navigation bar at the top */}
      <NavBar />
      
      {/* Main content area with padding */}
      <div className="container mx-auto px-4 pt-24 pb-16">
        {/* Dashboard title */}
        <h1 className="text-3xl font-bold mb-6">Seller Dashboard</h1>
        
        {/* Stats section - Shows summary of seller performance */}
        <SellerStats />
        
        {/* Two-column layout that adjusts for screen size
            On large screens: Orders Received (2/3) | Product Stats (1/3)
            On small screens: Stacks vertically */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Orders Received section - Takes 2/3 of the width on large screens */}
          <div className="lg:col-span-2">
            <OrdersReceived />
          </div>
          
          {/* Product Stats section - Takes 1/3 of the width on large screens */}
          <div>
            <ProductStats />
          </div>
        </div>
      </div>
      
      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
};

// Export the component for use in other files
export default SellerDashboard;