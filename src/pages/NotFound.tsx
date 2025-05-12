// Import necessary hooks from React Router
import { useLocation } from "react-router-dom"; // Used to access current URL path
import { useEffect } from "react"; // Used for side effects on component mount

// 404 Not Found page component
const NotFound = () => {
  // Get the current URL location
  const location = useLocation();

  // Log an error when this component mounts
  // This helps track which non-existent routes users are trying to access
  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]); // Only run this effect if the pathname changes

  return (
    // Centered container with full height and light gray background
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        {/* Large 404 error code */}
        <h1 className="text-4xl font-bold mb-4">404</h1>
        
        {/* Error message */}
        <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
        
        {/* Link back to the homepage */}
        <a href="/" className="text-blue-500 hover:text-blue-700 underline">
          Return to Home
        </a>
      </div>
    </div>
  );
};

// Export the component for use in other files
export default NotFound;