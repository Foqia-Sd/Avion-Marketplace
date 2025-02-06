import { FaArrowRight } from 'react-icons/fa'

const page = () => {
  return (
    <div className='flex flex-col gap-4 items-center justify-center h-screen text-center'>
        <p className='text-[#4f46E5] font-bold'>SUCCESS</p>
        <h1 className='text-3xl sm:text-5xl font-bold text-gray-900'>Your order has been placed!</h1>
        <p className='text-gray-600'>Thank you for your purchase!</p>
        <a href="/" className='flex items-center justify-center gap-2 bg-[#4f46E5] text-white px-3.5 py-2.5 rounded-md font-semibold mt-10'>
            Continue Shopping <FaArrowRight />
        </a>
    </div>
  )
}

export default page