// Import necessary libraries and components
import React from "react";
import AuthLayout from "@/components/features/auth/components/ui/AuthLayout";
import SignInForm from "@/components/features/auth/components/forms/SignInForm";
import { Card, CardContent } from "@/components/common/ui/card";
import { useNavigate } from "react-router-dom"; // Used for navigation between pages
import { Button } from "@/components/common/ui/button";

// Main Authentication Page component
const AuthPage = () => {
  // Hook that allows navigation to different routes
  const navigate = useNavigate();

  // Function to handle the Register button click
  // Redirects user to the homepage with the role selection section
  const handleRegisterClick = () => {
    navigate("/#role-selection");
  };

  return (
    // AuthLayout provides the overall structure and styling for authentication pages
    <AuthLayout>
      {/* Centered container that takes full height */}
      <div className="container flex items-center justify-center h-screen px-4 mx-auto">
        {/* Card component to contain the sign-in form */}
        <Card className="w-full max-w-md">
          <CardContent className="p-6">
            <div className="space-y-6">
              {/* Title and description */}
              <div className="text-center">
                <h2 className="text-2xl font-bold">Sign In</h2>
                <p className="text-sm text-muted-foreground mt-1">
                  Enter your credentials to access your account
                </p>
              </div>
              
              {/* Sign-in form component */}
              <SignInForm />
              
              {/* Registration section with border separator */}
              <div className="border-t pt-4">
                <p className="text-center text-sm text-muted-foreground mb-4">
                  Don't have an account yet?
                </p>
                {/* Button that redirects to role selection */}
                <Button 
                  onClick={handleRegisterClick} 
                  variant="outline" 
                  className="w-full"
                >
                  Register as Buyer or Seller
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </AuthLayout>
  );
};

// Export the component for use in other files
export default AuthPage;