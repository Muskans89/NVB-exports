import { useEffect, useState } from 'react';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import holiFestivalImage from '../assets/bg1.jpg'; 
import schoolEventsImage from '../assets/kids.jpg'; 
import fundraisersImage from '../assets/fundraisers.webp'; 
import birthdayPartiesImage from '../assets/birthday.jpg'; 
import photoShootsImage from '../assets/photoshoot.jpg'; 
import musicFestivalsImage from '../assets/music.jpeg'; 
import genderRevealImage from '../assets/gender.jpg'; 
import weddingImage from '../assets/wedding.jpg'; 
import neonPartiesImage from '../assets/neon.jpg'; 

const HoliProductDescription = () => {
  const [isVisible, setIsVisible] = useState(false);

  const descriptions = [
    { 
      title: 'Gender Reveal', 
      content: `Organic color powders create a memorable, vibrant burst of pink or blue, offering a safe, eco-friendly gender reveal celebration.`, 
      imageUrl: genderRevealImage 
    },
    { 
      title: 'Wedding', 
      content: `Enhance wedding celebrations with organic color powders, adding vibrancy to rituals like the Haldi ceremony, ensuring beautiful, photogenic moments.`, 
      imageUrl: weddingImage 
    },
    { 
      title: 'Neon Theme Parties', 
      content: `Combine organic color powders with UV lighting at neon parties for a vibrant, fluorescent effect, elevating the experience in a safe, eco-friendly way.`, 
      imageUrl: neonPartiesImage 
    },
    {
      title: 'Holi Festival', 
      content: `Holi, the festival of colors, is celebrated with immense joy and enthusiasm across India. It's a vibrant celebration where people come together to throw colorful powders, creating a beautiful and lively atmosphere. `, 
      imageUrl: holiFestivalImage 
    },
    
    { 
      title: 'School Events', 
      content: `Ideal for school color runs and cultural days, organic color powders offer safe, hypoallergenic fun, perfect for group activities and photos.`, 
      imageUrl: schoolEventsImage 
    },
    { 
      title: 'Music Festivals and Concerts', 
      content: `Organic color powders bring energy to festivals, encouraging crowd participation and creating a lively, colorful atmosphere that enhances event photos.`, 
      imageUrl: musicFestivalsImage 
    },
    { 
      title: 'Birthday Parties', 
      content: `Organic color powders add excitement to birthday parties, providing a fun, biodegradable way to create memorable moments and vibrant photos.`, 
      imageUrl: birthdayPartiesImage 
    },
    { 
      title: 'Photoshoots', 
      content: `Organic color powders add dynamic, vibrant effects to photoshoots, creating visually captivating imagery without compromising on safety or environmental impact.`, 
      imageUrl: photoShootsImage 
    },
    { 
      title: 'Fundraisers', 
      content: `Color runs and powder throws at fundraisers encourage participation, helping create memorable, colorful experiences that enhance engagement and visibility.`, 
      imageUrl: fundraisersImage 
    },
  ];

  const handleScroll = () => {
    const section = document.getElementById('holi-product-description');
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
    <section id="holi-product-description" className="py-16 bg-white font-nunito">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="md:text-2xl text-xl mb-10 text-black font-semibold text-center" style={{ fontFamily: 'The Seasons' }}>
        For Every Celebration
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {descriptions.map((desc, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img 
                src={desc.imageUrl} 
                alt={desc.title} 
                className="w-full h-56 object-cover" 
                style={{ objectFit: 'cover' }}
              />
              <div className="bg-white p-2 mt-0 text-left">
                <h3 className="text-lg font-semibold text-black text-left" style={{ fontFamily: 'The Seasons' }}>
                  {desc.title}
                </h3>
                <p className="mt-2 text-sm text-gray-700 text-left">{desc.content}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HoliProductDescription;
