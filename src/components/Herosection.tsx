import Slider from 'react-slick';

// Import your images
import banner1 from '../assets/5.png';
import banner2 from '../assets/3.png';
import banner3 from '../assets/bg1.jpg';
import banner4 from '../assets/bg2.jpg';

const BannerSlider = () => {

  // Settings for the react-slick slider
  const settings = {
    dots: false, // Hide dots
    infinite: true, // Infinite loop
    speed: 300, // Adjust the speed to make the transition faster
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500, // Reduced autoplay speed for quicker slide transitions
    arrows: false, // Optional, to hide arrows
  };

  return (
    <div className="w-full mx-auto">
      <Slider {...settings}>
        <div>
          <img src={banner1} alt="Banner 1" className="w-full h-[300px] object-cover md:h-[520px] lg:h-[520px] xl:h-[520px] 2xl:h-[520px]" />
        </div>
        <div>
          <img src={banner2} alt="Banner 2" className="w-full h-[300px] object-cover md:h-[520px] lg:h-[520px] xl:h-[520px] 2xl:h-[520px]" />
        </div>
        <div>
          <img src={banner3} alt="Banner 3" className="w-full h-[300px] object-cover md:h-[520px] lg:h-[520px] xl:h-[520px] 2xl:h-[520px]" />
        </div>
        <div>
          <img src={banner4} alt="Banner 4" className="w-full h-[300px] object-cover md:h-[520px] lg:h-[520px] xl:h-[520px] 2xl:h-[520px]" />
        </div>
      </Slider>
    </div>
  );
};

export default BannerSlider;
