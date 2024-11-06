import ProductBanner from '../components/Product_banner';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FeaturedProducts from '../components/FeaturedProducts';
import ColorShades from '../components/colorshade';
import CustomizationSection from '../components/CustomizationSection';
import HoliEventsSection from '../components/Holi_Event';
import HoliCursorEffect from '../components/holicoloreffect';


const ProductPage = () => {
  return (
    <div>
        <Header/>
      <ProductBanner />
      <FeaturedProducts/>
      <ColorShades/>
      <CustomizationSection/>
      <HoliEventsSection/>
      <HoliCursorEffect/>

    <Footer/>
    </div>
  );
};

export default ProductPage;
