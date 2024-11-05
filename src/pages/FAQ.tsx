import { useState, useEffect } from 'react';
import Header from '../components/Header'; // Import the Header
import Footer from '../components/Footer'; // Import the Footer
import bgImage from '../assets/bg5.jpg'; // Import the FAQ background image
import { motion } from 'framer-motion'; // Import motion from framer-motion

const faqs = [
  { question: "What is NVB Exports?", answer: "NVB Exports is a family-run Holi Colour Manufacturing business, committed to providing high-quality, vibrant, and safe products since 1965." },
  { question: "Are your products eco-friendly?", answer: "Yes, our products are made from natural ingredients and are 100% non-toxic, ensuring safety for both you and the environment." },
  { question: "Do you ship internationally?", answer: "Yes, we ship internationally, ensuring that our products reach customers around the world efficiently and safely." },
  { question: "What is your return policy?", answer: "We accept returns within 30 days of purchase if the products are unused and in their original packaging." },
  { question: "How can I place a bulk order?", answer: "For bulk orders, please contact our sales team directly, and they will assist you with custom packaging and competitive pricing." },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null); // Specify type for state
  const [isVisible, setIsVisible] = useState(false); // State to handle visibility for animation

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Function to handle scroll events
  const handleScroll = () => {
    const section = document.getElementById('faq-section');
    if (section) { // Check if section is not null
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
    <div className="font-nunito">
      {/* Header Component */}
      <Header />

      {/* FAQ Banner */}
      <section 
        className="relative h-80 md:h-96 lg:h-[500px] flex items-center justify-center bg-cover bg-center font-nunito"
        style={{
          backgroundImage: `url(${bgImage})`, // Correctly use the imported image
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white px-4 md:px-6 lg:px-8">
          <h1 className="text-xl md:text-3xl font-bold">Frequently Asked Questions</h1>
          <p className="mt-2 text-sm md:text-lg lg:text-xl max-w-2xl mx-auto">
            Find answers to common questions about our products, services, and policies. We're here to help!
          </p>
        </div>
      </section>

      {/* FAQ Content Section */}
      <section id="faq-section" className="py-12 px-4 md:px-8 max-w-screen-lg mx-auto">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-cream border border-gray-200 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }} // Starting state
              animate={isVisible ? { opacity: 1, y: 0 } : {}} // Animate based on visibility
              transition={{ duration: 0.5, delay: index * 0.1 }} // Delay based on index for staggered effect
            >
              <button
                className={`w-full text-left px-6 py-4 text-lg font-semibold flex justify-between items-center 
                  ${openIndex === index ? 'bg-red-500 text-white' : 'bg-white text-gray-700'} transition-colors duration-300`}
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span>{openIndex === index ? "-" : "+"}</span>
              </button>
              {openIndex === index && (
                <motion.div 
                  className="px-6 py-4 text-gray-600 transition-all duration-300"
                  initial={{ opacity: 0, height: 0 }} // Start hidden
                  animate={{ opacity: 1, height: 'auto' }} // Animate to full height
                  exit={{ opacity: 0, height: 0 }} // Exit animation
                  transition={{ duration: 0.3 }} // Duration of exit animation
                >
                  {faq.answer}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default FAQSection;
