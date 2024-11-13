import 'react-countup';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import CountUp from 'react-countup';

const WelcomeSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to handle scroll events
  const handleScroll = () => {
    const section = document.getElementById('welcome-section');
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
    <section id="welcome-section" className="text-center py-8 px-4 md:px-8 font-nunito bg-gray-100">
    {/* Stats Section */}
    <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
      {/* First Stat: Years in Business */}
      <motion.div
        className="bg-red-500 py-6 px-6 rounded-lg shadow-md w-full max-w-xs mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-lg md:text-2xl text-white font-semibold">
          <span style={{ fontFamily: 'Poppins', fontWeight: 'normal' }}>
            <CountUp end={45} duration={3} />+{/* Normal plus sign */}
          </span>
        </h2>
        <p className="mt-2 text-xs md:text-sm text-white" style={{ fontFamily: 'Poppins' }}>
          Years in Business
        </p>
      </motion.div>
  
      {/* Second Stat: Countries Exported */}
      <motion.div
        className="bg-red-500 py-6 px-6 rounded-lg shadow-md w-full max-w-xs mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <h2 className="text-lg md:text-2xl text-white font-semibold">
          <span style={{ fontFamily: 'Poppins', fontWeight: 'normal' }}>
            <CountUp end={20} duration={3} />+ {/* Normal plus sign */}
          </span>
        </h2>
        <p className="mt-2 text-xs md:text-sm text-white" style={{ fontFamily: 'Poppins' }}>
          Countries Exported
        </p>
      </motion.div>
  
      {/* Third Stat: Annual Production */}
      <motion.div
        className="bg-red-500 py-6 px-6 rounded-lg shadow-md w-full max-w-xs mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-lg md:text-2xl text-white font-bold">
          <span style={{ fontFamily: 'Poppins', fontWeight: 'normal' }}>
            <CountUp end={1000000} duration={3} /> kg+ {/* Normal plus sign */}
          </span>
        </h2>
        <p className="mt-2 text-xs md:text-sm text-white" style={{ fontFamily: 'Poppins' }}>
          Annual Production
        </p>
      </motion.div>
  
      {/* Fourth Stat: Trusted Customers */}
      <motion.div
        className="bg-red-500 py-6 px-6 rounded-lg shadow-md w-full max-w-xs mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h2 className="text-lg md:text-2xl text-white font-semibold">
          <span style={{ fontFamily: 'Poppins', fontWeight: 'normal' }}>
            <CountUp end={20} duration={3} separator="," />+ {/* Normal plus sign */}
          </span>
        </h2>
        <p className="mt-2 text-xs md:text-sm text-white" style={{ fontFamily: 'Poppins' }}>
          Shades
        </p>
      </motion.div>
    </div>
  </section>
  
  );
};

export default WelcomeSection;
