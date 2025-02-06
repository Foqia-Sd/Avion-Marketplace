import React from 'react';

const News = () => {
  return (
    <div className='bg-slate-50 h-screen flex items-center justify-center px-4'>
      <div className='bg-white w-full max-w-[800px] h-auto py-8 px-6 md:py-16 md:h-[300px] text-center border rounded-lg text-[#2A254B]'>
        <h1 className='text-[20px] md:text-[28px] font-normal'>Join the club and get the benefits</h1>
        <p className='text-[12px] mt-4'>
          Sign up for our newsletter and receive exclusive offers on new<br />
          ranges, sales, pop up stores and more
        </p>
        {/* Sign Up */}
        <div className='mt-6 md:mt-10 flex flex-col md:flex-row justify-center items-center'>
          <input
            type='text'
            placeholder='your@email.com'
            className='py-3 px-4 bg-gray-100 w-full md:w-auto md:px-14'
          />
          <button className='py-3 px-6 bg-[#2A254B] text-white hover:text-gray-200 font-light w-full md:w-auto'>
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default News;
