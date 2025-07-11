import HeroSection from '../Components/HeroSection.tsx';
import Navbar from '../Components/Navbar.tsx';
import AboutComponent from '../Components/AboutComponents.tsx';
import DeviceCarousel from '../Components/DeviceCarousel.tsx';
import WhyWorkWithUs from '../Components/WhyWorkWithUs.tsx';
import JobApplicationFormComponent from '../Components/JobApplicationForm.tsx';
import Processes from '../Components/Processes.tsx';

function Home() {
  return (
    <div>
        <Navbar />
        <HeroSection />
        <AboutComponent />
        <DeviceCarousel />
        <WhyWorkWithUs />
        <Processes />
        <JobApplicationFormComponent />
        
    </div>
  );
}

export default Home;