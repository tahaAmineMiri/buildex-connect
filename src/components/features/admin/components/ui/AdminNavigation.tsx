// AdminNavigation.tsx
// This component provides the navigation sidebar for the admin dashboard.
// It allows switching between different admin sections like users, orders, etc.

import React from "react";
// Icon components
import { Users, ShoppingBag, CreditCard, User } from "lucide-react";

// Type definition for admin section identifiers
type AdminSection = "admins" | "orders" | "payments" | "users";

// Component props definition
interface AdminNavigationProps {
  activeSection: AdminSection;                    // Currently active section
  setActiveSection: (section: AdminSection) => void;  // Function to change active section
}

// The main AdminNavigation component
const AdminNavigation: React.FC<AdminNavigationProps> = ({
  activeSection,
  setActiveSection,
}) => {
  // Navigation items configuration with labels and icons
  const navItems = [
    {
      id: "admins" as AdminSection,
      label: "Admin Management",
      icon: <Users className="w-5 h-5" />,
    },
    {
      id: "orders" as AdminSection,
      label: "Order Management",
      icon: <ShoppingBag className="w-5 h-5" />,
    },
    {
      id: "payments" as AdminSection,
      label: "Payment Verification",
      icon: <CreditCard className="w-5 h-5" />,
    },
    {
      id: "users" as AdminSection,
      label: "User Verification",
      icon: <User className="w-5 h-5" />,
    },
  ];

  return (
    <div className="w-full md:w-64 bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Dashboard</h2>
      <nav className="space-y-1">
        {/* Map through navigation items and render buttons */}
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveSection(item.id)}
            // Apply different styles based on whether the item is active
            className={`flex items-center px-3 py-2 text-sm font-medium rounded-md w-full ${
              activeSection === item.id
                ? "bg-purple-100 text-purple-700"  // Active item style
                : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"  // Inactive item style
            }`}
          >
            <span className="mr-3">{item.icon}</span>
            {item.label}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default AdminNavigation;