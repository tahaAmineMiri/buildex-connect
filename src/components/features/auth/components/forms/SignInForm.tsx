import { Button } from "@/components/common/ui/button";
import { Input } from "@/components/common/ui/input";
import { Label } from "@/components/common/ui/label";
import { useState } from "react";
import { useAuth } from "@/providers";
import { useNavigate } from "react-router-dom";
import { toast } from "@/hooks";

/**
 * SignInForm Component
 * 
 * A simple login form that handles user authentication
 * - Collects email and password
 * - Handles form submission with loading state
 * - Shows success/error notifications
 * - Redirects to home on successful login
 */
const SignInForm = () => {
  // State for form fields and loading status
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  // Access authentication functions from context
  const { login } = useAuth();
  
  // For navigation after successful login
  const navigate = useNavigate();

  /**
   * Handle form submission
   * - Prevents default form behavior
   * - Sets loading state during authentication
   * - Shows success/error toasts
   * - Redirects on success
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Attempt to log in with provided credentials
      await login(email, password);
      
      // Show success message
      toast({
        title: "Success",
        description: "You have successfully signed in",
      });
      
      // Redirect to home page
      navigate("/");
    } catch (error) {
      // Show error message if login fails
      toast({
        title: "Error",
        description: "Invalid email or password",
        variant: "destructive",
      });
    } finally {
      // Reset loading state whether login succeeds or fails
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Email Input Field */}
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="you@example.com"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      
      {/* Password Input Field */}
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          placeholder="••••••••"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      
      {/* Submit Button - shows loading state */}
      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? "Signing In..." : "Sign In"}
      </Button>
    </form>
  );
};

export default SignInForm;