
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; // Make sure this path is correct
import AboutBanner from './pages/About';
import ProductPage from './pages/Product';
import Gallery from './pages/Gallery';
import FAQBanner from './pages/FAQ';
import ContactPage from './pages/Contact';
import './index.css'; // Ensure this line is present


const App = () => {
    return (
        <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<AboutBanner />} />
            <Route path="/Product" element={<ProductPage/>} />
            <Route path="/Gallery" element={<Gallery />} />
            <Route path="/FAQ" element={<FAQBanner />} />
            <Route path="/Contact" element={<ContactPage />} />
        </Routes>
    </Router>
    
    );
};

export default App;
