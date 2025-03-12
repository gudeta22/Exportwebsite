import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Home from "../pages/Home";
import OurCompany from "../pages/OurCompany";
import Products from "../pages/Products";
import Contact from "../pages/Contact";
import NotFound from "../pages/Notfound";


const AppRoutes = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-company" element={<OurCompany />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        
        {/* Fallback for undefined routes */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
