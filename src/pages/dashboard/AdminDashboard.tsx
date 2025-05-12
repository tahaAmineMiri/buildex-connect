// Import React and useState hook for managing component state
import React, { useState } from "react";

// Import admin-specific components
import AdminNavigation from "@/components/features/admin/components/ui/AdminNavigation";
import AdminManagement from "@/components/features/admin/components/sections/AdminManagement";
import OrderManagement from "@/components/features/admin/components/sections/OrderManagement";
import PaymentVerification from "@/components/features/admin/components/sections/PaymentVerification";
import UserVerification from "@/components/features/admin/components/sections/UserVerification";

// Define a TypeScript type for the possible admin dashboard sections
// This helps with code completion and type checking
type AdminSection = "admins" | "orders" | "payments" | "users";

// Main Admin Dashboard component
const AdminDashboard = () => {
  // State to track which section is currently active
  // Default to "admins" section when the dashboard loads
  const [activeSection, setActiveSection] = useState<AdminSection>("admins");

  // Helper function to render the appropriate section content
  // based on which section is currently active
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
        return <AdminManagement />; // Fallback to AdminManagement
    }
  };

  return (
    // Main container with full height and light gray background
    <div className="min-h-screen bg-gray-100">
      {/* Header bar with purple branding */}
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

      {/* Main content area */}
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {/* Two-column layout that stacks on mobile */}
          <div className="flex flex-col md:flex-row gap-6">
            {/* Left sidebar navigation - controls which section is active */}
            <AdminNavigation 
              activeSection={activeSection}
              setActiveSection={setActiveSection}
            />
            
            {/* Main content area - shows the currently active section */}
            <div className="flex-1">
              {renderSectionContent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Export the component for use in other files
export default AdminDashboard;