import React from 'react';
import Image from 'next/image';

const Studio = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center mt-10 lg:space-x-10 bg-slate-50">
      <div className="px-6 lg:px-24 text-center lg:text-left">
        <h3 className="text-[#2A254B] text-[20px] lg:text-[26px]">
          From a studio in London to a global brand with over 400 outlets
        </h3>
        <p className="py-4 text-[#505977]">
          When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.
        </p>
        <p className="py-4 text-[#505977]">
          Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.
        </p>
        <button className="bg-[#F9F9F9] text-[#2A254B] mt-10 mb-4 py-2 w-40 hover:bg-gray-200">
          Get in touch
        </button>
      </div>

      <div className="w-full lg:w-auto flex justify-center">
        <Image
          src="/images/studio.png"
          alt="Studio Image"
          width={1000}
          height={300}
          className="w-full lg:w-[1500px] lg:h-[500px] object-cover"
        />
      </div>
    </div>
  );
};

export default Studio;
