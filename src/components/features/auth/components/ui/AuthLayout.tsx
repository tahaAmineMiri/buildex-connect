import { motion } from "framer-motion";

/**
 * Props for the AuthLayout component
 * @property children - React nodes to be wrapped by the layout
 */
interface AuthLayoutProps {
  children: React.ReactNode;
}

/**
 * AuthLayout Component
 * 
 * A simple wrapper for authentication-related pages
 * - Provides consistent styling for auth pages
 * - Adds fade-in animation for better user experience
 * - Ensures full viewport height
 */
const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen w-full">
      {/* Animated container with fade-in effect */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default AuthLayout;