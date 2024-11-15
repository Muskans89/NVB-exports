import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './pages/Home';
import AboutBanner from './pages/About';
import ProductPage from './pages/Product';
import Gallery from './pages/Gallery';
import FAQBanner from './pages/FAQ';
import ContactPage from './pages/Contact';
import './index.css';

const App = () => {
  // Scroll-to-top functionality within the App component
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };

  return (
    <Router>
      <ScrollToTop /> {/* This will scroll to top on every route change */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<AboutBanner />} />
        <Route path="/Product" element={<ProductPage />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/FAQ" element={<FAQBanner />} />
        <Route path="/Contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
};

export default App;
