"use client"

import React from "react"
import { CartContext } from "@/app/context/CartContext"
import { urlFor } from "@/sanity/lib/image"
import Image from "next/image"
import { useContext, useState } from "react"
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"
import Ceramic from "./Ceramic"
import Footer from "./Footer"
import News from "./News"
import BrandDifferent from "./BrandDifferent"


const ProductDetails = ({ product }: any) => {
  const [index, setIndex] = useState(0);
  const { cartItems, addProduct, qty, decQty, incQty }: any = useContext(CartContext);
  console.log(cartItems)

  return (
    <>
    <div className='product-details-section p-4 md:p-8'>
      <div className="product-details-container flex flex-col md:flex-row gap-8 items-center md:items-start">
        {/* Left Section */}
        <div className="w-full md:w-1/2 flex flex-col items-center">
          {/* Main Image */}
          <div className='w-full h-[350px] sm:h-[400px] md:h-[450px] flex items-center justify-center mb-4 md:mb-[25px]'>
            <Image
              loader={() => urlFor(product.images[index]).url()}
              src={urlFor(product.images[index]).url()}
              alt={product.images[index]}
              width={300}
              height={300}
              className="object-cover max-w-full rounded-lg"
            />
          </div>

          {/* Thumbnail Images */}
          <div className="small-images-container flex flex-wrap justify-center gap-2">
            {product.images?.map((item: any, i: number) => (
              <Image
                key={i}
                loader={() => urlFor(product.images[i]).url()}
                src={urlFor(product.images[i]).url()}
                alt={product.images[i]}
                width={80}
                height={80}
                className="object-cover h-20 w-20 sm:h-24 sm:w-24 border rounded-lg cursor-pointer hover:scale-105 transition-transform"
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 flex flex-col gap-6 md:pt-12 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold">{product.name}</h2>
          <p className="text-xl font-medium">${product.price}</p>

          {/* Quantity Selector */}
          <div className="flex justify-center md:justify-start items-center gap-4">
            <h3 className="text-lg font-medium">Quantity</h3>
            <div className="flex items-center border px-4 py-2 rounded-lg">
              <span className="minus cursor-pointer text-lg" onClick={decQty}>
                <AiOutlineMinus />
              </span>
              <span className="num px-4 text-lg font-semibold">{qty}</span>
              <span className="plus cursor-pointer text-lg" onClick={incQty}>
                <AiOutlinePlus />
              </span>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            className="bg-blue-800 hover:bg-blue-950 text-white font-semibold py-3 mt-10 px-6 rounded-lg transition-all w-full sm:w-auto"
            onClick={() => addProduct(product, qty)}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
    <Ceramic />
    <BrandDifferent />
    <News />
    <Footer />
    </>
  )
}

export default ProductDetails;
