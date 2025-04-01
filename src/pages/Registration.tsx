
import NavBar from '../components/layout/NavBar';
import RegistrationForm from '../components/forms/RegistrationForm';
import Footer from '../components/layout/Footer';

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
