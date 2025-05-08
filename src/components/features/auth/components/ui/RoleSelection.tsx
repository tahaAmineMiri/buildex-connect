
import { useState } from "react";
import { motion, Variants } from "framer-motion";
import BuyerCard from "@/components/features/auth/components/forms/roleSelection/BuyerCard";
import SellerCard from "@/components/features/auth/components/forms/roleSelection/SellerCard";

const RoleSelection = () => {
  const [hoveredRole, setHoveredRole] = useState<"buyer" | "seller" | null>(null);

  const roleCardVariants: Variants = {
    initial: {
      scale: 1,
      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    },
    hover: {
      scale: 1.02,
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    },
    animate: {
      transition: {
        duration: 0.3,
      },
    },
  };

  const iconVariants: Variants = {
    initial: {
      rotate: 0,
    },
    hover: {
      rotate: 5,
      scale: 1.1,
    },
  };

  return (
    <div id="role-selection" className="bg-construction-blue/5 py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Role</h2>
          <p className="text-construction-slate max-w-2xl mx-auto">
            Select whether you want to buy or sell construction materials on our platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <BuyerCard
            roleCardVariants={roleCardVariants}
            iconVariants={iconVariants}
            hoveredRole={hoveredRole}
            setHoveredRole={setHoveredRole}
          />
          
          <SellerCard
            roleCardVariants={roleCardVariants}
            iconVariants={iconVariants}
            hoveredRole={hoveredRole}
            setHoveredRole={setHoveredRole}
          />
        </div>
      </div>
    </div>
  );
};

export default RoleSelection;
