"use client"

import { Navbar, ProductDetails } from '@/components'
import { client } from '@/sanity/lib/client'
import { groq } from 'next-sanity'
import { useParams } from 'next/navigation'
import React from 'react'

const page = async () => {
    const { slug } : any = useParams();

    const products = await client.fetch(groq`*[_type == 'product']`)
    const product = products.find((product: any) => product.slug.current == slug)

    console.log(products)
    
  return (
    <>
        <Navbar />
        <ProductDetails product={product}/>
    </>

  )
}

export default page