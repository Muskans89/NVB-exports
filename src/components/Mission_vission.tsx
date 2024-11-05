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
    <section id="mission-vision" className="py-12 bg-white font-nunito">
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
            <p className="text-base md:text-lg text-gray-700">
              NVB Exports is a family-run Holi Colour Manufacturing business, founded in 1965. Now in its third generation, the company has over 4 years of experience in exporting products worldwide. We offer a range of colours, from small custom orders to bulk quantities, ensuring the best packaging, shipping, and delivery experience.
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
            <p className="text-base md:text-lg text-gray-700">
              Our vision is to bring joy to everyone who uses our colours by providing vibrant, fun, and safe products. We constantly innovate to ensure the best customer experience while maintaining a commitment to quality and timely delivery.
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
            <p className="text-base md:text-lg text-gray-700">
              NVB Exports is committed to manufacturing high-quality, vibrant Holi colours from natural, safe, and non-toxic ingredients. Our team ensures timely delivery, competitive pricing, and customer satisfaction through clear communication and superior service.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionVision;
