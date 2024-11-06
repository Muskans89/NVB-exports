import { useEffect, useState } from 'react';
import teamImage1 from '../assets/nipun.jpg'; // Example team member image
import teamImage2 from '../assets/bg1.jpg'; // Example team member image
import teamImage3 from '../assets/bg1.jpg'; // Example team member image
import { motion } from 'framer-motion';

const MeetTheTeam = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to handle scroll events
  const handleScroll = () => {
    const section = document.getElementById('meet-the-team');
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
    <section id="meet-the-team" className="py-12 bg-gray-100 font-nunito">
      <div className="max-w-screen-lg mx-auto px-4 text-center">
        <h2 className="text-lg md:text-2xl font-bold" style={{ fontFamily: 'The Seasons' }}>
          Meet the Team
        </h2>
        <p className="mt-4 text-gray-700 text-md "  style={{ fontFamily: 'Poppins' }}>
          Our dedicated team of professionals is committed to delivering quality and innovation.
        </p>

        {/* Team Members Section */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Team Member 1 */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }} // Start state
            animate={isVisible ? { opacity: 1, y: 0 } : {}} // Animate when visible
            transition={{ duration: 0.5 }} // Transition duration
          >
            <img
              src={teamImage1}
              alt="Team Member 1"
              className="w-40 h-40 mx-auto rounded-full mb-6 object-cover shadow-md"
            />
            <h3 className="text-lg font-semibold text-red-500" style={{ fontFamily: 'The Seasons' }}>
              John Doe
            </h3>
            <p className="text-sm text-gray-500 "  style={{ fontFamily: 'Poppins' }}>CEO & Founder</p>
            <p className="mt-2 text-gray-600 text-sm"  style={{ fontFamily: 'Poppins' }}>
              John has over 20 years of experience leading the company to success.
            </p>
          </motion.div>

          {/* Team Member 2 */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }} // Start state
            animate={isVisible ? { opacity: 1, y: 0 } : {}} // Animate when visible
            transition={{ duration: 0.5 }} // Transition duration
          >
            <img
              src={teamImage2}
              alt="Team Member 2"
              className="w-40 h-40 mx-auto rounded-full mb-6 object-cover shadow-md"
            />
            <h3 className="text-lg font-semibold text-red-500" style={{ fontFamily: 'The Seasons' }}>
              Jane Smith
            </h3>
            <p className="text-sm text-gray-500 " style={{ fontFamily: 'Poppins' }}>Head of Operations</p>
            <p className="mt-2 text-gray-600  text-sm" style={{ fontFamily: 'Poppins' }}>
              Jane oversees the daily operations with a focus on excellence.
            </p>
          </motion.div>

          {/* Team Member 3 */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }} // Start state
            animate={isVisible ? { opacity: 1, y: 0 } : {}} // Animate when visible
            transition={{ duration: 0.5 }} // Transition duration
          >
            <img
              src={teamImage3}
              alt="Team Member 3"
              className="w-40 h-40 mx-auto rounded-full mb-6 object-cover shadow-md"
            />
            <h3 className="text-lg font-semibold text-red-500" style={{ fontFamily: 'The Seasons' }}>
              Mike Johnson
            </h3>
            <p className="text-sm text-gray-500 " style={{ fontFamily: 'Poppins' }}>Chief Marketing Officer</p>
            <p className="mt-2 text-gray-600  text-sm" style={{ fontFamily: 'Poppins' }}>
              Mike brings creativity and strategy to expand our brand's reach.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MeetTheTeam;
