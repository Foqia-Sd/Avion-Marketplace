"use client"

import Link from 'next/link'
import React from 'react'
import { FiShoppingBag } from 'react-icons/fi'
import Cart from './Cart'
import { CartContext } from '@/app/context/CartContext'
import { useContext } from 'react'
import { IoIosSearch } from 'react-icons/io'



const Navbar = () => {

  const { totalQuantity, showCart, setShowCart }: any = useContext(CartContext);

  const handleClick = () => {
    setShowCart(!showCart)

  }

  return (
    <>
      <div className='w-full h-[80px] bg-white'>
        <div className='container w-full h-full flex justify-between items-center'>
          {/* Search Bar */}
          <div className="flex items-center">
            <IoIosSearch size={20} className="text-gray-600" />
          </div>

          <Link href={"/"} className='logo'>Avion</Link>
          <button className='cart-icon' onClick={handleClick}>
            <FiShoppingBag />
            <span className='absolute top-0 text-[12px] right-[-5px] bg-red-500 w-[18px] -[18px] 
            rounded-3xl text-center text-white font-bold'>{totalQuantity}</span>
          </button>
        </div>
      </div>
      <div className="border-b-2 bg-neutral-100 md:block hidden"></div>
      {/* Calling Cart Component & Open and Show Cart*/}
      {showCart && <Cart />}
    </>
  )
}

export default Navbar