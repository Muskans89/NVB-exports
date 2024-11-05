import React from 'react';
import p1 from '../assets/p1.jpg';
import p2 from '../assets/p2.jpeg';
import p3 from '../assets/p3.jpg';
import p4 from '../assets/p4.jpeg';

const products = [
  {
    id: 1,
    name: 'Lorem Ipsum Gift Box 1',
    image: p1,
    discount: '20% OFF',
    rating: '5.0/5',
    stockStatus: 'Limited Stock Left',
  },
  {
    id: 2,
    name: 'Lorem Ipsum Gift Box 2',
    image: p2,
    discount: '30% OFF',
    rating: '4.5/5',
    stockStatus: 'Limited Stock Left',
  },
  {
    id: 3,
    name: 'Lorem Ipsum Gift Box 3',
    image: p3,
    discount: '10% OFF',
    rating: '5.0/5',
    stockStatus: 'Limited Stock Left',
  },
  {
    id: 4,
    name: 'Lorem Ipsum Gift Box 4',
    image: p4,
    discount: 'Sold Out',
    rating: '5.0/5',
    stockStatus: 'Limited Stock Left',
  },
];

const ProductSection: React.FC = () => {
  return (
    <section className="py-10 bg-cream font-nunito"> {/* Added font class here */}
      <h2 className="md:text-2xl text:xl font-bold text-yellow text-center mb-8">Most Loved Products</h2>
      <div className="overflow-x-auto">
        <div className="flex gap-6 px-4 md:px-8 max-w-screen-xl mx-auto">
          {products.map((product) => (
            <div key={product.id} className="border border-gray-300 rounded-lg shadow-md bg-white relative p-4 min-w-[250px]">
              {product.discount && (
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                  {product.discount}
                </span>
              )}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover mb-4 rounded-lg"
              />
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              <p className="text-yellow-500 text-sm mb-2">⭐ {product.rating} Rating</p>
              {product.stockStatus && (
                <p className="bg-red-500 text-white text-center py-2 rounded font-bold text-xs">
                  {product.stockStatus}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
