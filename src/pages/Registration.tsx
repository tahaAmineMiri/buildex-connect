
import NavBar from '../components/common/layout/NavBar';
import RegistrationForm from '../components/features/auth/components/forms/RegistrationForm';
import Footer from '../components/common/layout/Footer';

const Registration = () => {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <div className="pt-24">
        <RegistrationForm />
      </div>
      <Footer />
    </div>
  );
};

export default Registration;
