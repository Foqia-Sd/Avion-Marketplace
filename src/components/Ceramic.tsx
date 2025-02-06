import React from 'react';
import Image from 'next/image';

const products = [
  {
    id: 1,
    name: 'The Dandy chair',
    image: '/images/product1.png',
    price: 250,
  },
  {
    id: 2,
    name: 'Rustic Vase Set',
    image: '/images/product2.png',
    price: 155,
  },
  {
    id: 3,
    name: 'The Silky Vase',
    image: '/images/product3.png',
    price: 125,
  },
  {
    id: 4,
    name: 'The Lucy Lamp',
    image: '/images/product4.png',
    price: 399,
  },
];

const Ceramic = () => {
  return (
    <div className="p-4  mt-20">
      <div>
        <h2 className="text-[#2A254B] text-2xl font-bold mb-6 ml-16">You might also like</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 ml-14 mr-14">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col items-center text-center hover:scale-110 duration-300"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={250}
              height={250}
              className="rounded-lg"
            />
            <h6 className="mt-4 ">{product.name}</h6>
            <p className="mt-2 text-gray-500">${product.price}</p>
          </div>
        ))}      
      </div>

      <div className='flex items-center justify-center mt-20'>
      <button className="bg-[#F9F9F9] text-[#2A254B] py-2 w-40  hover:bg-gray-200 transition hidden md:block">
          View collection
    </button>
    </div>

    </div>
  );
};

export default Ceramic;
