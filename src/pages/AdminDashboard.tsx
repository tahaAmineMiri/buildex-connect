
import React, { useState } from "react";
import AdminNavigation from "@/components/features/admin/AdminNavigation";
import AdminManagement from "@/components/features/admin/AdminManagement";
import OrderManagement from "@/components/features/admin/OrderManagement";
import PaymentVerification from "@/components/features/admin/PaymentVerification";
import UserVerification from "@/components/features/admin/UserVerification";

// Define the possible admin sections
type AdminSection = "admins" | "orders" | "payments" | "users";

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState<AdminSection>("admins");

  // Render the active section content
  const renderSectionContent = () => {
    switch (activeSection) {
      case "admins":
        return <AdminManagement />;
      case "orders":
        return <OrderManagement />;
      case "payments":
        return <PaymentVerification />;
      case "users":
        return <UserVerification />;
      default:
        return <AdminManagement />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <h1 className="text-xl font-bold text-purple-700">InCon Admin</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="flex flex-col md:flex-row gap-6">
            <AdminNavigation 
              activeSection={activeSection}
              setActiveSection={setActiveSection}
            />
            <div className="flex-1">
              {renderSectionContent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
