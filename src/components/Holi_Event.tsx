import { useEffect, useState } from 'react';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import holiFestivalImage from '../assets/bg1.jpg'; // Replace with your actual image path
import schoolEventsImage from '../assets/bg2.jpg'; // Replace with your actual image path
import fundraisersImage from '../assets/bg10.jpg'; // Replace with your actual image path
import birthdayPartiesImage from '../assets/bg3.jpg'; // Replace with your actual image path
import photoShootsImage from '../assets/bg4.jpg'; // Replace with your actual image path
import musicFestivalsImage from '../assets/bg7.jpg'; // Replace with your actual image path

const HoliProductDescription = () => {
  const [isVisible, setIsVisible] = useState(false); // State to manage visibility for animation

  const descriptions = [
    {
      title: 'Holi Festival',
      content: `Holi is the most popular festival in India and is celebrated by people of all ages and backgrounds. 
      
Corporate events: Holi colour powder can also be used in corporate events, team-building exercises, and office parties to add a fun and colorful element to the event.`,
      imageUrl: holiFestivalImage,
    },
    {
      title: 'School Events',
      content: `Holi colour powder can be used in school events such as fairs, cultural events, and sports days to add a colorful and festive touch to the occasion.`,
      imageUrl: schoolEventsImage,
    },
    {
      title: 'Fundraisers',
      content: `Holi color powder can be used in fundraisers such as charity runs, walkathons, and other events to add a fun and engaging element to the event and attract participants.`,
      imageUrl: fundraisersImage,
    },
    {
      title: 'Birthday Parties',
      content: `Holi color powder can be used in children's birthday parties or any other type of celebration to add a fun and memorable touch to the occasion.`,
      imageUrl: birthdayPartiesImage,
    },
    {
      title: 'Photo Shoots',
      content: `Holi color powder can also be used in photo shoots, such as engagement photoshoots or pre-wedding shoots, to create a unique and colorful backdrop.`,
      imageUrl: photoShootsImage,
    },
    {
      title: 'Music Festivals and Concerts',
      content: `Holi color powder can be used in music festivals and concerts to create a fun and engaging atmosphere and enhance the overall experience for the attendees.`,
      imageUrl: musicFestivalsImage,
    },
  ];

  // Function to handle scroll events
  const handleScroll = () => {
    const section = document.getElementById('holi-product-description');
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
    <section id="holi-product-description" className="py-10 bg-gray-100 font-nunito">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="md:text-2xl text-xl mb-4 text-black text-center" style={{ fontFamily: 'The Seasons' }}>
          Holi Color Powder Uses
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {descriptions.map((desc, index) => (
            <motion.div
              key={index}
              className="relative transition-transform duration-300"
              initial={{ opacity: 0, y: 20 }} // Start from slightly below and invisible
              animate={isVisible ? { opacity: 1, y: 0 } : {}} // Animate to visible and normal position when in view
              transition={{ duration: 0.5, delay: index * 0.1 }} // Delay based on index for staggered effect
            >
              <img 
                src={desc.imageUrl} 
                alt={desc.title} 
                className="w-full h-64 object-cover" 
                style={{ objectFit: 'cover', height: '200px' }} // Set a fixed height for uniformity
              />
              <div className="bg-white p-4 text-black h-32"> {/* Set a fixed height for the text container */}
                <h3 className="text-lg font-bold">{desc.title}</h3>
                <p className="mt-1 text-sm line-clamp-3">{desc.content}</p> {/* Use line-clamp to restrict number of lines */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HoliProductDescription;
