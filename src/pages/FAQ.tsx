import { useState, useEffect } from 'react';
import Header from '../components/Header'; // Import the Header
import Footer from '../components/Footer'; // Import the Footer
import bgImage from '../assets/bg5.jpg'; // Import the FAQ background image
import { motion } from 'framer-motion'; // Import motion from framer-motion


const faqs = [
  { question: "What are the ingredients in your colours?", answer: "Our colours are made from natural corn starch and food-grade dyes, ensuring 100% safety." },
  { question: "Are your colours safe for use, especially children?", answer: "Yes, our Holi colours are completely food-grade and safe for all, including children. They are gentle on the skin." },
  { question: "Are your colours eco-friendly?", answer: "Yes, they’re eco-friendly and biodegradable, with a corn starch base." },
  { question: "Are your colours stain-free and easy to wash off skin and hair?", answer: "Yes, our colours are mostly stain-free and wash off easily. We recommend wearing old clothes for darker shades and moisturizing your skin beforehand to aid in cleanup." },
  { question: "Are the colours safe to eat or inhale?", answer: "While our colours are safe, they aren’t meant for consumption. We recommend wearing masks to avoid inhalation during events." },
  { question: "Are your colours non-combustible?", answer: "Yes, our colours are non-combustible, making them safe for all types of events." },
  { question: "Can I customize shades of colours?", answer: "Yes, we offer custom shades and branding on packaging at no extra charge." },
  { question: "How much colour should I order per person?", answer: "Typically, 300-400 grams per participant is recommended for full enjoyment." },
  { question: "Do you ship internationally, and how do you ensure timely deliveries?", answer: "Yes, we ship worldwide via road, air, or sea, depending on your location, order size, and timeline. Our dedicated logistics team ensures timely delivery." },
  { question: "What payment options do you offer?", answer: "Payments are accepted via bank transfer. For large orders, we accept LC terms." },
  { question: "What are some safety tips for using Holi colours?", answer: "Avoid direct contact with the face, play in open spaces, and wear masks, goggles, and headgear." },
  { question: "Are the colours UV-reactive?", answer: "Yes, we offer 15+ UV-reactive neon shades for vibrant, glowing effects." },
  { question: "How should I wash off the colours after Holi?", answer: "Simply wash with warm water. Moisturizing skin beforehand can make cleanup easier." },
  { question: "What packaging options do you offer?", answer: "We provide flexible packaging options, including pouches (10g to 1kg), bulk boxes (5kg to 50kg), and customizable 350g squeeze bottles with logo branding." },
  { question: "Which countries do you export to?", answer: "We export to over [Y] countries worldwide, including the USA, UK, and Australia." },
  { question: "Are there export certifications for your products?", answer: "Yes, our products meet international safety standards and certifications, ensuring they’re compliant and safe for global distribution." },
  { question: "What certifications ensure the quality and safety of your colours?", answer: "Our colours are ISO-certified and MSDS-certified. Each batch undergoes rigorous quality checks to ensure non-toxicity and skin-friendliness." },
  { question: "What sizes are available for colour pouches?", answer: "Our colour pouches are available in 10g, 20g, 40g, 50g, 80g, 100g, 200g, 250g, 500g, and 1kg." },
  { question: "How are pouches packaged for bulk orders?", answer: "Pouches are securely packed and sealed in corrugated boxes to ensure safe delivery." },
  { question: "What bulk box sizes do you offer?", answer: "We provide box sizes of 5kg, 10kg, 20kg, 25kg, and 50kg for bulk orders." },
  { question: "Do you offer squeeze bottles, and can they be customized with our logo?", answer: "Yes, we offer squeeze bottles in a standard 350g size, with custom sizes available upon request. We can also add your logo for branded packaging." },
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
    <div className="font-poppins">
      {/* Header Component */}
      <Header />

      {/* FAQ Banner */}
      <section 
        className="relative h-80 md:h-96 lg:h-[500px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgImage})`, // Correctly use the imported image
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white px-4 md:px-6 lg:px-8">
          <h1 className="text-xl md:text-3xl" style={{ fontFamily: 'The Seasons' }}>Frequently Asked Questions</h1>
          <p className="mt-2 text-sm md:text-lg lg:text-xl max-w-2xl mx-auto" style={{ fontFamily: 'Poppins' }}>
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
                className={`w-full text-left px-6 py-4 text-lg flex justify-between items-center 
                  ${openIndex === index ? 'bg-red-500 text-white' : 'bg-white text-gray-700'} transition-colors duration-300`}
                onClick={() => toggleFAQ(index)}
              >
                <span style={{ fontFamily: 'Poppins' }}>{faq.question}</span>
                <span>{openIndex === index ? "-" : "+"}</span>
              </button>
              {openIndex === index && (
                <motion.div 
                  className="px-6 py-4 text-gray-600 transition-all duration-300"
                  initial={{ opacity: 0, height: 0 }} // Start hidden
                  animate={{ opacity: 1, height: 'auto' }} // Animate to full height
                  exit={{ opacity: 0, height: 0 }} // Exit animation
                  transition={{ duration: 0.3 }} // Duration of exit animation
                  style={{ fontFamily: 'Poppins' }}
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
