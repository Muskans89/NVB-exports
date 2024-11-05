import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import bg1 from '../assets/bg1.jpg';
import bg2 from '../assets/bg2.jpg';
import bg3 from '../assets/img6.png';
import bg4 from '../assets/bg4.jpg';

const FourColumnSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to handle scroll events
  const handleScroll = () => {
    const section = document.getElementById('four-column-section');
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
    <section id="four-column-section" className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-0 font-nunito">
      {/* First Column: Theme Parties */}
      <motion.div
        className="relative group overflow-hidden"
        initial={{ opacity: 0, y: 20 }} // Start state
        animate={isVisible ? { opacity: 1, y: 0 } : {}} // End state
        transition={{ duration: 0.5 }} // Transition duration
      >
        <img
          src={bg4}
          alt="Theme Parties"
          className="w-full h-[200px] md:h-[300px] lg:h-[350px] object-cover transition-all duration-300 group-hover:brightness-110"
        />
        <div className="absolute inset-0 bg-black opacity-50 transition-opacity duration-300 group-hover:opacity-0"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-2 md:px-4">
          <h2 
            className="text-base md:text-lg lg:text-2xl font-bold mb-2 md:mb-4" 
            style={{ fontFamily: 'The Seasons' }} // Using The Seasons font for headings
          >
            Theme Parties
          </h2>
        </div>
      </motion.div>

      {/* Second Column: Holi Events */}
      <motion.div
        className="relative group overflow-hidden"
        initial={{ opacity: 0, y: 20 }} // Start state
        animate={isVisible ? { opacity: 1, y: 0 } : {}} // End state
        transition={{ duration: 0.5, delay: 0.1 }} // Transition duration with a delay
      >
        <img
          src={bg1}
          alt="Holi Events"
          className="w-full h-[200px] md:h-[300px] lg:h-[350px] object-cover transition-all duration-300 group-hover:brightness-110"
        />
        <div className="absolute inset-0 bg-black opacity-50 transition-opacity duration-300 group-hover:opacity-0"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-2 md:px-4">
          <h2 
            className="text-base md:text-lg lg:text-2xl font-bold mb-2 md:mb-4" 
            style={{ fontFamily: 'The Seasons' }} // Using The Seasons font for headings
          >
            Holi Events
          </h2>
        </div>
      </motion.div>

      {/* Third Column: Corporate Events */}
      <motion.div
        className="relative group overflow-hidden"
        initial={{ opacity: 0, y: 20 }} // Start state
        animate={isVisible ? { opacity: 1, y: 0 } : {}} // End state
        transition={{ duration: 0.5, delay: 0.2 }} // Transition duration with a delay
      >
        <img
          src={bg2}
          alt="Corporate Events"
          className="w-full h-[200px] md:h-[300px] lg:h-[350px] object-cover transition-all duration-300 group-hover:brightness-110"
        />
        <div className="absolute inset-0 bg-black opacity-50 transition-opacity duration-300 group-hover:opacity-0"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-2 md:px-4">
          <h2 
            className="text-base md:text-lg lg:text-2xl font-bold mb-2 md:mb-4" 
            style={{ fontFamily: 'The Seasons' }} // Using The Seasons font for headings
          >
            Colorful Carnivals
          </h2>
        </div>
      </motion.div>

      {/* Fourth Column: Festivals */}
      <motion.div
        className="relative group overflow-hidden"
        initial={{ opacity: 0, y: 20 }} // Start state
        animate={isVisible ? { opacity: 1, y: 0 } : {}} // End state
        transition={{ duration: 0.5, delay: 0.3 }} // Transition duration with a delay
      >
        <img
          src={bg3}
          alt="Festivals"
          className="w-full h-[200px] md:h-[300px] lg:h-[350px] object-cover transition-all duration-300 group-hover:brightness-110"
        />
        <div className="absolute inset-0 bg-black opacity-50 transition-opacity duration-300 group-hover:opacity-0"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-2 md:px-4">
          <h2 
            className="text-base md:text-lg lg:text-2xl font-bold mb-2 md:mb-4" 
            style={{ fontFamily: 'The Seasons' }} // Using The Seasons font for headings
          >
            Festivals
          </h2>
        </div>
      </motion.div>
    </section>
  );
};

export default FourColumnSection;
