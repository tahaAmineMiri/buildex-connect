
import React from "react";
import { Users, ShoppingBag, CreditCard, User } from "lucide-react";

type AdminSection = "admins" | "orders" | "payments" | "users";

interface AdminNavigationProps {
  activeSection: AdminSection;
  setActiveSection: (section: AdminSection) => void;
}

const AdminNavigation: React.FC<AdminNavigationProps> = ({
  activeSection,
  setActiveSection,
}) => {
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
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveSection(item.id)}
            className={`flex items-center px-3 py-2 text-sm font-medium rounded-md w-full ${
              activeSection === item.id
                ? "bg-purple-100 text-purple-700"
                : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
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
