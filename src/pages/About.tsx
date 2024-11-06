import { useEffect, useState } from 'react';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import bgImage from '../assets/bg10.jpg'; // Import the background image
import Header from '../components/Header'; // Import the Header
import Footer from '../components/Footer'; // Import the Footer
import WelcomeSection from '../components/welcome';
import MissionVisionSection from '../components/Mission_vission';
import MeetTheTeam from '../components/team';

const AboutBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to handle scroll events
  const handleScroll = () => {
    const section = document.getElementById('about-banner');
    if (section) {
      const { top, bottom } = section.getBoundingClientRect();
      // Check if the section is in the viewport
      if (top < window.innerHeight && bottom >= 0) {
        setIsVisible(true);
        window.removeEventListener('scroll', handleScroll); // Remove event listener after visibility is set
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll); // Clean up the event listener
  }, []);

  return (
    <div>
      {/* Header Component */}
      <Header />

      {/* About Us Banner Section */}
      <section 
        id="about-banner" // Added ID for scroll detection
        className="relative h-80 md:h-96 lg:h-[500px] flex items-center justify-center bg-cover bg-center "
        style={{
           fontFamily: 'Poppins',
          backgroundImage: `url(${bgImage})`,
          backgroundAttachment: 'fixed' // This makes the background image fixed
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content on Banner */}
        <div className="relative z-10 text-center text-white">
          <motion.h1 
            className="text-xl md:text-3xl font-bold" 
            style={{ fontFamily: 'The Seasons' }} // Header in "The Seasons" font
            initial={{ opacity: 0, y: -20 }} // Initial state
            animate={isVisible ? { opacity: 1, y: 0 } : {}} // Animate to visible and original position when in view
            transition={{ duration: 0.8 }} // Transition duration
          >
          Who We Are

          </motion.h1>
          <motion.p 
            className="mt-2 text-sm md:text-lg max-w-2xl mx-auto" 
            style={{ fontFamily: 'Poppins' }} // Paragraph in Poppins font
            initial={{ opacity: 0, y: 20 }} // Initial state
            animate={isVisible ? { opacity: 1, y: 0 } : {}} // Animate to visible and original position when in view
            transition={{ duration: 0.8 }} // Transition duration
          >
            Crafted with heritage and delivered with excellence, we bring you premium Holi colours for your celebrations.
          </motion.p>
        </div>
      </section>

      {/* Additional Sections */}
      <WelcomeSection />
      <MissionVisionSection />
      <MeetTheTeam />

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default AboutBanner;
