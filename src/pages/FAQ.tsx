import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HoliCursorEffect from '../components/holicoloreffect';
import { FaSearch, FaRegQuestionCircle } from 'react-icons/fa'; // Importing icons for search and question

import bgImage from '../assets/bg5.jpg'; // FAQ background image

const faqs = [
  {
    section: 'Colour Production and Key Features',
    questions: [
      { question: "What makes your Holi colours unique?", answer: "Our colours are crafted from 100% natural corn starch and food-grade dyes, ensuring a safe, vibrant, and premium experience." },
      { question: "Are your colours safe for skin and children?", answer: "Yes, our colours are non-toxic, skin-safe, and even suitable for children." },
      { question: "Are the colours eco-friendly?", answer: "Absolutely. Made with natural corn starch, our colours are biodegradable and environmentally friendly." },
      { question: "Do the colours stain?", answer: "Our colours are designed to be stain-free, though darker shades may leave faint marks on certain fabrics. We recommend wearing old clothes just in case!" },
      { question: "Can the colours be safely used for Holi festivals and other events?", answer: "Yes, our colours are non-combustible, tested for safety, and perfect for Holi, colour runs, and other celebrations." },
    ]
  },
  {
    section: 'International Shipping and Payment',
    questions: [
      { question: "What shipping options are available?", answer: "We offer various shipping methods, including air, sea, and road, to suit your timeline and budget needs." },
      { question: "How long does delivery take by each shipping method?", answer: "Sea shipments take approximately 14–40 days, depending on the destination, while air shipments arrive within 7 days for urgent orders." },
      { question: "What are the shipping costs for sea and air options?", answer: "Shipping by sea is cost-effective, while air shipping incurs higher costs, making it ideal for urgent orders." },
      { question: "How long does it take to produce an order?", answer: "Production time depends on order size. Small orders are completed within 3–7 days, while larger orders take 15–20 days." },
      { question: "What are the available INCO terms and payment options?", answer: "We offer Ex-Factory, FOB, CIF, and door delivery terms. Payment can be made via international bank transfer, and Letters of Credit are available for large orders." },
      { question: "Can you arrange international logistics and manage customs for global orders?", answer: "Yes, we have a dedicated logistics team to handle global shipments, ensuring your order reaches you on time, wherever you are." },
      { question: "Are there any special payment terms for bulk or recurring orders?", answer: "For bulk or regular orders, we can arrange flexible payment options, including tailored INCO terms and Letters of Credit for convenience." },
    ]
  },
  {
    section: 'Customisation Options',
    questions: [
      { question: "What packaging sizes are available for colour pouches?", answer: "Our pouches come in various sizes, including 10g, 20g, 40g, 50g, 80g, 100g, 200g, 250g, 500g, and 1kg. Each pouch is packed and sealed in sturdy corrugated boxes." },
      { question: "Do you offer bulk packaging options?", answer: "Yes, for larger orders, we provide bulk packaging in boxes of 5kg, 10kg, 20kg, 25kg, and 50kg to meet high-volume needs." },
      { question: "Are squeeze bottles available?", answer: "Yes, we offer 350g squeeze bottles, which can be customized with your logo. We can also create custom sizes upon request." },
      { question: "Is custom branding available on all packaging types?", answer: "Absolutely! We provide custom branding on pouches, squeeze bottles, and other packaging options to reflect your logo and brand identity." },
      { question: "Can I get assistance with determining the right packaging for my event?", answer: "Of course! Based on your event size, we can recommend appropriate packaging types and sizes, from individual pouches to bulk boxes." },
    ]
  },
  {
    section: 'Certification and Testing',
    questions: [
      { question: "Are your colours tested for safety?", answer: "Yes, our colours are certified for non-toxicity, skin-friendliness, and are free from heavy metals, meeting EN 71-3 standards." },
      { question: "Do you conduct quality control on all colours?", answer: "Absolutely. Each batch undergoes strict quality control to ensure consistency, vibrancy, and top quality across every shade." },
      { question: "Are your colours compliant with international standards?", answer: "Yes, our products meet global safety and quality benchmarks, including MSDS and ISO certifications, ensuring reliability and safety worldwide." },
      { question: "What testing standards do you follow for quality and safety?", answer: "Our colours are tested in internationally recognized labs to ensure purity, safety, and full compliance with safety standards." },
      { question: "Do you provide certifications with each order?", answer: "Yes, we provide a Certificate of Analysis for every product we deliver, verifying compliance with safety and quality standards and offering full assurance of product quality." },
      { question: "Are the colours certified as non-combustible?", answer: "Yes, our colours are formulated to be non-combustible, making them exceptionally safe for use in festivals, colour runs, and other large gatherings." },
    ]
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState(""); // New state to handle search term

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleScroll = () => {
    const section = document.getElementById('faq-section');
    if (section) {
      const { top, bottom } = section.getBoundingClientRect();
      if (top < window.innerHeight && bottom >= 0) {
        setIsVisible(true);
        window.removeEventListener('scroll', handleScroll); // Cleanup after visibility is set
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Filter questions based on search term
  const filteredFAQs = faqs.map(faqSection => ({
    ...faqSection,
    questions: faqSection.questions.filter(faq => faq.question.toLowerCase().includes(searchTerm.toLowerCase()))
  }));

  return (
    <div className="font-poppins">
      {/* Header Component */}
      <Header />

      {/* FAQ Banner */}
      <section 
        className="relative h-80 md:h-96 lg:h-[500px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgImage})`, // Set the background image for FAQ section
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white px-4 md:px-6 lg:px-8">
          <h1 className="text-2xl md:text-3xl font-bold" style={{ fontFamily: 'The Seasons' }}>Frequently Asked Questions</h1>
          <p className="mt-2 text-sm md:text-lg lg:text-xl max-w-2xl mx-auto" style={{ fontFamily: 'Poppins' }}>
            Find answers to common questions about our products, services, and policies. We're here to help!
          </p>
        </div>
      </section>

      {/* Search Bar */}
      <div className="max-w-screen-lg mx-auto mt-8 px-4">
        <div className="flex items-center border border-gray-300 rounded-lg">
          <input
            type="text"
            placeholder="Search FAQs..."
            className="w-full px-4 py-2 text-lg"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FaSearch className="text-gray-500 ml-2" size={20} />
        </div>
      </div>

      {/* FAQ Content Section */}
      <section id="faq-section" className="py-12 px-4 md:px-8 max-w-screen-lg mx-auto">
        {filteredFAQs.map((faqSection, sectionIndex) => (
          <div key={sectionIndex} className="space-y-8">
            <h2 className=" text:2xl md:text-3xl font-semibold text-left" style={{ fontFamily: 'The Seasons', paddingTop: '2rem', paddingBottom: '1rem' }}>
              <FaRegQuestionCircle className="inline-block mr-2 text-red-500" size={24} />
              {faqSection.section}
            </h2>
            {faqSection.questions.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white border border-gray-200 rounded-lg shadow-md mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <button
                  className={`w-full text-left px-6 py-4 text-lg flex justify-between items-center ${
                    openIndex === index ? 'bg-red-500 text-white' : 'bg-white text-gray-700'
                  } transition-colors duration-300`}
                  onClick={() => toggleFAQ(index)}
                >
                  <span style={{ fontFamily: 'Poppins' }}>{faq.question}</span>
                  <span>{openIndex === index ? "-" : "+"}</span>
                </button>
                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div 
                      className="px-6 overflow-hidden text-gray-600"
                      initial={{ maxHeight: 0, opacity: 0 }}
                      animate={{ maxHeight: "300px", opacity: 1 }}
                      exit={{ maxHeight: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      style={{ fontFamily: 'Poppins' }}
                    >
                      <p className="py-4">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        ))}
      </section>

      {/* Footer Component */}
      <Footer />

      {/* Holi Cursor Effect */}
      <HoliCursorEffect />
    </div>
  );
};

export default FAQSection;
