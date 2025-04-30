
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/services/auth/useAuth";
import NavBar from "@/components/layout/NavBar";

const Account = () => {
  const { isAuthenticated, user, logout, isLoading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      navigate("/auth");
    }
  }, [isAuthenticated, navigate, isLoading]);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (!isAuthenticated || !user) {
    return null; // Will redirect in useEffect
  }

  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <div className="container mx-auto pt-32 px-4">
        <div className="max-w-lg mx-auto bg-white rounded-lg shadow-md p-8">
          <h1 className="text-2xl font-bold mb-6">My Account</h1>
          
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-500">Name</p>
              <p className="font-medium">{user.name}</p>
            </div>
            
            <div>
              <p className="text-sm text-gray-500">Email</p>
              <p className="font-medium">{user.email}</p>
            </div>
            
            <div className="pt-4">
              <Button
                variant="outline"
                className="w-full border-construction-blue text-construction-blue hover:bg-construction-blue/10"
              >
                Edit Profile
              </Button>
            </div>
            
            <div>
              <Button
                variant="default"
                className="w-full bg-construction-blue hover:bg-construction-blue/90"
                onClick={handleLogout}
              >
                Logout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
