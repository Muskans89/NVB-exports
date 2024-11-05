
import Slider from 'react-slick';

// Import your images
import banner1 from '../assets/bg7.jpg';
import banner2 from '../assets/img4.png';


const BannerSlider = () => {

  // Settings for the react-slick slider
  const settings = {
    dots: false, // Hide dots
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, // Optional, to hide arrows
  };

  return (
    <div className="w-full mx-auto"> {/* Changed to w-full to ensure full width */}
      <Slider {...settings}>
        <div>
          <img src={banner1} alt="Banner 1" className="w-full h-[300px] object-cover md:h-[500px]" />
        </div>
        <div>
          <img src={banner2} alt="Banner 2" className="w-full h-[300px] object-cover md:h-[500px]" />
        </div>
      
      </Slider>
    </div>
  );
};

export default BannerSlider;
