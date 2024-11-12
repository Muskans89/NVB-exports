import { useEffect, useState } from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import { motion } from 'framer-motion';

const MissionVision = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to handle scroll events
  const handleScroll = () => {
    const section = document.getElementById('mission-vision');
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
    <section id="mission-vision" className="py-12 bg-white ">
      <div className="max-w-screen-lg mx-auto px-4">
        {/* About Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} // Initial state: invisible and slightly below
          animate={isVisible ? { opacity: 1, y: 0 } : {}} // Animate to visible and normal position when in view
          transition={{ duration: 0.5 }} // Transition duration
          className="mb-12"
        >
          <div className="flex items-center mb-4">
            <FaQuoteLeft className="text-red-500" />
            <h3 className="ml-4 text-xl md:text-2xl font-bold text-red-500" style={{ fontFamily: 'The Seasons' }}>
              ABOUT US
            </h3>
          </div>
          <div className="border-l-4 border-red-500 pl-6">
            <p className="text-base md:text-lg text-gray-700" style={{ fontFamily: 'Poppins' }}>
            Holi, India’s iconic festival of colours, has captivated hearts around the world, inspiring celebrations at global events, music festivals, and themed parties. At NVB Exports, we recognized this growing enthusiasm and made it our mission to deliver the authentic Holi experience worldwide. For three generations, our family has crafted safe, eco-friendly colours using 100% natural corn starch and organic food-grade dyes. Today, we proudly bring the energy of Indian festivities to international markets, ensuring each celebration is vibrant, safe, and true to tradition.

            </p>
          </div>
        </motion.div>

        {/* Vision Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center mb-4">
            <FaQuoteLeft className="text-red-500" />
            <h3 className="ml-4 text-xl md:text-2xl font-bold text-red-500" style={{ fontFamily: 'The Seasons' }}>
              VISION
            </h3>
          </div>
          <div className="border-l-4 border-red-500 pl-6">
            <p className="text-base md:text-lg text-gray-700" style={{ fontFamily: 'Poppins' }}>
            Our vision is to be the global leader in high-quality, eco-friendly celebration colours, inspiring joy and connection through vibrant, safe products. We aim to expand our reach, making Indian festive traditions a part of global celebrations while upholding the highest standards of quality, sustainability, and customer satisfaction. NVB Exports envisions a world coloured with unity and shared happiness.
            </p>
          </div>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center mb-4">
            <FaQuoteLeft className="text-red-500" />
            <h3 className="ml-4 text-xl md:text-2xl font-bold text-red-500" style={{ fontFamily: 'The Seasons' }}>
              MISSION
            </h3>
          </div>
          <div className="border-l-4 border-red-500 pl-6">
            <p className="text-base md:text-lg text-gray-700"  style={{ fontFamily: 'Poppins' }}>
            We aim to spread the joy of Indian festivals worldwide by providing safe, eco-friendly Holi colours of the highest quality. Our commitment is to enhance global celebrations with vibrant, authentic products crafted with care, ensuring safety, consistency, and sustainability in every shade. At NVB Exports, we’re dedicated to adding colours to life in meaningful, joyous ways.

            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionVision;
