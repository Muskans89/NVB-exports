import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const NeonShades = () => {
  const [isVisible, setIsVisible] = useState(false); // State to control visibility for animation

  const colors = [
    { name: 'Red', color: '#FF0000' },
    { name: 'Magenta', color: '#FF00FF' },
    { name: 'Sky Blue', color: '#87CEEB' },
    { name: 'Royal Blue', color: '#4169E1' }, 
    { name: 'Violet', color: '#8A2BE2' },
    { name: 'Chrome', color: '#D1D1D1' },
    { name: 'Pink', color: '#FFC0CB' },
    { name: 'Yellow', color: '#FFF700' },
    { name: 'Purple', color: '#800080' },
    { name: 'Green', color: '#008000' },
    { name: 'Orange', color: '#FFA500' },
  ];

  // Function to handle scroll events
  const handleScroll = () => {
    const section = document.getElementById('neon-shades');
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
    <section id="neon-shades" className="bg-gray-100 p-8 font-nunito">
      <h2 className="font-semibold md:text-2xl text-xl mb-4 text-black text-center" style={{ fontFamily: 'The Seasons'}}>
        Neon Shades
      </h2>
      <div className="overflow-x-auto">
        <div className="flex space-x-4 min-w-[600px]">
          {colors.map((color, index) => (
            <motion.div
              key={index}
              className="relative w-36 h-48 flex items-center justify-center text-center font-bold text-sm md:text-lg"
              style={{ backgroundColor: color.color }} // Set the background color directly
              initial={{ opacity: 0, y: 20 }} // Start from slightly below and invisible
              animate={isVisible ? { opacity: 1, y: 0 } : {}} // Animate to visible and normal position when in view
              transition={{ duration: 0.5, delay: index * 0.1 }} // Delay based on index for staggered effect
            >
              <span className="text-white sm:block hidden">{color.name}</span> {/* Hide text on mobile */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NeonShades;
