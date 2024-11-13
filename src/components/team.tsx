import { useEffect, useState } from 'react';
import teamImage1 from '../assets/nipun.jpg'; // Image for Nipun Baldota
import { motion } from 'framer-motion';

const FromTheDeskOfNipun = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to handle scroll events
  const handleScroll = () => {
    const section = document.getElementById('from-the-desk-of-nipun');
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
    <section id="from-the-desk-of-nipun" className="py-12 bg-gray-100 font-nunito">
      <div className="max-w-screen-lg mx-auto px-4 md:flex md:items-center">
        
        {/* Left Side: Image with Slide-In Animation */}
        <motion.div
          className="md:w-1/3 flex justify-center md:justify-start"
          initial={{ opacity: 0, x: -50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src={teamImage1}
            alt="Nipun Baldota"
            className="w-48 h-48 md:w-64 md:h-64 object-cover shadow-md"
          />
        </motion.div>

        {/* Right Side: Heading and Content with Staggered Animation */}
        <motion.div
          className="mt-8 md:mt-0 md:w-2/3 md:pl-8 text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <motion.h2
            className="text-lg md:text-2xl font-bold mb-4 text-left"
            style={{ fontFamily: 'The Seasons' }}
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            From the Desk of Nipun Baldota 
          </motion.h2>

          <motion.h3
            className="text-lg  text-red-500 mb-2 text-left"
            style={{ fontFamily: 'Poppins' }}
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
             Executive Director -  Exports & Marketing
          </motion.h3>
          <motion.p
            className="text-sm text-gray-500 mb-4 text-left"
            style={{ fontFamily: 'Poppins' }}
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
           
          </motion.p>
          <motion.p
            className="text-gray-600 text-sm md:text-base leading-relaxed text-left"
           
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            "NVB Exports is growing from the strong foundation of C.D. Baldota, a name that has been delivering quality across India. Carrying forward my grandfather’s vision, we are expanding from a family business into a global presence, bringing safe, vibrant Holi colours to celebrations around the world. Every product we send is carrying our commitment to purity, quality, and the tradition we cherish.

            As we continue reaching new markets, I’m excited to be sharing NVB’s colours with more communities and events, making every celebration brighter and more meaningful."
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default FromTheDeskOfNipun;
