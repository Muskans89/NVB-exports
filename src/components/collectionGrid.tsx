import p1 from '../assets/p1.jpg';
import p2 from '../assets/p2.jpeg';
import p3 from '../assets/p3.jpg';
import p4 from '../assets/p4.jpeg';
import p5 from '../assets/p5.jpeg';

const CollectionGrid = () => {
  const collections = [
    { id: 1, name: 'PRODUCT 1', imageUrl: p1 },
    { id: 2, name: 'PRODUCT 2', imageUrl: p2 },
    { id: 3, name: 'PRODUCT 3', imageUrl: p5 },
    { id: 4, name: 'PRODUCT 4', imageUrl: p3 },
    { id: 5, name: 'PRODUCT 5', imageUrl: p4 },
    { id: 6, name: 'PRODUCT 6', imageUrl: p1 },
  ];

  return (
    <div className="py-8 bg-cream">
      <h2 className="text-center md:text-2xl text:xl font-bold mb-8 font-nunito">Our Collections</h2>

      {/* Responsive Grid for collections */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6">
        {collections.map((collection) => (
          <div
            key={collection.id}
            className="relative group rounded-lg p-4 hover:shadow-lg transition-shadow"
          >
            {/* Image */}
            <img
              src={collection.imageUrl}
              alt={collection.name}
              className="rounded-lg w-full h-[200px] object-cover"
            />

            {/* Text below each image */}
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-80 text-white py-2 text-center font-bold font-nunito text-sm md:text-base">
              {collection.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollectionGrid;
