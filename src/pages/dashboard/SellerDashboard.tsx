
import React from 'react';
import NavBar from "@/components/common/layout/NavBar";
import Footer from "@/components/common/layout/Footer";
import SellerStats from '@/components/features/sellerDashboard/SellerStats';
import OrdersReceived from '@/components/features/sellerDashboard/OrdersReceived';
import ProductStats from '@/components/features/sellerDashboard/ProductStats';

const SellerDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      <div className="container mx-auto px-4 pt-24 pb-16">
        <h1 className="text-3xl font-bold mb-6">Seller Dashboard</h1>
        
        <SellerStats />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <OrdersReceived />
          </div>
          <div>
            <ProductStats />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SellerDashboard;
