// Import your image
import banner1 from '../assets/bg7.jpg';

const BannerImage = () => {
  return (
    <div className="w-full mx-auto"> {/* Full width container */}
      <img src={banner1} alt="Banner" className="w-full h-[300px] object-cover md:h-[500px]" />
    </div>
  );
};

export default BannerImage;
