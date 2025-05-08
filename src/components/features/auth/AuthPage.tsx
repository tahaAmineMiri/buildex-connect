
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Facebook, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/common/ui/button";
import { Input } from "@/components/common/ui/input";

const AuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleForm = () => setIsSignUp(!isSignUp);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", isSignUp ? "Sign Up" : "Sign In");
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      {/* Left side - Sign In */}
      <div className="bg-white p-8 md:p-12 flex flex-col justify-center items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md space-y-8"
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold">Sign in</h2>
            <p className="mt-2 text-gray-600">Welcome back!</p>
          </div>

          <div className="flex gap-4 justify-center">
            <Button variant="outline" size="icon">
              <Facebook className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Mail className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Linkedin className="w-4 h-4" />
            </Button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-gray-500">
                Or continue with
              </span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <Input type="email" placeholder="Email" required />
            <Input type="password" placeholder="Password" required />
            <Button type="submit" className="w-full">
              Sign in
            </Button>
          </form>
        </motion.div>
      </div>

      {/* Right side - Sign Up Overlay */}
      <div className="bg-construction-blue text-white p-8 md:p-12 flex flex-col justify-center items-center relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={isSignUp ? "signup" : "welcome"}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-md text-center space-y-6 relative z-10"
          >
            {isSignUp ? (
              <>
                <h2 className="text-3xl font-bold">Create Account</h2>
                <p className="text-construction-white/90">
                  Enter your personal details to start your journey with us
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    type="text"
                    placeholder="Full Name"
                    required
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
                  />
                  <Input
                    type="email"
                    placeholder="Email"
                    required
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
                  />
                  <Input
                    type="password"
                    placeholder="Password"
                    required
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
                  />
                  <Button
                    type="submit"
                    variant="outline"
                    className="w-full border-white text-white hover:bg-white hover:text-construction-blue"
                  >
                    Sign up
                  </Button>
                </form>
                <Button
                  variant="ghost"
                  className="text-white hover:bg-white/10"
                  onClick={toggleForm}
                >
                  Already have an account? Sign in
                </Button>
              </>
            ) : (
              <>
                <h2 className="text-3xl font-bold">Hello, Friend!</h2>
                <p className="text-construction-white/90">
                  Enter your personal details and start your journey with us
                </p>
                <Button
                  variant="outline"
                  className="border-white text-white font-medium hover:bg-white hover:text-construction-blue"
                  onClick={toggleForm}
                >
                  Sign up
                </Button>
              </>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Animated background shapes */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 45, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -top-1/2 -right-1/2 w-full h-full bg-construction-slate/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, -45, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-construction-blue/20 rounded-full blur-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
