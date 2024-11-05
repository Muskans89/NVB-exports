import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const WhyChooseUs = () => {
  const [visibleItems, setVisibleItems] = useState(Array(5).fill(false)); // Initialize visibility state for each item

  const reasons = [
    {
      id: 1,
      icon: 'verified', // Google Material Icon name
      title: 'Generations of Expertise',
    },
    {
      id: 2,
      icon: 'eco', // Google Material Icon name
      title: '100% Natural Ingredients',
    },
    {
      id: 3,
      icon: 'public', // Changed to globe icon for Trusted Worldwide
      title: 'Trusted Worldwide',
    },
    {
      id: 4,
      icon: 'palette', // Icon for colour shades
      title: '200+ Colour Shades',
    },
    {
      id: 5,
      icon: 'inventory', // Icon for packaging
      title: 'Customizable Packaging',
    },
  ];

  // Function to handle scroll events
  const handleScroll = () => {
    const windowHeight = window.innerHeight;

    visibleItems.forEach((_, index) => {
      const element = document.getElementById(`reason-${index}`);
      if (element) { // Check if element is not null
        const { top, bottom } = element.getBoundingClientRect();

        // Check if the element is in the viewport
        if (top < windowHeight && bottom >= 0) {
          setVisibleItems((prev) => {
            const newVisibleItems = [...prev];
            newVisibleItems[index] = true; // Set the item as visible
            return newVisibleItems;
          });
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll); // Clean up the event listener
  }, []);

  return (
    <div id="why-choose-us" className="py-8 bg-red-500"> {/* Set background to red with consistent padding */}
      <h2 
        className="text-center text-xl md:text-2xl mb-4 text-white" 
        style={{ fontFamily: 'The Seasons' }} // Title in "The Seasons" font
      >
        Our Promise to You
      </h2>
      <div className="font-nunito max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
        {reasons.map((reason, index) => (
          <motion.div
            key={reason.id}
            id={`reason-${index}`} // Set an ID for each reason for scroll detection
            className="text-center p-4 sm:p-5 transition-transform duration-300"
            initial={{ opacity: 0, y: 20 }} // Initial state: invisible and slightly below
            animate={visibleItems[index] ? { opacity: 1, y: 0 } : {}} // Animate to visible and normal position when in view
            transition={{ duration: 0.5, delay: index * 0.1 }} // Delay based on index for staggered effect
          >
            {/* Icon in white */}
            <span className="material-icons text-4xl mb-2 text-white">{reason.icon}</span>
            {/* Title in white without bold styling */}
            <h3 className="text-base sm:text-lg mb-2 text-white" style={{ fontFamily: 'Poppins' }}>
              {reason.title}
            </h3>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
