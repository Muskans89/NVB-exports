import { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import logo from '../assets/logo2.png'; // Import the logo

const HeaderWithOfferAndLogo = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false); // Close the menu
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top of the page
  };

  return (
    <div className="font-nunito">
      {/* Fixed Container for Offer Banner and Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50 w-full">
        {/* Gradient Offer Banner */}
        <header className="bg-red-500 text-white py-1 flex justify-center" style={{ fontFamily: 'The Seasons' }}>
          <div className="text-center">
            <p className="text-sm md:text-base">Bringing vibrant colours to celebrations worldwide with trusted safety and joy</p>
          </div>
        </header>

        {/* Full-width Cream Section with Logo and Navbar */}
        <section className="bg-cream w-full py-2"> {/* Reduced vertical padding */}
          <div className="flex justify-between items-center max-w-screen-lg mx-auto px-4">
            {/* Logo on the left */}
            <div className="flex-shrink-0 md:ml-[-80px]">
              <img src={logo} alt="NVB EXPORTS Logo" className="h-10 md:h-16" /> {/* Adjusted logo height */}
            </div>

            {/* Navbar on the right */}
            <nav className="hidden md:flex space-x-8 text-black text-lg" style={{ fontFamily: 'Poppins' }}> {/* Apply Poppins font */}
              <Link to="/" onClick={handleLinkClick} className="relative hover:text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 hover:underline hover:underline-offset-8 transition-all duration-300 ease-in-out">Home</Link>
              <Link to="/About" onClick={handleLinkClick} className="relative hover:text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 hover:underline hover:underline-offset-8 transition-all duration-300 ease-in-out">About</Link>
              <Link to="/Product" onClick={handleLinkClick} className="relative hover:text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 hover:underline hover:underline-offset-8 transition-all duration-300 ease-in-out">Product</Link>
              <Link to="/Gallery" onClick={handleLinkClick} className="relative hover:text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 hover:underline hover:underline-offset-8 transition-all duration-300 ease-in-out">Gallery</Link>
              <Link to="/FAQ" onClick={handleLinkClick} className="relative hover:text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 hover:underline hover:underline-offset-8 transition-all duration-300 ease-in-out">FAQ</Link>
              <Link to="/Contact" onClick={handleLinkClick} className="relative hover:text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 hover:underline hover:underline-offset-8 transition-all duration-300 ease-in-out">Contact</Link>
            </nav>

            {/* Hamburger Menu Icon for mobile view */}
            <div className="block md:hidden">
              <button onClick={toggleMenu} className="text-2xl text-black">
                <i className="fas fa-bars"></i>
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* Padding to prevent content overlap */}
      <div className="pt-28"></div> {/* Adjusted padding for overlap */}
      
      {/* Sidebar Menu for Mobile View */}
      <div
        className={`fixed top-0 left-0 w-64 bg-white text-gray-500 h-full transform ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out z-50 md:hidden`}
      >
        <div className="p-4">
          <button onClick={toggleMenu} className="text-gray-500 text-2xl mb-4">
            <i className="fas fa-times"></i>
          </button>
       
          {/* Navigation Links for Mobile */}
          <nav className="space-y-4 " style={{ fontFamily: 'Poppins' }}>
            <Link to="/" onClick={handleLinkClick} className="block text-base text-black">Home</Link>
            <Link to="/About" onClick={handleLinkClick} className="block text-base text-black">About</Link>
            <Link to="/Product" onClick={handleLinkClick} className="block text-base text-black">Product</Link>
            <Link to="/Gallery" onClick={handleLinkClick} className="block text-base text-black">Gallery</Link>
            <Link to="/FAQ" onClick={handleLinkClick} className="block text-base text-black">FAQ</Link>
            <Link to="/Contact" onClick={handleLinkClick} className="block text-base text-black">Contact</Link>
            <a href="#" onClick={handleLinkClick} className="block text-base text-black bg-red-500 py-2 px-4 rounded-full hover:bg-red-600 transition-all duration-300 ease-in-out">Get a Quote</a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default HeaderWithOfferAndLogo;
