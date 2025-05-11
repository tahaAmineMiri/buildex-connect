// index.ts
// This file exports all components from the admin feature.
// This makes it easier to import these components from other parts of the application.

// Export forms
export { default as AdminForm } from './components/forms/AdminForm';

// Export UI components
export { default as AdminDetails } from './components/ui/AdminDetails';
export { default as AdminNavigation } from './components/ui/AdminNavigation';

// Export section components
export { default as AdminManagement } from './components/sections/AdminManagement';
export { default as OrderManagement } from './components/sections/OrderManagement';
export { default as PaymentVerification } from './components/sections/PaymentVerification';
export { default as UserVerification } from './components/sections/UserVerification';