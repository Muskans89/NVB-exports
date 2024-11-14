import Header from '../components/Header'; // Import the Header
import Footer from '../components/Footer'; // Import the Footer
import { useState, useEffect } from 'react';
import bannerImage from '../assets/neon2.jpg'; // Import the banner image
import contactImage from '../assets/party.jpg'; // Import the contact image
import { motion } from 'framer-motion'; // Import motion from framer-motion
import HoliCursorEffect from '../components/holicoloreffect';
import axios from 'axios';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const [isVisible, setIsVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      setErrorMessage('Please fill in all the required fields.');
      return;
    }

    setErrorMessage('');

    try {
      await axios.post('http://localhost:3001/send-email', formData);
      alert('Email sent successfully');
      setFormData({ firstName: '', lastName: '', email: '', message: '' }); // Clear the form
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send email');
    }
  };

  // Function to handle scroll events
  const handleScroll = () => {
    const section = document.getElementById('contact-section');
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
    <div className="font-poppins bg-gray-50">
      <Header />

      {/* About Us Banner Section */}
      <motion.section 
        className="relative h-80 md:h-96 lg:h-[500px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${bannerImage})`, backgroundAttachment: 'fixed' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-xl md:text-4xl font-bold" style={{ fontFamily: 'The Seasons' }}>Contact Us</h1>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        id="contact-section"
        className="py-12 px-4 md:px-8 max-w-screen-lg mx-auto flex flex-col md:flex-row gap-8"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
      >
        {/* Left Column - Contact Information */}
        <div className="flex-1 p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-bold mb-4" style={{ fontFamily: 'The Seasons' }}>Contact Details</h2>
            <p style={{ fontFamily: 'Poppins' }}>A-104, Sujay Garden, Mukund Nagar, Pune-411037, Maharashtra, India.</p>
            <p className="mt-2" style={{ fontFamily: 'Poppins' }}>Phone: +91-9673240739</p>
            <p style={{ fontFamily: 'Poppins' }}>Email: <a href="mailto:nipunbaldota@gmail.com" className="text-red-500 hover:underline">nipunbaldota@gmail.com</a></p>
          </div>
          
          {/* Image Below Contact Details */}
          <div className="mt-4">
            <img src={contactImage} alt="Contact Visual" className="w-full h-64 object-cover" />
          </div>
        </div>

        {/* Right Column - Message Form */}
        <div className="flex-1 bg-white rounded-lg shadow-md p-6 flex flex-col justify-between">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="firstName" className="block text-sm mb-2" style={{ fontFamily: 'The Seasons' }}>First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm mb-2" style={{ fontFamily: 'The Seasons' }}>Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded"
                />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm mb-2" style={{ fontFamily: 'The Seasons' }}>Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm mb-2" style={{ fontFamily: 'The Seasons' }}>Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded"
                rows={4}
              />
            </div>
            {errorMessage && (
              <p className="text-red-500 text-xs mb-4">{errorMessage}</p>
            )}
            <button type="submit" className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition duration-300" style={{ fontFamily: 'Poppins' }}>
              Send
            </button>
          </form>
        </div>
      </motion.section>

      {/* Google Map Section */}
      <motion.section 
        className="py-6 px-2 md:px-8 max-w-screen-lg mx-auto"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
      >
        <h2 className="bg-red-500 text-white text-xl md:text-2xl font-bold mb-4 text-center" style={{ fontFamily: 'The Seasons' }}>Find Us Here</h2>
        <div className="p-4 rounded-lg shadow-lg">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97641.88998473445!2d73.80483282905544!3d18.52506179992735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2cbb0e1c0b6d5%3A0x854fc793b3db5858!2sSujay%20Garden%2C%20Mukund%20Nagar%2C%20Pune%2C%20Maharashtra%20411037!5e0!3m2!1sen!2sin!4v1679992490176!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </motion.section>
      
      <HoliCursorEffect />
      <Footer />
    </div>
  );
};

export default ContactPage;
