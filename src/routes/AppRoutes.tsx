import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Home from "../pages/Home";
import OurCompany from "../pages/OurCompany";
import Products from "../pages/Products";
import Contact from "../pages/Contact";
import Footer from "../Components/FooterComponents";
import Career from "../pages/Carrer";
import NotFound from "../pages/Notfound";
import { Suspense, useState, useEffect, ComponentType } from "react";

// Define the props type for PageWithLoading
interface PageWithLoadingProps {
  Component: ComponentType;
}

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
    <div style={{
      display: 'flex',
      gap: '10px'
    }}>
      {[1, 2, 3].map((dot) => (
        <div
          key={dot}
          style={{
            width: '15px',
            height: '15px',
            background: '#0891b2', // Changed to cyan-600
            borderRadius: '50%',
            animation: `pulse 1.2s ease-in-out ${dot * 0.2}s infinite`
          }}
        />
      ))}
    </div>
    <style>
      {`
        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.3);
            opacity: 0.7;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}
    </style>
  </div>
);

const PageWithLoading = ({ Component }: PageWithLoadingProps) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          <Component />
          <Footer />
        </div>
      )}
    </>
  );
};

const AppRoutes = () => {
  const [isInitialLoading, setIsInitialLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInitialLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Navbar />
      {isInitialLoading ? (
        <LoadingSpinner />
      ) : (
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route 
              path="/" 
              element={<PageWithLoading Component={Home} />} 
            />
            <Route 
              path="/ourcompany" 
              element={<PageWithLoading Component={OurCompany} />} 
            />
            <Route 
              path="/Products" 
              element={<PageWithLoading Component={Products} />} 
            />
            <Route 
              path="/contact" 
              element={<PageWithLoading Component={Contact} />} 
            />
            <Route 
              path="/careers" 
              element={<PageWithLoading Component={Career} />} 
            />
            <Route 
              path="*" 
              element={<PageWithLoading Component={NotFound} />} 
            />
          </Routes>
        </Suspense>
      )}
    </Router>
  );
};

export default AppRoutes;