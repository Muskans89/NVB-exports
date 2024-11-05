import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const AboutUsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const section = document.getElementById('about-us-section');
    if (section) {
      const { top, bottom } = section.getBoundingClientRect();
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
    <section 
      id="about-us-section" 
      className="relative py-0 overflow-hidden"
      style={{
        background: '#FFFFFF',
      }}
    >
      <div className="relative z-10 p-6 md:p-8 max-w-screen-lg mx-auto">
        <motion.h2 
          className="md:text-2xl text-md font-normal text-center mb-4 text-red-500" 
          style={{ fontFamily: 'The Seasons' }}
          initial={{ opacity: 0, y: 20 }} // Starting state
          animate={isVisible ? { opacity: 1, y: 0 } : {}} // Ending state
          transition={{ duration: 1 }} // Transition duration
        >
          A Heritage of Colour for Celebrations Worldwide
        </motion.h2>
       
        <motion.p 
          className="md:text-lg text-sm mb-4 text-center text-red-500" 
          style={{ fontFamily: 'Poppins' }}
          initial={{ opacity: 0, y: 20 }} // Starting state
          animate={isVisible ? { opacity: 1, y: 0 } : {}} // Ending state
          transition={{ duration: 1 }}
        >
          NVB Exports brings vibrant, safe, and eco-friendly colours to celebrations worldwide. With three generations of expertise, we craft natural colours for events across the globe—from Holi fests to theme parties. Trusted for quality and care, we’re here to add colours to life, making every moment brighter.
        </motion.p>
      </div>
    </section>
  );
};

export default AboutUsSection;
