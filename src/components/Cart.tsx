import { CartContext } from '@/app/context/CartContext';
import React, { useContext } from 'react';
import { AiOutlineLeft, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import { TiDeleteOutline } from 'react-icons/ti';

const Cart = () => {
  const { onRemove, toogleCartItemQty, totalPrice, totalQuantity, cartItems, showCart, setShowCart }: any = useContext(CartContext);

  const handleClose = () => {
    setShowCart(!showCart);
  };

  const handleCheckout = async () => {
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ products: cartItems }),
      });

      const data = await response.json();
      if (data.url) {
        window.location.href = data.url;
      }
    } catch (error) {
      console.error('Error during checkout', error);
    }
  };

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50'>
      <div className='w-full sm:w-96 bg-white h-full p-6 overflow-y-auto shadow-lg'>
        <button className='flex items-center space-x-2 text-lg font-semibold' onClick={handleClose}>
          <AiOutlineLeft />
          <span>Your Cart</span>
          <span className='ml-auto bg-gray-200 px-2 py-1 rounded-full text-sm'>{totalQuantity}</span>
        </button>

        <div className='mt-4 space-y-4'>
          {cartItems.map((product: any) => (
            <div key={product._id} className='flex items-center space-x-4 border-b pb-4'>
              <Image
                loader={() => urlFor(product.images[0]).url()}
                src={urlFor(product.images[0]).url()}
                alt={product.name}
                width={80}
                height={80}
                className='object-cover rounded-lg'
              />
              <div className='flex-1'>
                <div className='flex justify-between'>
                  <h5 className='font-medium'>{product.name}</h5>
                  <h4 className='font-semibold'>${product.price}</h4>
                </div>
                <div className='flex justify-between items-center mt-2'>
                  <div className='flex items-center space-x-2'>
                    <button onClick={() => toogleCartItemQty(product._id, 'minus')} className='p-1 bg-gray-200 rounded'>
                      <AiOutlineMinus />
                    </button>
                    <span className='px-3 py-1 border rounded'>{product.quantity}</span>
                    <button onClick={() => toogleCartItemQty(product._id, 'plus')} className='p-1 bg-gray-200 rounded'>
                      <AiOutlinePlus />
                    </button>
                  </div>
                  <button onClick={() => onRemove(product)} className='text-red-500 text-lg'>
                    <TiDeleteOutline />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {cartItems.length > 0 && (
          <div className='mt-6'>
            <div className='flex justify-between text-lg font-semibold'>
              <h3>Subtotal</h3>
              <h3>${totalPrice}</h3>
            </div>
            <button
              onClick={handleCheckout}
              className='w-full mt-4 py-2 bg-blue-800 text-white text-center rounded-lg hover:bg-blue-950 transition'
            >
              Pay with Stripe
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;