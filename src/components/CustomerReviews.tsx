import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion'; // Import motion from framer-motion

const reviews = [
  {
    id: 1,
    text: "It has been such a happy experience to order on Phool.co. It was really nice...",
    author: "Akash Chauhan",
    rating: 5,
  },
  {
    id: 2,
    text: "I loved the variety of options available. The delivery was prompt and hassle-free.",
    author: "Riya Sharma",
    rating: 4,
  },
  {
    id: 3,
    text: "Great service and even better products! Highly recommend to everyone!",
    author: "Anil Gupta",
    rating: 5,
  },
  {
    id: 4,
    text: "The quality exceeded my expectations. Will definitely order again!",
    author: "Meera Singh",
    rating: 5,
  },
];

const CustomerReviews = () => {
  const [isVisible, setIsVisible] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  // Function to handle scroll events
  const handleScroll = () => {
    const section = document.getElementById('customer-reviews');
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
    <section id="customer-reviews" className="bg-red-500 py-8"> {/* Set background color */}
      <div className="max-w-screen-lg mx-auto text-center px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-6 text-white" style={{ fontFamily: 'The Seasons' }}>
          Customer Experiences
        </h2>

        <Slider {...settings}>
          {reviews.map((review) => (
            <motion.div
              key={review.id}
              className="bg-white p-6 shadow-lg mx-4 transition-transform duration-300"
              initial={{ opacity: 0, y: 20 }} // Start from below and invisible
              animate={isVisible ? { opacity: 1, y: 0 } : {}} // Animate to visible and original position
              transition={{ duration: 0.5 }} // Transition duration
            >
              <p className="text-black mb-4 text-sm md:text-base" style={{ fontFamily: 'Poppins' }}>
                {review.text}
              </p>
              <p className="font-bold text-black text-base md:text-lg" style={{ fontFamily: 'The Seasons' }}>
                {review.author}
              </p>
              <div className="flex justify-center mt-2">
                {[...Array(review.rating)].map((_, index) => (
                  <span key={index} className="text-yellow-500">★</span>
                ))}
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default CustomerReviews;
