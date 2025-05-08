
import React from 'react';
import BuyerStats from '@/components/features/buyerDashboard/BuyerStats';
import OrderHistory from '@/components/features/buyerDashboard/OrderHistory';
import RecommendedProducts from '@/components/features/buyerDashboard/RecommendedProducts';
import NavBar from "@/components/common/layout/NavBar";
import Footer from "@/components/common/layout/Footer";

const BuyerDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      <div className="container mx-auto px-4 pt-24 pb-16">
        <h1 className="text-3xl font-bold mb-6">Buyer Dashboard</h1>
        
        <BuyerStats />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <OrderHistory />
          </div>
          <div>
            <RecommendedProducts />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BuyerDashboard;
