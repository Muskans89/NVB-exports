
import img1 from '../assets/bg1.jpg'; // Replace with your actual image path
import img2 from '../assets/bg10.jpg'; // Replace with your actual image path

const ImageGrid = () => {
  return (
    <section className="py-10 bg-gray-100">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-red-500 to-orange-500 text-white p-4 rounded">
          Celebrate Holi with Joy and Color
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative group">
            <img src={img1} alt="Happiness" className="w-full h-64 object-cover rounded-lg shadow-lg" />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
              <h3 className="text-white text-5xl font-bold transform group-hover:scale-110 transition-transform duration-300">HAPPINESS</h3>
            </div>
          </div>
          <div className="relative group">
            <img src={img2} alt="Culture" className="w-full h-64 object-cover rounded-lg shadow-lg" />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
              <h3 className="text-white text-5xl font-bold transform group-hover:scale-110 transition-transform duration-300">CULTURE</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageGrid;
