
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Image from 'next/image';
import cart, { changeQuantity } from '@/redux/entities/cart';
import { useGetCartsQuery } from '@/redux/apis/cartApiSlice';


const CheckoutPage: React.FC = () => {
  const dispatch = useDispatch();
  const {data:cartItems} = useGetCartsQuery({});

  

  console.log(cartItems);
  return (
    <div className='max-w-7xl  m-auto'>
      <div className='mx-9'>

        <h1 className='py-5 text-3xl'>Checkout <span className='text-primary-600'>Page</span></h1>
        <div>

          <div className='bg-white grid grid-cols-4 justify-items-center py-5 mb-5'>
            <p>Product</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Subtotal</p>
          </div>
          {
            cartItems &&
            cartItems.map((cartItem: any) => {
              return <div key={cartItem._id} className='bg-white grid grid-cols-4 items-center justify-items-center py-5 text-center'>
                <div className='grid grid-col-checkout w-full justify-items-center'>
                  <Image className='w-8 h-8 inline-block' src={cartItem.productId.image} width={50} height={30} alt={cartItem.productId.title} />
                  <p className='w-full text-left'>{cartItem.productId.title.length > 20 ? `${cartItem.productId.title.substring(0, 20)}...` : cartItem.productId.title}</p>
                </div>
                <div className=''>
                  <p>$ {cartItem.productId.price}</p>
                </div>
                <div className="flex items-center justify-center gap-5 my-4">
                  <button
                    onClick={() => {
                      dispatch(changeQuantity({
                        type: "LESS_QUANTITY",
                        productId: cartItem.productId.id
                      }))
                    }}
                    className="px-4 text-2xl rounded-sm"
                  >-</button>
                  <p>{cartItem.quantity}</p>
                  <button
                    onClick={() => {
                      dispatch(changeQuantity({
                        type: "ADD_QUANTITY",
                        productId: cartItem.productId.id
                      }))
                    }}
                    className="px-4 text-2xl rounded-sm"
                  >+</button>
                </div>
                <div className="">
                  <p>$ {(cartItem.productId.price * cartItem.quantity).toFixed(2)}</p>
                </div>
              </div>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default CheckoutPage