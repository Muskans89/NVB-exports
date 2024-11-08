import { useEffect, useState } from 'react';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import image1 from '../assets/color1.jpg'; // Import your images
import image2 from '../assets/colo2.jpg';
import image3 from '../assets/p3.jpg';
import image4 from '../assets/p4.jpeg';

const FeaturedProducts = () => {
  const [isVisible, setIsVisible] = useState(false); // State to control visibility for animation

  const products = [
    { name: 'Holi Colours', image: image1, description: 'Vibrant powders for the Holi festival.' },
    { name: 'Rangoli Colours', image: image2, description: 'Bright colours for beautiful rangoli designs.' },
    { name: 'Organic Holi Powders', image: image3, description: 'Eco-friendly powders for a safe Holi celebration.' },
    { name: 'Neon Colours', image: image4, description: 'Glow-in-the-dark colours for a vibrant party.' },
  ];

  // Function to handle scroll events
  const handleScroll = () => {
    const section = document.getElementById('featured-products');
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
    <section id="featured-products" className="bg-warmRose p-8 font-nunito overflow-x-auto">
      <h2 className="md:text-2xl text-xl font-bold mb-4 text-black text-center" style={{ fontFamily: 'The Seasons', fontWeight: 'normal' }}>
        Our Products
      </h2>

      {/* Flex container for horizontal scroll */}
      <div className="flex space-x-4">
        {/* Product Cards */}
        {products.map((product, index) => (
          <motion.div
            key={index}
            className="bg-white p-4 rounded-lg shadow-md min-w-[200px] transition-transform duration-300 flex flex-col"
            initial={{ opacity: 0, y: 20 }} // Initial state: invisible and slightly below
            animate={isVisible ? { opacity: 1, y: 0 } : {}} // Animate to visible and normal position when in view
            transition={{ duration: 0.5, delay: index * 0.1 }} // Delay based on index for staggered effect
          >
            <div className="flex-grow flex items-center justify-center bg-gray-200 overflow-hidden relative group">
              <img 
                src={product.image} 
                alt={product.name} 
                className="object-cover w-full h-48 md:h-60 transition-transform duration-300 ease-in-out group-hover:scale-100" // Adjusted height for desktop
              />
            </div>
            <h3 className="text-lg mt-2 text-black font-semibold text-left" style={{ fontFamily: 'The Seasons', fontWeight: 'normal' }}>
              {product.name}
            </h3>
            <p className="text-gray-600 text-sm mt-1 text-left" style={{ fontFamily: 'Poppins' }}>
              {product.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
