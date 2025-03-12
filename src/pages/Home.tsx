import HeroSection from '../Components/HeroSection.tsx';
import Navbar from '../Components/Navbar.tsx';
import AboutComponent from '../Components/AboutComponents.tsx';
import DeviceCarousel from '../Components/DeviceCarousel.tsx';
import WhyWorkWithUs from '../Components/WhyWorkWithUs.tsx';

function Home() {
  return (
    <div>
        <Navbar />
        <HeroSection />
        <AboutComponent />
        <DeviceCarousel />
        <WhyWorkWithUs />
    </div>
  );
}

export default Home;