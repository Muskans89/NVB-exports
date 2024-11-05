import { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { FaPlus } from 'react-icons/fa'; // Import the Plus icon from react-icons
import { motion } from 'framer-motion'; // Import motion from framer-motion

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
    <section id="welcome-section" className="text-center py-8 px-4 md:px-8 font-nunito">
      {/* Stats Section */}
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
        {/* First Stat */}
        <motion.div
          className="bg-red-500 py-6 px-6 rounded-lg shadow-md w-full max-w-xs mx-auto"
          initial={{ opacity: 0, y: 20 }} // Initial state: invisible and slightly below
          animate={isVisible ? { opacity: 1, y: 0 } : {}} // Animate to visible and normal position when in view
          transition={{ duration: 0.5 }} // Transition duration
        >
          <h2 className="text-lg md:text-2xl font-semibold text-white" style={{ fontFamily: 'The Seasons' }}>
            <CountUp end={100} duration={3} />
            <FaPlus className="inline" /> {/* Using the Plus icon */}
          </h2>
          <p className="mt-2 text-xs md:text-sm text-white" style={{ fontFamily: 'Poppins' }}>
            Temple Flowers Processed
          </p>
        </motion.div>

        {/* Second Stat */}
        <motion.div
          className="bg-red-500 py-6 px-6 rounded-lg shadow-md w-full max-w-xs mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }} // Staggered effect
        >
          <h2 className="text-lg md:text-2xl font-semibold text-white" style={{ fontFamily: 'The Seasons' }}>
            <CountUp end={50000} duration={3} separator="," />
            <FaPlus className="inline" />
          </h2>
          <p className="mt-2 text-xs md:text-sm text-white" style={{ fontFamily: 'Poppins' }}>
            Products Shipped
          </p>
        </motion.div>

        {/* Third Stat */}
        <motion.div
          className="bg-red-500 py-6 px-6 rounded-lg shadow-md w-full max-w-xs mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-lg md:text-2xl font-semibold text-white" style={{ fontFamily: 'The Seasons' }}>
            <CountUp end={5000} duration={3} separator="," />
            <FaPlus className="inline" />
          </h2>
          <p className="mt-2 text-xs md:text-sm text-white" style={{ fontFamily: 'Poppins' }}>
            Happy Clients
          </p>
        </motion.div>

        {/* Fourth Stat */}
        <motion.div
          className="bg-red-500 py-6 px-6 rounded-lg shadow-md w-full max-w-xs mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-lg md:text-2xl font-semibold text-white" style={{ fontFamily: 'The Seasons' }}>
            <CountUp end={9} duration={3} decimals={1} />
            <FaPlus className="inline" />
          </h2>
          <p className="mt-2 text-xs md:text-sm text-white" style={{ fontFamily: 'Poppins' }}>
            Client Review Rating
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WelcomeSection;
