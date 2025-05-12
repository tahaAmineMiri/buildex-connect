// Import React library
import React from 'react';

// Import common layout components
import NavBar from "@/components/common/layout/NavBar";
import Footer from "@/components/common/layout/Footer";

// Import buyer-specific dashboard components
import BuyerStats from '@/components/features/userDashboard/buyerDashboard/BuyerStats';
import OrderHistory from '@/components/features/userDashboard/buyerDashboard/OrderHistory';
import RecommendedProducts from '@/components/features/userDashboard/buyerDashboard/RecommendedProducts';

// Main Buyer Dashboard component
const BuyerDashboard = () => {
  return (
    // Main container with full height and light gray background
    <div className="min-h-screen bg-gray-50">
      {/* Navigation bar at the top */}
      <NavBar />
      
      {/* Main content area with padding */}
      <div className="container mx-auto px-4 pt-24 pb-16">
        {/* Dashboard title */}
        <h1 className="text-3xl font-bold mb-6">Buyer Dashboard</h1>
        
        {/* Stats section - Shows summary of buyer activity */}
        <BuyerStats />
        
        {/* Two-column layout that adjusts for screen size
            On large screens: Order History (2/3) | Recommended Products (1/3)
            On small screens: Stacks vertically */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Order History section - Takes 2/3 of the width on large screens */}
          <div className="lg:col-span-2">
            <OrderHistory />
          </div>
          
          {/* Recommended Products section - Takes 1/3 of the width on large screens */}
          <div>
            <RecommendedProducts />
          </div>
        </div>
      </div>
      
      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
};

// Export the component for use in other files
export default BuyerDashboard;