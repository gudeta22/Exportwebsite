import HeroSection from '../Components/HeroSection.tsx';
import Navbar from '../Components/Navbar.tsx';
import AboutComponent from '../Components/AboutComponents.tsx';
import DeviceCarousel from '../Components/DeviceCarousel.tsx';
import WhyWorkWithUs from '../Components/WhyWorkWithUs.tsx';
import JobApplicationFormComponent from '../Components/GetInTouch.tsx';
import Processes from '../Components/Processes.tsx';
import Partnerwith from '../Components/Partnerwith.tsx';
import CultureSection from '../Components/Culture.tsx';

function Home() {
  return (
    <div>
        <Navbar />
        <HeroSection />
        <AboutComponent />
        <DeviceCarousel />
        <Partnerwith />
        <WhyWorkWithUs />
       <CultureSection />

        <Processes />
        <JobApplicationFormComponent />
        
    </div>
  );
}

export default Home;