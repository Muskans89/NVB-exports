import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import bgImage from '../assets/bg10.png';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WelcomeSection from '../components/welcome';
import MissionVisionSection from '../components/Mission_vission';
import MeetTheTeam from '../components/team';
import HoliCursorEffect from '../components/holicoloreffect';

const AboutBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to handle scroll events
  const handleScroll = () => {
    const section = document.getElementById('about-banner');
    if (section) {
      const { top, bottom } = section.getBoundingClientRect();
      if (top < window.innerHeight && bottom >= 0) {
        setIsVisible(true);
        window.removeEventListener('scroll', handleScroll);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      {/* Header Component */}
      <Header />

      {/* About Us Banner Section */}
      <section 
        id="about-banner"
        className="relative h-[70vh] md:h-[80vh] lg:h-[90vh] flex items-center justify-center"
        style={{
          fontFamily: 'Poppins',
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover', // Ensures the image covers the entire area without distortion
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed' // Keeps the image fixed during scroll
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content on Banner */}
        <div className="relative z-10 text-center text-white">
          <motion.h1 
            className="text-xl md:text-3xl font-bold" 
            style={{ fontFamily: 'The Seasons' }}
            initial={{ opacity: 0, y: -20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            The NVB Story 

          </motion.h1>
          <motion.p 
            className="mt-2 text-sm md:text-lg max-w-2xl mx-auto" 
            style={{ fontFamily: 'Poppins' }}
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
         
Rooted in tradition and perfected with care, we deliver premium Holi colours to make every celebration unforgettable.
          </motion.p>
        </div>
      </section>

      {/* Additional Sections */}
      <WelcomeSection />
      <MissionVisionSection />
      <MeetTheTeam />
      <HoliCursorEffect />

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default AboutBanner;
