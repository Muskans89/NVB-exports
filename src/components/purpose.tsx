import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import purposeImage from '../assets/aim.jpg';

const PurposeSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const section = document.getElementById('purpose-section');
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
    <div id="purpose-section" className="bg-cream py-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4">
        {/* Left Column: Purpose Text */}
        <motion.div 
          className="text-left" 
          initial={{ opacity: 0, x: -100 }} // Start from the left, invisible
          animate={isVisible ? { opacity: 1, x: 0 } : {}} // Slide in and fade in to full visibility
          transition={{ duration: 1 }} // Transition duration
        >
          <h2 
            className="text-lg md:text-2xl font-bold mb-4" 
            style={{ fontFamily: 'The Seasons', fontWeight: 'normal' }}
          >
           Why We Do What We Do
          </h2>
          <p className="text-gray-600 text-sm md:text-lg leading-relaxed" style={{ fontFamily: 'Poppins' }}>
            We’re driven by a passion to bring vibrant, safe, and eco-friendly colours to celebrations around the world. Rooted in generations of expertise and a dedication to quality, every colour we create embodies our commitment to unmatched standards. Trusted globally, we aim to make every celebration brighter, more joyful, and truly unforgettable.
          </p>
        </motion.div>

        {/* Right Column: Image */}
        <motion.div 
          className="flex justify-center md:justify-end" 
          initial={{ opacity: 0, x: 100 }} // Start from the right, invisible
          animate={isVisible ? { opacity: 1, x: 0 } : {}} // Slide in and fade in to full visibility
          transition={{ duration: 1 }} // Transition duration
        >
          <img
            src={purposeImage}
            alt="Purpose Image"
            className="shadow-lg w-full max-w-md" // Make the image responsive
          />
        </motion.div>
      </div>
    </div>
  );
};

export default PurposeSection;
