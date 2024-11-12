import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import backgroundImage from '../assets/bg3.jpg';

const PartnershipBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate(); // Initialize navigate

  // Function to handle scroll events
  const handleScroll = () => {
    const section = document.getElementById('partnership-banner');
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
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to handle button click
  const handleEnquiryClick = () => {
    navigate('/contact'); // Navigate to the contact page
  };

  return (
    <section 
      id="partnership-banner" 
      className="relative h-96 flex items-center justify-center text-center overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Gradient overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4" style={{ fontFamily: 'Nunito' }}>
        
        {/* Animated Heading */}
        <motion.h2 
          className="text-xl md:text-2xl font-bold mb-10" 
          style={{ fontFamily: 'The Seasons' }}
          initial={{ opacity: 0, y: -20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          A Heritage of Colour for Celebrations Worldwide
        </motion.h2>
        
        {/* Animated Button with Hover and Click Effect */}
        <motion.button 
          onClick={handleEnquiryClick} // Click event to navigate
          className="bg-white text-black px-6 py-2 shadow transition duration-300 hover:bg-transparent hover:text-white hover:border-white border-2 border-transparent"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Enquiry
        </motion.button>
      </div>
    </section>
  );
};

export default PartnershipBanner;
