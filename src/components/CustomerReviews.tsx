import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion'; // Import motion from framer-motion

const reviews = [
  {
    id: 1,
    text: "This fragrance is naturally beautiful, easy to wash off and safe for children.",
    author: "Reema Rai, Patna",
    rating: 5,
  },
  {
    id: 2,
    text: "Awesome product. My whole family was loved using these colors as they were soft and glossy at the same time with some so safe to play.",
    author: "Rahul Chaudhary, Mumbai",
    rating: 4,
  },
  {
    id: 3,
    text: "This product was perfect for the color run event I had. It felt refreshing, natural and I didn’t have to worry about any safety concerns. Definitely a great choice.",
    author: "Abigail Smith, Malta",
    rating: 5,
  },
  {
    id: 4,
    text: "The organic neon colors made our gender reveal unforgettable. It created such an exciting moment and made the celebration extra special.",
    author: "Daniel Cooper, Australia",
    rating: 5,
  },
  {
    id: 5,
    text: "These colours didn't stain my skin or clothes and they added a charm to our Holi party. A great addition to our celebration.",
    author: "Anushka Behl, Rishikesh",
    rating: 5,
  },
  {
    id: 6,
    text: "These colors made our festival so much more fun. They were easy to play with and the shades were so good.",
    author: "Prateek Verma, Noida",
    rating: 5,
  },
  {
    id: 7,
    text: "I loved the quality of these Holi colors. They were natural, safe, and really added to the festive spirit.",
    author: "Abhilash Sharma, Gurgaon",
    rating: 5,
  },
  {
    id: 8,
    text: "Such a fantastic choice for Holi. The colors were rich and bold, and they didn't irritate my skin. Everyone had a blast, and it made our Holi reunion party even more memorable.",
    author: "Mehak Sharma, Kolkata",
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
    <section id="customer-reviews" className="bg-red-500 pt-6 pb-12 md:pt-8 md:pb-16 relative z-10">
    <div className="max-w-screen-lg mx-auto text-center px-4 md:px-6">
      <h2 className="font-semibold text-lg md:text-2xl  mb-6 md:mb-8 text-white" style={{ fontFamily: 'The Seasons' }}>
        Customer Experiences
      </h2>
  
      <Slider {...settings}>
        {reviews.map((review) => (
          <motion.div
            key={review.id}
            className="bg-white px-6 py-10 md:px-10 md:py-16 shadow-lg mx-auto my-4 flex flex-col justify-center items-center min-h-[200px] md:min-h-[250px] max-w-xs md:max-w-md"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            style={{ boxSizing: 'border-box' }}
          >
            <p className="text-black mb-4 text-sm md:text-base text-center" style={{ fontFamily: 'Poppins' }}>
              {review.text}
            </p>
            <p className="font-semibold text-black text-sm md:text-lg text-center" style={{ fontFamily: 'The Seasons' }}>
              {review.author}
            </p>
          </motion.div>
        ))}
      </Slider>
    </div>
  </section>
    
  
  );
};

export default CustomerReviews;
