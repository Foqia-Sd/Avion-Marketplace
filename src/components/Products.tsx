import { client } from '@/sanity/lib/client'
import { groq } from 'next-sanity'
import Card from './Card'

const Products = async () => {

    const products = await client.fetch(groq`*[_type == 'product']`)

  return (
    <div className='w-full py-12 mt-[125px]'>
        <div className='container'>
            <div className='py-4'>
                <h1 className='text-3xl text-[#4E4D93]'>Best Selling Products</h1>
                <h1>Enjoy Upto 50%</h1>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-6'>
                {products.map((product:any, index:number) => (
                    <Card key={index} product={product} />
                ))
                }
            </div>

        </div>
    </div>
  )
}

export default Products