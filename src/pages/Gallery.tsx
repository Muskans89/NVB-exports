
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Importing images
import image1 from '../assets/bg1.jpg';
import image2 from '../assets/bg2.jpg';
import image3 from '../assets/bg3.jpg';
import image4 from '../assets/bg4.jpg';
import image5 from '../assets/bg5.jpg';
import image6 from '../assets/bg6.jpg';
import image7 from '../assets/bg2.jpg';
import image8 from '../assets/bg8.jpg';
import image9 from '../assets/bg2.jpg';
import image10 from '../assets/bg10.jpg';
import image11 from '../assets/bg1.jpg';
import image12 from '../assets/bg3.jpg';

const images = [
  image1, image2, image3, image4, image5, image6,
  image7, image8, image9, image10, image11, image12
];

const Gallery = () => {
  return (
    <div className="font-nunito">
      {/* Header Component */}
      <Header />

      <section className="py-10 px-6 md:px-8 bg-gradient-to-r from-yellow-100 to-orange-100">
        

        {/* Image Grid with Scroll Animations */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className={`relative overflow-hidden  shadow-lg transition-transform duration-300 ${
                index % 3 === 0 ? 'col-span-2 row-span-2' : 'col-span-1'
              }`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img
                src={image}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default Gallery;
