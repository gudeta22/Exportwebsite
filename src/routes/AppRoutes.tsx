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
    background: 'rgba(255, 255, 255, 0.8)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999
  }}>
    <div style={{
      width: '50px',
      height: '50px',
      border: '5px solid #f3f3f3',
      borderTop: '5px solid #3498db',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite'
    }} />
    <style>
      {`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
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

  return loading ? <LoadingSpinner /> : <Component />;
};

const AppRoutes = () => {
  const [isInitialLoading, setIsInitialLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInitialLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isInitialLoading) {
    return <LoadingSpinner />;
  }

  return (
    <Router>
      <Navbar />
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
      <Footer />
    </Router>
  );
};

export default AppRoutes;