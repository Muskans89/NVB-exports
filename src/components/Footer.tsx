import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-red-500 text-white py-10 font-nunito">
      <div className="max-w-screen-lg mx-auto px-4">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {/* Useful Links */}
          <div>
            <h4 className="font-bold text-lg mb-4" style={{ fontFamily: 'The Seasons', fontWeight: 'normal' }}>
              Useful Links
            </h4>
            <ul>
              <li><Link to="/About" className="hover:text-pink transition-colors text-sm md:text-base" style={{ fontFamily: 'Poppins' }}>About Us</Link></li>
              <li><Link to="/Contact" className="hover:text-pink transition-colors text-sm md:text-base" style={{ fontFamily: 'Poppins' }}>Contact Us</Link></li>
              <li><Link to="/Product" className="hover:text-pink transition-colors text-sm md:text-base" style={{ fontFamily: 'Poppins' }}>Product</Link></li>
              <li><Link to="/FAQ" className="hover:text-pink transition-colors text-sm md:text-base" style={{ fontFamily: 'Poppins' }}>FAQs</Link></li>
            </ul>
          </div>

          {/* Address Section */}
          <div>
            <h4 className="font-bold text-lg mb-4" style={{ fontFamily: 'The Seasons', fontWeight: 'normal' }}>
              Address
            </h4>
            <p className="text-white mb-2 text-sm md:text-base" style={{ fontFamily: 'Poppins' }}>A-104, Sujay Garden, Mukund Nagar, Pune-411037, Maharashtra, India.</p>
          </div>

          {/* Contact Info Section */}
          <div>
            <h4 className="font-bold text-lg mb-4" style={{ fontFamily: 'The Seasons', fontWeight: 'normal' }}>
              Contact Us
            </h4>
            <p className="text-white mb-2 text-sm md:text-base" style={{ fontFamily: 'Poppins' }}>+91-9673240739</p>
            <p className="text-white text-sm md:text-base" style={{ fontFamily: 'Poppins' }}>nipunbaldota@gmail.com</p>
          </div>

          {/* Social Media Links */}
          <div>
            <h4 className="font-bold text-lg mb-4" style={{ fontFamily: 'The Seasons', fontWeight: 'normal' }}>
              Follow Us
            </h4>
            <ul className="flex space-x-4">
              <li>
                <a href="https://www.instagram.com/nvbexports/profilecard/?igsh=eW83dGY3amk3NGEz" target="_blank" rel="noopener noreferrer" className="hover:text-pink transition-colors text-sm md:text-base">
                  <FaInstagram size={24} />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/nvb-exports/" target="_blank" rel="noopener noreferrer" className="hover:text-pink transition-colors text-sm md:text-base">
                  <FaLinkedinIn size={24} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-12 border-t border-gray-300 pt-6 text-center text-sm text-gray-300" style={{ fontFamily: 'Poppins' }}>
          Copyright © 2024 NVB Exports. All rights reserved. Powered by The Work Journals
        </div>
      </div>
    </footer>
  );
};

export default Footer;
