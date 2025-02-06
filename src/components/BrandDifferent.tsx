import React from 'react'
import { IoCheckmarkCircleOutline } from 'react-icons/io5'
import { TbTruckDelivery } from 'react-icons/tb'
import { LuSprout } from 'react-icons/lu'
import { BiPurchaseTagAlt } from 'react-icons/bi'

const BrandDifferent = () => {
  return (
    <div className='flex flex-col items-center'>
        <div className='flex justify-center text-[#4E4D93] text-[22px]'>
            <h3 className='mt-[125px] text-2xl px-4 md:px-0'>What Makes Brand Different</h3>
        </div>
    {/* Text containner */}
    <div className='grid grid-cols-1 md:grid-cols-4 lg;grid-col-5 gap-6 ml-6 mt-16'>
        {/* Text 1 */}
    <div className='lg:ml-10'> 
    <TbTruckDelivery size={20} />
    <h4 className='text-[#2A254B] text-[18px] mt-3'>Next day as standard</h4>
    <p className='text-[#2A254B] text-[14px] mt-3'>
    Order before 3pm and get your order
    the next day as standard
    </p>
    </div>
   {/* Text 2 */}
    <div> 
    <IoCheckmarkCircleOutline  size={20}/>
    <h4 className='text-[#2A254B] text-[18px] mt-3'>Made by true artisans</h4>
    <p className='text-[#2A254B] text-[14px] mt-3'>
    Handmade crafted goods made with
    real passion and craftmanship
    </p>
    </div>
    {/* Text 3 */}
    <div> 
    <BiPurchaseTagAlt size={20}/>
    <h4 className='text-[#2A254B] text-[18px] mt-3'>Unbeatable prices</h4>
    <p className='text-[#2A254B] text-[14px] mt-3'>
    For our materials and quality you 
    wont find better prices anywhere
    </p>
    </div>
   {/* Text 4 */}
    <div> 
    <LuSprout size={20} />
    <h4 className='text-[#2A254B] text-[18px] mt-3'>Recycled packaging</h4>
    <p className='text-[#2A254B] text-[14px] mt-3'>
    We use 100% recycled packaging<br/>to
    ensure our footprint is manageable
    </p>
    </div>

    </div>


    </div>
  )
}

export default BrandDifferent