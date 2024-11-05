import { useEffect, useState } from 'react';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import backgroundImage from '../assets/bg3.jpg'; // Use your background image

const PartnershipBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to handle scroll events
  const handleScroll = () => {
    const section = document.getElementById('partnership-banner');
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
    <section 
      id="partnership-banner" 
      className="relative h-96 flex items-center justify-center text-center overflow-hidden" // Increased height to h-96
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed', // Makes the background fixed
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50" /> {/* Gradient overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4" style={{ fontFamily: 'Nunito' }}>
        
        {/* Animated Heading */}
        <motion.h2 
          className="text-xl md:text-3xl font-bold mb-10" 
          style={{ fontFamily: 'The Seasons' }}
          initial={{ opacity: 0, y: -20 }} // Start with opacity 0 and slightly above
          animate={isVisible ? { opacity: 1, y: 0 } : {}} // Animate to full opacity and original position when in view
          transition={{ duration: 0.8 }} // Transition duration
        >
          PARTNERSHIP OPPORTUNITY
        </motion.h2>
        
        {/* Animated Button */}
        <motion.button 
          className="bg-white text-black px-6 py-2 shadow transition duration-300"
          initial={{ opacity: 0, scale: 0.8 }} // Start with opacity 0 and scaled down
          animate={isVisible ? { opacity: 1, scale: 1 } : {}} // Animate to full opacity and normal scale when in view
          transition={{ duration: 0.5, delay: 0.2 }} // Delay for staggered effect
        >
          Enquiry
        </motion.button>
      </div>
    </section>
  );
};

export default PartnershipBanner;
