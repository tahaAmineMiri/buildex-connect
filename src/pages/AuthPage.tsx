
import React from "react";
import AuthLayout from "@/components/features/auth/components/ui/AuthLayout";
import SignInForm from "@/components/features/auth/components/forms/SignInForm";
import { Card, CardContent } from "@/components/common/ui/card";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/common/ui/button";

const AuthPage = () => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate("/#role-selection");
  };

  return (
    <AuthLayout>
      <div className="container flex items-center justify-center h-screen px-4 mx-auto">
        <Card className="w-full max-w-md">
          <CardContent className="p-6">
            <div className="space-y-6">
              <div className="text-center">
                <h2 className="text-2xl font-bold">Sign In</h2>
                <p className="text-sm text-muted-foreground mt-1">
                  Enter your credentials to access your account
                </p>
              </div>
              <SignInForm />
              <div className="border-t pt-4">
                <p className="text-center text-sm text-muted-foreground mb-4">
                  Don't have an account yet?
                </p>
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

export default AuthPage;
