
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Menu, X, User, Bell } from 'lucide-react';
import { useAuth } from '@/providers';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAuthenticated, user } = useAuth();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleRegisterClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate("/#role-selection");
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-30 bg-white border-b border-gray-200">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex items-center justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold text-construction-blue">INCOM</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/products" className="text-gray-600 hover:text-construction-blue">
              Products
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-construction-blue">
              About
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-construction-blue">
              Contact
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <Button variant="ghost" size="icon">
                  <Bell className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <ShoppingCart className="h-5 w-5" />
                </Button>
                <Link to="/account">
                  <Button variant="ghost" size="icon">
                    <User className="h-5 w-5" />
                  </Button>
                </Link>
              </>
            ) : (
              <>
                <Link to="/auth">
                  <Button variant="ghost">Sign In</Button>
                </Link>
                <Button onClick={handleRegisterClick}>Register</Button>
              </>
            )}
          </div>

          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <Link
                to="/products"
                className="text-gray-600 hover:text-gray-900 px-3 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
              <Link
                to="/about"
                className="text-gray-600 hover:text-gray-900 px-3 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-gray-600 hover:text-gray-900 px-3 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>

              <div className="border-t border-gray-200 pt-4 mt-2">
                {isAuthenticated ? (
                  <>
                    <Link
                      to="/account"
                      className="flex items-center text-gray-600 hover:text-gray-900 px-3 py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <User className="h-5 w-5 mr-2" />
                      My Account
                    </Link>
                    <Link
                      to="/cart"
                      className="flex items-center text-gray-600 hover:text-gray-900 px-3 py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <ShoppingCart className="h-5 w-5 mr-2" />
                      Cart
                    </Link>
                  </>
                ) : (
                  <>
                    <Link
                      to="/auth"
                      className="block px-3 py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Button variant="ghost" className="w-full">
                        Sign In
                      </Button>
                    </Link>
                    <div className="block px-3 py-2">
                      <Button 
                        onClick={handleRegisterClick}
                        className="w-full"
                      >
                        Register
                      </Button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default NavBar;
