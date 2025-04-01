
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-construction-black text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link to="/" className="inline-block mb-6">
              <span className="text-2xl font-display font-bold flex items-center">
                <span className="text-construction-orange mr-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 21V10L12 5L21 10V21H3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 21V14H15V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                Incom
              </span>
            </Link>
            <p className="text-gray-400 mb-6 text-sm">
              The premier B2B marketplace connecting construction companies with verified suppliers worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors text-sm">About Us</Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-400 hover:text-white transition-colors text-sm">Careers</Link>
              </li>
              <li>
                <Link to="/press" className="text-gray-400 hover:text-white transition-colors text-sm">Press</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-white transition-colors text-sm">Blog</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">For Businesses</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/buyers" className="text-gray-400 hover:text-white transition-colors text-sm">For Buyers</Link>
              </li>
              <li>
                <Link to="/sellers" className="text-gray-400 hover:text-white transition-colors text-sm">For Sellers</Link>
              </li>
              <li>
                <Link to="/solutions" className="text-gray-400 hover:text-white transition-colors text-sm">Solutions</Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-400 hover:text-white transition-colors text-sm">Pricing</Link>
              </li>
              <li>
                <Link to="/integrations" className="text-gray-400 hover:text-white transition-colors text-sm">Integrations</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="text-construction-orange mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  123 Construction Avenue<br />
                  Building 4, Suite 200<br />
                  New York, NY 10001
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-construction-orange mr-3 flex-shrink-0" />
                <a href="tel:+12125551234" className="text-gray-400 hover:text-white transition-colors text-sm">+1 (212) 555-1234</a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-construction-orange mr-3 flex-shrink-0" />
                <a href="mailto:info@incom.com" className="text-gray-400 hover:text-white transition-colors text-sm">info@incom.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Incom. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/terms" className="text-gray-500 hover:text-white transition-colors text-sm">Terms of Service</Link>
              <Link to="/privacy" className="text-gray-500 hover:text-white transition-colors text-sm">Privacy Policy</Link>
              <Link to="/cookies" className="text-gray-500 hover:text-white transition-colors text-sm">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
