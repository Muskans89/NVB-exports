import ProductBanner from '../components/Product_banner';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FeaturedProducts from '../components/FeaturedProducts';
import ColorShades from '../components/colorshade';
import CustomizationSection from '../components/CustomizationSection';
import HoliEventsSection from '../components/Holi_Event';


const ProductPage = () => {
  return (
    <div>
        <Header/>
      <ProductBanner />
      <FeaturedProducts/>
      <ColorShades/>
      <CustomizationSection/>
      <HoliEventsSection/>

    <Footer/>
    </div>
  );
};

export default ProductPage;
