import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import image1 from '../assets/500x400-01.jpg';
import image2 from '../assets/500x400-02.jpg';
import image3 from '../assets/6.png';
import image4 from '../assets/4.png';

const FeaturedProducts = () => {
  const [isVisible, setIsVisible] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const products = [
    { name: 'UV Reactive Holi Colours', image: image1, description: 'Add a neon glow to your Holi celebrations with our UV reactive powders.' },
    { name: 'Organic Holi Colours', image: image2, description: 'Eco-friendly, safe colors that bring vibrancy and joy to Holi.' },
    { name: 'Rangoli Colours', image: image3, description: 'Bright and durable glitter colours, perfect for intricate Rangoli designs.' },
    { name: 'Pure Kumkum', image: image4, description: 'Traditional, high-quality Kumkum for all occasions.' },
  ];

  const handleScroll = () => {
    const section = document.getElementById('featured-products');
    if (section) {
      const { top, bottom } = section.getBoundingClientRect();
      if (top < window.innerHeight && bottom >= 0) {
        setIsVisible(true);
        window.removeEventListener('scroll', handleScroll);
      }
    }
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="featured-products" className="bg-warmRose p-4 sm:p-8 font-nunito relative">
      <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-black text-center" style={{ fontFamily: 'The Seasons' }}>
        Our Products
      </h2>

      {/* Minimal Arrow buttons for mobile view only */}
      <button 
        onClick={scrollLeft} 
        className="sm:hidden absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-500 bg-opacity-70 text-white rounded-full p-1 shadow-md"
        style={{ zIndex: 10 }}
      >
        ◀
      </button>
      <button 
        onClick={scrollRight} 
        className="sm:hidden absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-500 bg-opacity-70 text-white rounded-full p-1 shadow-md"
        style={{ zIndex: 10 }}
      >
        ▶
      </button>

      {/* Flex container with horizontal scroll only on mobile */}
      <div
        ref={scrollContainerRef}
        className="flex space-x-3 sm:space-x-4 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 sm:overflow-visible"
      >
        {products.map((product, index) => (
          <motion.div
            key={index}
            className="bg-white p-2 sm:p-4 shadow-md min-w-[150px] sm:min-w-[220px] md:w-[260px] lg:w-[300px] flex-shrink-0 flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            {/* Image container with hover effect */}
            <div className="flex-grow flex items-center justify-center overflow-hidden relative group w-full h-[180px] sm:h-[180px] lg:h-[160px]">
              <img
                src={product.image}
                alt={product.name}
                className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105 w-full h-full"
              />
            </div>
            <h3 className="text-xs sm:text-md mt-2 text-black font-semibold text-left" style={{ fontFamily: 'The Seasons', fontWeight: 'normal' }}>
              {product.name}
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm mt-1 text-left" style={{ fontFamily: 'Poppins' }}>
              {product.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
