
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useAuth } from '@/services/auth/useAuth';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleAccountClick = () => {
    if (isAuthenticated) {
      navigate('/account');
    } else {
      navigate('/auth');
    }
  };

  const handleSignInClick = () => {
    navigate('/auth');
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-4 px-6 md:px-12',
        {
          'glass shadow-md py-3': isScrolled,
          'bg-transparent': !isScrolled
        }
      )}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="text-2xl font-display font-bold text-construction-blue flex items-center group"
          >
            <span className="inline-block mr-2 text-construction-orange group-hover:rotate-12 transition-transform duration-300">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 21V10L12 5L21 10V21H3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 21V14H15V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <span className="relative after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-0 after:bg-construction-orange after:transition-all after:duration-300 group-hover:after:w-full">
              Incom
            </span>
          </Link>

          {/* Desktop menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-construction-slate hover:text-construction-black transition-colors animated-underline"
            >
              Home
            </Link>
            <Link 
              to="/products" 
              className="text-construction-slate hover:text-construction-black transition-colors animated-underline"
            >
              Products
            </Link>
            <Link 
              to="/about" 
              className="text-construction-slate hover:text-construction-black transition-colors animated-underline"
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="text-construction-slate hover:text-construction-black transition-colors animated-underline"
            >
              Contact
            </Link>
          </nav>

          {/* Desktop actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="icon" 
              className="rounded-full hover:bg-construction-gray/50"
              onClick={handleAccountClick}
            >
              <User className="h-5 w-5 text-construction-slate" />
            </Button>
            <Button 
              variant="default" 
              className="bg-construction-blue hover:bg-construction-blue/90 text-white rounded-full"
              onClick={handleSignInClick}
            >
              Sign In
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden rounded-full"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-construction-slate" />
            ) : (
              <Menu className="h-6 w-6 text-construction-slate" />
            )}
          </Button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white absolute top-full left-0 right-0 p-6 shadow-lg rounded-b-2xl animate-slide-up">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-construction-slate hover:text-construction-black py-2 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/products" 
                className="text-construction-slate hover:text-construction-black py-2 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Products
              </Link>
              <Link 
                to="/about" 
                className="text-construction-slate hover:text-construction-black py-2 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className="text-construction-slate hover:text-construction-black py-2 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-4 flex items-center space-x-4">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex-1"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    handleAccountClick();
                  }}
                >
                  Account
                </Button>
                <Button 
                  variant="default" 
                  size="sm" 
                  className="flex-1 bg-construction-blue hover:bg-construction-blue/90"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    handleSignInClick();
                  }}
                >
                  Sign In
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default NavBar;
