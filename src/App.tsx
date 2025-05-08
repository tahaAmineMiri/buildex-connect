
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AppProvider } from "@/providers";
import { ROUTES } from "@/config";

// Pages
import Index from "./pages/Index";
import AuthPage from "./pages/AuthPage";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Registration from "./pages/Registration";
import BuyerDashboard from "./pages/dashboard/BuyerDashboard";
import SellerDashboard from "./pages/dashboard/SellerDashboard";
import AdminDashboard from "./pages/dashboard/AdminDashboard";
import NotFound from "./pages/NotFound";

const App = () => (
  <AppProvider>
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<Index />} />
        <Route path={ROUTES.AUTH} element={<AuthPage />} />
        <Route path="/sign-in" element={<Navigate to={ROUTES.AUTH} replace />} />
        <Route path={ROUTES.PRODUCTS} element={<Products />} />
        <Route path={ROUTES.ABOUT} element={<About />} />
        <Route path={ROUTES.CONTACT} element={<Contact />} />
        <Route path={ROUTES.REGISTRATION} element={<Registration />} />
        <Route path={ROUTES.BUYER_DASHBOARD} element={<BuyerDashboard />} />
        <Route path={ROUTES.SELLER_DASHBOARD} element={<SellerDashboard />} />
        <Route path={ROUTES.ADMIN_DASHBOARD} element={<AdminDashboard />} />
        <Route path="/products/:id" element={<Products />} />
        <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </AppProvider>
);

export default App;
