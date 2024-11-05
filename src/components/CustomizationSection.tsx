import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import p1 from '../assets/pouch.png'; // Image for Pouches
import p2 from '../assets/squeeze-bottle.jpg'; // Image for Squeeze Bottles
import p3 from '../assets/bulk-box.jpg'; // Image for Bulk Boxes
import ppBagImage from '../assets/ppbag.webp'; // Image for PP Bag

const products = [
  {
    id: 1,
    image: p1,
    name: 'Pouches',
    details: (
      <div>
        <p className="font-semibold">Available in Sizes:</p>
        <p className="text-white">
          10gms, 20gms, 40gms, 50gms, 80gms, 100gms, 200gms, 250gms, 500gms, 1 kg.
        </p>
        <p className="mt-2 text-sm text-white">Note: Pouches would be packed and properly sealed in Corrugated Boxes.</p>
      </div>
    ),
  },
  {
    id: 2,
    image: p2,
    name: 'Squeeze Bottles',
    details: (
      <div>
        <p className="font-semibold">Our squeeze bottles are available in 350 gm size. We can customize and make the size you require.</p>
        <p className="mt-2 text-sm text-white">We can customize the squeeze bottle with your logo on it.</p>
      </div>
    ),
  },
  {
    id: 3,
    image: p3,
    name: 'Bulk Boxes',
    details: (
      <div>
        <p className="font-semibold">Bulk Boxes available in Sizes:</p>
        <p className="text-white">5kg, 10kg, 20kg, 25kg, 50kg.</p>
      </div>
    ),
  },
  {
    id: 4,
    image: ppBagImage,
    name: 'PP Bags',
    details: (
      <div>
        <p className="font-semibold">PP Bags available in Sizes:</p>
        <p className="text-white">Available in various sizes as per requirement.</p>
      </div>
    ),
  },
];

const ProductSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false); // State to control visibility for animation

  const handleScroll = () => {
    const section = document.getElementById('product-section');
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
    <section id="product-section" className="py-5 bg-red-500">
      <h2 className="md:text-2xl text-white text-center p-6" style={{ fontFamily: 'The Seasons' }}>
        Customization
      </h2>
      <div className="max-w-screen-xl mx-auto">
        {products.map((product) => (
          <motion.div
            key={product.id}
            className="flex flex-col md:flex-row mb-6 transition-transform duration-300"
            initial={{ opacity: 0, y: 20 }} // Initial state for animation
            animate={isVisible ? { opacity: 1, y: 0 } : {}} // Animate to visible and normal position when in view
            transition={{ duration: 0.5 }} // Duration of animation
          >
            <div className="flex-shrink-0 w-full md:w-1/2 p-4">
              <img
                src={product.image}
                alt={`Product ${product.id}`}
                className="w-full h-64 object-contain rounded-lg"
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
              <h3 className="text-lg text-white font-semibold" style={{ fontFamily: 'Poppins' }}>
                {product.name}
              </h3>
              <div className="mt-2 text-white" style={{ fontFamily: 'Poppins' }}>
                {product.details}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
