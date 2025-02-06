import React from 'react';
import { FaFacebookSquare, FaInstagram, FaLinkedin, FaPinterest, FaSkype, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='bg-[#2A254B] text-white py-8 px-6 md:px-12 lg:px-16'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
        {/* Section 1 */}
        <div>
          <h2 className='text-lg font-bold mb-4'>Menu</h2>
          <ul className='space-y-3 text-sm text-gray-300'>
            <li className='hover:text-white transition-all cursor-pointer'>New arrivals</li>
            <li className='hover:text-white transition-all cursor-pointer'>Best sellers</li>
            <li className='hover:text-white transition-all cursor-pointer'>Recently viewed</li>
            <li className='hover:text-white transition-all cursor-pointer'>Popular this week</li>
            <li className='hover:text-white transition-all cursor-pointer'>All products</li>
          </ul>
        </div>

        {/* Section 2 */}
        <div>
          <h2 className='text-lg font-bold mb-4'>Categories</h2>
          <ul className='space-y-3 text-sm text-gray-300'>
            <li className='hover:text-white transition-all cursor-pointer'>Crockery</li>
            <li className='hover:text-white transition-all cursor-pointer'>Furniture</li>
            <li className='hover:text-white transition-all cursor-pointer'>Homeware</li>
            <li className='hover:text-white transition-all cursor-pointer'>Plant pots</li>
            <li className='hover:text-white transition-all cursor-pointer'>Chairs</li>
          </ul>
        </div>

        {/* Section 3 */}
        <div>
          <h2 className='text-lg font-bold mb-4'>Our Company</h2>
          <ul className='space-y-3 text-sm text-gray-300'>
            <li className='hover:text-white transition-all cursor-pointer'>About us</li>
            <li className='hover:text-white transition-all cursor-pointer'>Vacancies</li>
            <li className='hover:text-white transition-all cursor-pointer'>Contact us</li>
            <li className='hover:text-white transition-all cursor-pointer'>Privacy</li>
          </ul>
        </div>

        {/* Section 4 */}
        <div>
          <h2 className='text-lg font-bold mb-4'>Join our mailing list</h2>
          { <div className='flex flex-col md:flex-row gap-1'>
            <input
              type='email'
              placeholder='your@email.com'
              className='py-2 px-4 rounded-md bg-[#4E4D93] text-white placeholder-gray-300 w-full focus:outline-none'
            />
            <button className='py-2 px-6 bg-white text-[#2A254B] font-semibold rounded-md hover:bg-gray-200 transition-all'>
              Sign up
            </button>
          </div> }
          
        </div>
      </div>

      {/* Divider */}
      <div className='border-t border-gray-600 mt-8'></div>

      <div className='flex flex-col md:flex-row justify-between items-center mt-6 text-gray-300 text-sm'>
        <p className='text-center md:text-left'>Copyright &copy; 2022 Avion LTD</p>
        <div className='flex gap-6 mt-4 md:mt-0'>
          <a href='https://www.linkedin.com/in/foqia-siddiqui-3357152b5/' target='_blank' rel='noopener noreferrer'>
            <FaLinkedin size={24} className='hover:text-white transition-all' />
          </a>
          <FaFacebookSquare size={24} className='hover:text-white transition-all cursor-pointer' />
          <FaInstagram size={24} className='hover:text-white transition-all cursor-pointer' />
          <FaSkype size={24} className='hover:text-white transition-all cursor-pointer' />
          <FaTwitter size={24} className='hover:text-white transition-all cursor-pointer' />
          <FaPinterest size={24} className='hover:text-white transition-all cursor-pointer' />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
