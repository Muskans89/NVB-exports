import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HoliCursorEffect from '../components/holicoloreffect';

// Importing images for each section
import image1 from '../assets/bg1.jpg';
import image3 from '../assets/neon2.jpg';
import image4 from '../assets/bg4.jpg';
import image5 from '../assets/barsana (1).jpg';
import image7 from '../assets/bg2.jpg';
import image10 from '../assets/barsana2.jpg';

// Importing factory images based on your provided filenames
import factory1 from '../assets/factory1.jpg';
import factory2 from '../assets/factory2.jpg';
import factory3 from '../assets/factory3 (1).jpeg';
import factory4 from '../assets/factory4.jpg';
import factory5 from '../assets/factory3 (2).jpeg';

// Importing product images (assuming you've already imported the images)
import product1 from '../assets/500x400-01.jpg';
import product2 from '../assets/500x400-02.jpg';
import product3 from '../assets/4.png';
import product4 from '../assets/pouch.png';
import product5 from '../assets/p1.jpg';

// Grouping images by category with no duplicates
const eventImages = [image1, image3, image4, image5, image7, image10];
const factoryImages = [factory1, factory2, factory3, factory4, factory5];
const productImages = [product1, product2, product3, product4, product5]; // Add your actual product image paths here

const Gallery = () => {
  return (
    <div className="font-nunito">
      {/* Header Component */}
      <Header />

    
      {/* Factory Images Section */}
      <section className="py-10 px-6 md:px-8 bg-gradient-to-r from-blue-100 to-green-100">
        <h2 className="md:text-2xl text:xl font-bold mb-6 text-center" style={{ fontFamily: 'The Seasons' }}>Where it begins</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {factoryImages.map((image, index) => (
            <motion.div
              key={index}
              className={`relative overflow-hidden shadow-lg ${
                index === 0 ? 'col-span-2' : 'col-span-1'
              } ${index === 0 ? 'row-span-1' : 'row-span-2'}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img
                src={image}
                alt={`Factory Image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Product Images Section */}
      <section className="py-10 px-6 md:px-8 bg-gradient-to-r from-purple-100 to-pink-100">
        <h2 className="md:text-2xl text:xl font-bold mb-6 text-center" style={{ fontFamily: 'The Seasons' }}>Our Collection</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {productImages.map((image, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img
                src={image}
                alt={`Product Image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </section>
  
      <section className="py-10 px-6 md:px-8 bg-gradient-to-r from-yellow-100 to-orange-100">
        <h2 className="md:text-2xl text:xl font-bold mb-6 text-center" style={{ fontFamily: 'The Seasons' }}>Colours in Action</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {eventImages.map((image, index) => (
            <motion.div
              key={index}
              className={`relative overflow-hidden shadow-lg ${
                index % 3 === 0 ? 'col-span-2 row-span-2' : 'col-span-1'
              }`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img
                src={image}
                alt={`Event Image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Holi Cursor Effect */}
      <HoliCursorEffect />

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default Gallery;
