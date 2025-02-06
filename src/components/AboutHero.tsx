import React from 'react'
import Image from 'next/image'
import { BrandDifferent, Footer, News } from '@/components'

const AboutHero = () => {
  return (
    <>
    {/* Hero Part 1 */}
    <div className="flex flex-col md:flex-row items-center justify-between mt-20 px-20 py-6">
      {/* Heading (Left on larger screens) */}
      <h2 className="text-[22px] md:text-[25px] text-[#2A254B] text-center md:text-left max-w-lg">
        A brand built on the love of craftsmanship,  
        quality and outstanding customer service
      </h2>

      {/* Button (Right on larger screens) */}
      <button className="bg-[#F9F9F9] text-[#2A254B] py-4 w-40 mt-4 md:mt-0 hover:bg-gray-200 transition hidden md:block">
        View collection
      </button>
    </div>

    {/* Hero Part 2 */}
    <div className="flex flex-col lg:flex-row items-center justify-center mt-10 lg:mx-20 gap-4 py-20">
      
      {/* Left: Text Section */}
      <div className="w-full lg:w-1/2 h-[500px] flex flex-col justify-center p-6 lg:p-16 text-center lg:text-left bg-blue-950">
        <h3 className="text-white text-[20px] lg:text-[26px] font-bold">
          It started with a small idea
        </h3>
        <p className="py-4 text-white">
          A global brand with local beginnings, our story began in a small studio in South London in early 2014.
        </p>
        <p className="py-4 text-white">
          Handmade, and lovingly crafted furniture and homeware is what we live, breathe, and design, so our Chelsea boutique became the hotbed for the London interior design community.
        </p>
        <button className="bg-gray-50 bg-opacity-15 text-white w-[40%] py-3 mt-6 font-medium hover:bg-gray-50 hover:text-blue-950 transition-all">
          View collection
        </button>
      </div>

      {/* Right: Image Section (Same Size & Blue Background) */}
      <div className="w-full lg:w-1/2 h-[500px] flex justify-center items-center">
        <Image
          src="/images/abouthero.png"
          alt="Studio Image"
          width={600}
          height={500}
          className="w-full h-full object-cover rounded-lg shadow-md"
        />
      </div>
    </div>

    {/* Hero Part 3 */}
    <div className="flex flex-col lg:flex-row items-center justify-center mt-10 lg:space-x-10 bg-slate-50">
      <div className="w-full lg:w-auto flex justify-center">
        <Image
          src="/images/abouthero2.png"
          alt="Studio Image"
          width={1000}
          height={300}
          className="w-full lg:w-[1500px] lg:h-[500px] object-cover"
        />
      </div>

      <div className="px-6 lg:px-24 text-center lg:text-left mt-3">
        <h3 className="text-[#2A254B] text-[20px] lg:text-[26px]">
          Our service isn&apos;t just personal, it&apos;s actually
          hyper personally exquisite
        </h3>
        <p className="py-4 text-[#505977]">
          When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.
        </p>
        <p className="py-4 text-[#505977]">
          Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique became the hotbed for the London interior design community.
        </p>
        <button className="bg-[#F9F9F9] text-[#2A254B] mt-10 mb-4 py-2 w-40 hover:bg-gray-200">
          Get in touch
        </button>
      </div>
    </div>

    {/* Calling components */}
    <BrandDifferent />
    <News />
    <Footer />
    </>
  )
}

export default AboutHero
