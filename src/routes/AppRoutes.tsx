import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from "react-router-dom";
import Navbar from "../Components/Navbar";
import Home from "../pages/Home";
import OurCompany from "../pages/OurCompany";
import Products from "../pages/Products";
import Contact from "../pages/Contact";
import Footer from "../Components/FooterComponents";
import Career from "../pages/Carrer";
import NotFound from "../pages/Notfound";
import Blog from "../pages/Blog";
import { useEffect, useState } from "react";

// Spinner component
const LoadingSpinner = () => (
  <div style={{
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(255, 255, 255, 0.9)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999
  }}>
    <div style={{ display: 'flex', gap: '10px' }}>
      {[1, 2, 3].map((dot) => (
        <div
          key={dot}
          style={{
            width: '15px',
            height: '15px',
            background: '#0891b2',
            borderRadius: '50%',
            animation: `pulse 1.2s ease-in-out ${dot * 0.2}s infinite`
          }}
        />
      ))}
    </div>
    <style>
      {`
        @keyframes pulse {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.3); opacity: 0.7; }
          100% { transform: scale(1); opacity: 1; }
        }
      `}
    </style>
  </div>
);

// Wrap pages with loading effect on navigation
const PageWrapper = ({ Component }: { Component: React.ComponentType }) => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 500); // Delay for UX
    return () => clearTimeout(timeout);
  }, [location.pathname]); // Triggers when the route changes

  return (
    <>
      {loading ? <LoadingSpinner /> : (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          <Component />
          <Footer />
        </div>
      )}
    </>
  );
};

const AppRoutes = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<PageWrapper Component={Home} />} />
        <Route path="/ourcompany" element={<PageWrapper Component={OurCompany} />} />
        <Route path="/products" element={<PageWrapper Component={Products} />} />
        <Route path="/contact" element={<PageWrapper Component={Contact} />} />
        <Route path="/blog" element={<PageWrapper Component={Blog} />} />
        <Route path="/careers" element={<PageWrapper Component={Career} />} />
        <Route path="*" element={<PageWrapper Component={NotFound} />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
