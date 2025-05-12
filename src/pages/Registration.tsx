// Import common layout components
import NavBar from '../components/common/layout/NavBar';
import Footer from '../components/common/layout/Footer';

// Import the registration form component
import RegistrationForm from '../components/features/auth/components/forms/RegistrationForm';

// Main Registration page component
const Registration = () => {
  return (
    // Main container with full height and white background
    <div className="min-h-screen bg-white">
      {/* Navigation bar at the top */}
      <NavBar />
      
      {/* Main content area with padding on top
          The RegistrationForm will fill this space */}
      <div className="pt-24">
        <RegistrationForm />
      </div>
      
      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
};

// Export the component for use in other files
export default Registration;