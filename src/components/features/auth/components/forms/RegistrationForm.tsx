// src/components/features/auth/components/forms/RegistrationForm.tsx
import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, CheckCircle, ChevronRight, Building, User, FileText } from 'lucide-react';
import { Button } from '@/components/common/ui/button';
import { Input } from '@/components/common/ui/input';
import { Label } from '@/components/common/ui/label';
import { Textarea } from '@/components/common/ui/textarea';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/common/ui/select';
import { toast } from 'sonner';
import { registerBuyer, registerSeller } from '@/api/auth';
import { createCompany, CompanyRequest } from '@/api/company';

interface UserFormData {
  userEmail: string;
  userPassword: string;
  userFullName: string;
  userPosition: string;
  userBusinessPhone: string;
}

interface FormData {
  // Company Information
  companyName: string;
  registrationNumber: string;
  address: string;
  country: string;
  industry: string;
  taxId: string;
  
  // Representative Details
  fullName: string;
  position: string;
  email: string;
  phone: string;
  password: string;
  
  // Verification
  acceptTerms: boolean;
}

const RegistrationForm = () => {
  const [searchParams] = useSearchParams();
  const role = searchParams.get('role') || 'buyer';
  const navigate = useNavigate();
  
  const [currentStep, setCurrentStep] = useState(1);
  const [registrationComplete, setRegistrationComplete] = useState(false);
  
  const [formData, setFormData] = useState<FormData>({
    companyName: '',
    registrationNumber: '',
    address: '',
    country: '',
    industry: '',
    taxId: '',
    fullName: '',
    position: '',
    email: '',
    phone: '',
    password: '',
    acceptTerms: false
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Effect to handle redirection after successful registration
  useEffect(() => {
    let redirectTimer: NodeJS.Timeout;
    
    if (registrationComplete) {
      redirectTimer = setTimeout(() => {
        navigate('/auth');
      }, 2000); // Give more time for toast to be visible
    }
    
    return () => {
      if (redirectTimer) clearTimeout(redirectTimer);
    };
  }, [registrationComplete, navigate]);
  
  const updateFormData = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };
  
  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
      window.scrollTo(0, 0);
    }
  };
  
  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo(0, 0);
    }
  };
  
  // Map form data to company request format
  const mapToCompanyRequest = (): CompanyRequest => {
    return {
      companyName: formData.companyName,
      companyAddress: formData.address,
      companyIndustryCategory: formData.industry,
      companyCommercialRegister: formData.registrationNumber,
      companyFiscalIdentifier: formData.taxId || undefined
    };
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.acceptTerms) {
      toast.error("You must accept the terms and conditions");
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Step 1: Prepare user registration data
      const userData: UserFormData = {
        userEmail: formData.email,
        userPassword: formData.password,
        userFullName: formData.fullName,
        userPosition: formData.position,
        userBusinessPhone: formData.phone
      };
      
      // Register based on role but DON'T automatically log in
      let authResponse;
      try {
        if (role === 'buyer') {
          // Direct API call without using useAuth
          authResponse = await registerBuyer(userData);
        } else {
          // Direct API call without using useAuth
          authResponse = await registerSeller(userData);
        }
        
        console.log("Registration API response:", authResponse);
        
        // Check if we have a valid user ID in the response
        // In this case, the user ID is directly in the response (not nested in a user object)
        if (!authResponse || !authResponse.userId) {
          throw new Error("Invalid response from registration API");
        }
        
        // Step 2: Create company using the user ID
        try {
          const companyData = mapToCompanyRequest();
          // Use the userId directly from the response
          const companyResponse = await createCompany(authResponse.userId.toString(), companyData);
          console.log("Company creation response:", companyResponse);
          
          // Registration complete - show success toast
          toast.success(`${role === 'buyer' ? 'Buyer' : 'Seller'} registration successful! Please sign in to continue.`);
          setRegistrationComplete(true);
        } catch (companyError) {
          console.error("Company creation error:", companyError);
          toast.warning("User registered but company details couldn't be saved. You can update your profile after signing in.");
          setRegistrationComplete(true);
        }
      } catch (registrationError) {
        console.error("Registration error:", registrationError);
        toast.error("Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("Outer error:", error);
      toast.error("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const formVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.5
      }
    },
    exit: { 
      opacity: 0, 
      x: -20,
      transition: {
        duration: 0.3
      }
    }
  };
  
  // If registration is complete, show a success message while waiting for redirect
  if (registrationComplete) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-12 text-center">
        <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
        <h2 className="text-2xl font-bold mb-2">Registration Successful!</h2>
        <p className="mb-4">Your account has been created successfully.</p>
        <p className="text-construction-slate">You will be redirected to the sign-in page shortly...</p>
      </div>
    );
  }
  
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      {/* Header section with back button and step indicator */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="text-construction-slate hover:text-construction-black"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
          
          <div className="text-sm text-construction-slate">
            Step {currentStep} of 3
          </div>
        </div>
        
        {/* Title and description based on role */}
        <div className="mb-8">
          <h1 className="text-3xl font-display font-bold mb-2 text-construction-black">
            {role === 'buyer' ? 'Register as a Buyer' : 'Register as a Seller'}
          </h1>
          <p className="text-construction-slate">
            {role === 'buyer' 
              ? 'Create your buyer account to start sourcing construction materials for your projects.'
              : 'Set up your seller account to showcase and sell your construction products.'}
          </p>
        </div>
        
        {/* Progress Indicator */}
        <div className="relative mb-12">
          <div className="flex items-center justify-between mb-2">
            <div 
              className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium z-10 ${
                currentStep >= 1 ? 'bg-construction-blue text-white' : 'bg-construction-gray text-construction-slate'
              }`}
            >
              {currentStep > 1 ? <CheckCircle className="h-5 w-5" /> : <Building className="h-5 w-5" />}
            </div>
            <div 
              className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium z-10 ${
                currentStep >= 2 ? 'bg-construction-blue text-white' : 'bg-construction-gray text-construction-slate'
              }`}
            >
              {currentStep > 2 ? <CheckCircle className="h-5 w-5" /> : <User className="h-5 w-5" />}
            </div>
            <div 
              className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium z-10 ${
                currentStep >= 3 ? 'bg-construction-blue text-white' : 'bg-construction-gray text-construction-slate'
              }`}
            >
              <FileText className="h-5 w-5" />
            </div>
          </div>
          <div className="absolute top-5 left-5 right-5 h-[2px] bg-construction-gray/50"></div>
          <div 
            className="absolute top-5 left-5 h-[2px] bg-construction-blue transition-all duration-500"
            style={{ width: `${(currentStep - 1) * 50}%` }}
          ></div>
          <div className="flex justify-between text-xs mt-2 text-construction-slate">
            <span>Company Info</span>
            <span>Representative</span>
            <span>Verification</span>
          </div>
        </div>
      </div>
      
      <form onSubmit={handleSubmit}>
        {/* Step 1: Company Information */}
        {currentStep === 1 && (
          <motion.div
            key="step1"
            variants={formVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="space-y-6"
          >
            <div className="space-y-4">
              <div>
                <Label htmlFor="companyName">Company Name <span className="text-red-500">*</span></Label>
                <Input
                  id="companyName"
                  type="text"
                  required
                  placeholder="Enter your company name"
                  value={formData.companyName}
                  onChange={(e) => updateFormData('companyName', e.target.value)}
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="registrationNumber">Business Registration Number <span className="text-red-500">*</span></Label>
                <Input
                  id="registrationNumber"
                  type="text"
                  required
                  placeholder="Enter your registration number"
                  value={formData.registrationNumber}
                  onChange={(e) => updateFormData('registrationNumber', e.target.value)}
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="address">Company Address <span className="text-red-500">*</span></Label>
                <Textarea
                  id="address"
                  required
                  placeholder="Enter your complete address"
                  value={formData.address}
                  onChange={(e) => updateFormData('address', e.target.value)}
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="country">Country <span className="text-red-500">*</span></Label>
                <Select
                  value={formData.country}
                  onValueChange={(value) => updateFormData('country', value)}
                >
                  <SelectTrigger id="country" className="mt-1">
                    <SelectValue placeholder="Select your country" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="us">United States</SelectItem>
                    <SelectItem value="ca">Canada</SelectItem>
                    <SelectItem value="uk">United Kingdom</SelectItem>
                    <SelectItem value="au">Australia</SelectItem>
                    <SelectItem value="de">Germany</SelectItem>
                    <SelectItem value="fr">France</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="industry">Industry Category <span className="text-red-500">*</span></Label>
                <Select
                  value={formData.industry}
                  onValueChange={(value) => updateFormData('industry', value)}
                >
                  <SelectTrigger id="industry" className="mt-1">
                    <SelectValue placeholder="Select your industry" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="contractor">General Contractor</SelectItem>
                    <SelectItem value="supplier">Material Supplier</SelectItem>
                    <SelectItem value="manufacturer">Manufacturer</SelectItem>
                    <SelectItem value="wholesaler">Wholesaler</SelectItem>
                    <SelectItem value="engineering">Engineering Firm</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="taxId">Tax ID (if applicable)</Label>
                <Input
                  id="taxId"
                  type="text"
                  placeholder="Enter your tax ID"
                  value={formData.taxId}
                  onChange={(e) => updateFormData('taxId', e.target.value)}
                  className="mt-1"
                />
              </div>
            </div>
            
            <div className="pt-4">
              <Button 
                type="button" 
                onClick={nextStep}
                className="w-full bg-construction-blue hover:bg-construction-blue/90"
              >
                Continue
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        )}
        
        {/* Step 2: Representative Details */}
        {currentStep === 2 && (
          <motion.div
            key="step2"
            variants={formVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="space-y-6"
          >
            <div className="space-y-4">
              <div>
                <Label htmlFor="fullName">Full Name <span className="text-red-500">*</span></Label>
                <Input
                  id="fullName"
                  type="text"
                  required
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={(e) => updateFormData('fullName', e.target.value)}
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="position">Position in Company <span className="text-red-500">*</span></Label>
                <Input
                  id="position"
                  type="text"
                  required
                  placeholder="e.g. Procurement Manager, CEO"
                  value={formData.position}
                  onChange={(e) => updateFormData('position', e.target.value)}
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="email">Business Email <span className="text-red-500">*</span></Label>
                <Input
                  id="email"
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={(e) => updateFormData('email', e.target.value)}
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="phone">Business Phone <span className="text-red-500">*</span></Label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={(e) => updateFormData('phone', e.target.value)}
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="password">Password <span className="text-red-500">*</span></Label>
                <Input
                  id="password"
                  type="password"
                  required
                  placeholder="Create a secure password"
                  value={formData.password}
                  onChange={(e) => updateFormData('password', e.target.value)}
                  className="mt-1"
                />
                <p className="text-xs text-construction-slate mt-1">
                  Password must be at least 8 characters long
                </p>
              </div>
            </div>
            
            <div className="flex justify-between pt-4">
              <Button 
                type="button" 
                variant="outline" 
                onClick={prevStep}
                className="border-construction-blue text-construction-blue"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Button>
              <Button 
                type="button" 
                onClick={nextStep}
                className="bg-construction-blue hover:bg-construction-blue/90"
              >
                Continue
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        )}
        
        {/* Step 3: Verification and Terms */}
        {currentStep === 3 && (
          <motion.div
            key="step3"
            variants={formVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="space-y-6"
          >
            <div className="bg-construction-blue/5 rounded-xl p-6 border border-construction-blue/10">
              <h3 className="font-bold text-lg mb-4 text-construction-black">Verification Process</h3>
              <p className="text-sm text-construction-slate mb-4">
                To maintain the quality and security of our platform, all companies undergo a verification process:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start text-sm text-construction-slate">
                  <CheckCircle className="h-5 w-5 text-construction-blue mr-3 mt-0.5 flex-shrink-0" />
                  <span>Email verification - You'll receive a confirmation email after submission</span>
                </li>
                <li className="flex items-start text-sm text-construction-slate">
                  <CheckCircle className="h-5 w-5 text-construction-blue mr-3 mt-0.5 flex-shrink-0" />
                  <span>Business verification - We may contact you to verify your business details</span>
                </li>
                <li className="flex items-start text-sm text-construction-slate">
                  <CheckCircle className="h-5 w-5 text-construction-blue mr-3 mt-0.5 flex-shrink-0" />
                  <span>Document review - You may be asked to provide business license documentation</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-construction-gray">
              <label className="flex items-start cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.acceptTerms}
                  onChange={(e) => updateFormData('acceptTerms', e.target.checked)}
                  className="rounded text-construction-blue border-construction-gray focus:ring-construction-blue/25 mt-1"
                />
                <span className="ml-3 text-sm text-construction-slate">
                  I confirm that all information provided is accurate and I agree to Incom's{' '}
                  <a href="#" className="text-construction-blue hover:underline">Terms of Service</a> and{' '}
                  <a href="#" className="text-construction-blue hover:underline">Privacy Policy</a>.
                </span>
              </label>
            </div>
            
            <div className="flex justify-between pt-4">
              <Button 
                type="button" 
                variant="outline" 
                onClick={prevStep}
                className="border-construction-blue text-construction-blue"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Button>
              <Button 
                type="submit"
                disabled={!formData.acceptTerms || isSubmitting}
                className="bg-construction-blue hover:bg-construction-blue/90"
              >
                {isSubmitting ? "Registering..." : "Complete Registration"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        )}
      </form>
    </div>
  );
};

export default RegistrationForm;