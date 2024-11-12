import Header from '../components/Header'; // adjust path if needed
import HeroSection from '../components/Herosection';
import AboutUsSection from '../components/about_us';
import WhyChooseUs from '../components/Why-Choose';
import PurposeSection from '../components/purpose';
import FourColumnSection from '../components/TwoColumnsection';
import Process from '../components/Feature';
import Footer from '../components/Footer';
import CustomerReviews from '../components/CustomerReviews';
import PartnershipBanner from '../components/Banner_cta';
import HoliCursorEffect from '../components/holicoloreffect';
import ExportCountries from '../components/Export_countries';

const Home = () => {
    return (
        <>
            <Header />
            <HeroSection />
            <AboutUsSection />
            <WhyChooseUs />
            <PurposeSection />
            <FourColumnSection />
            <Process />
            <ExportCountries/>
            <CustomerReviews />
            <PartnershipBanner />
            <Footer />
            <HoliCursorEffect/>

        </>
    );
};

export default Home;

