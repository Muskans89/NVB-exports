import { FaFacebookF, FaInstagram,  FaLinkedinIn } from 'react-icons/fa';

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
              <li><a href="/About" className="hover:text-pink transition-colors text-sm md:text-base" style={{ fontFamily: 'Poppins' }}>About Us</a></li>
              <li><a href="/Contact" className="hover:text-pink transition-colors text-sm md:text-base" style={{ fontFamily: 'Poppins' }}>Contact Us</a></li>
              <li><a href="/Product" className="hover:text-pink transition-colors text-sm md:text-base" style={{ fontFamily: 'Poppins' }}>Best Deals</a></li>
              <li><a href="/FAQ" className="hover:text-pink transition-colors text-sm md:text-base" style={{ fontFamily: 'Poppins' }}>FAQs</a></li>
            </ul>
          </div>

          

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4" style={{ fontFamily: 'The Seasons', fontWeight: 'normal' }}>
            Address
            </h4>
            <p className="text-white mb-2 text-sm md:text-base" style={{ fontFamily: 'Poppins' }}>A-104, Sujay Garden, Mukund Nagar, Pune-411037, Maharashtra, India.</p>
          
          </div>
{/* Categories */}
<div>
            <h4 className="font-bold text-lg mb-4" style={{ fontFamily: 'The Seasons', fontWeight: 'normal' }}>
               Contact Us
            </h4>
            <ul>
            <p className="text-white mb-2 text-sm md:text-base" style={{ fontFamily: 'Poppins' }}>+91-9673240739</p>
            <p className="text-white text-sm md:text-base" style={{ fontFamily: 'Poppins' }}> nipunbaldota@gmail.com</p>
            </ul>
          </div>
          {/* Social Media Links */}
          <div>
            <h4 className="font-bold text-lg mb-4" style={{ fontFamily: 'The Seasons', fontWeight: 'normal' }}>
              Follow Us
            </h4>
            <ul className="flex space-x-4">
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-pink transition-colors text-sm md:text-base">
                  <FaFacebookF size={24} />
                </a>
              </li>
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
