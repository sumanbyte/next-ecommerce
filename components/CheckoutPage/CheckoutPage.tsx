import Image from 'next/image';
import {
  useDeleteFromCartMutation,
  useShowCartsQuery,
  useUpdateCartMutation,
} from '@/redux/apis/cartApiSlice';
import { MdDelete } from "react-icons/md";

const CheckoutPage: React.FC = () => {
  const { data: cartItems, isLoading, error } = useShowCartsQuery(undefined);

  const [updateCart] = useUpdateCartMutation();
  const [deleteFromCart] = useDeleteFromCartMutation();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading carts</div>;

  const handleIncreaseQuantity = (productId: any) => {
    updateCart({ productId, quantity: 'INCREASE_QUANTITY' });
  };

  const handleDecreaseQuantity = (productId: any) => {
    updateCart({ productId, quantity: 'DECREASE_QUANTITY' });
  };

  return (
    <div className='max-w-7xl m-auto'>
      <div className='mx-9'>
        <h1 className='py-5 text-3xl'>Checkout <span className='text-primary-600'>Page</span></h1>
        <div>
          <div className='bg-white grid grid-cols-[2fr_1fr_1fr_1fr_1fr] justify-items-center py-5 mb-5'>
            <p>Product</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Subtotal</p>
            <p>Action</p>
          </div>
          {cartItems?.map((cartItem: any) => (
            <div key={cartItem._id} className='bg-white grid grid-cols-[2fr_1fr_1fr_1fr_1fr] justify-items-center items-center py-5 text-center'>
              <div className='grid grid-col-checkout w-full justify-items-center'>
                <Image className='w-8 h-8 inline-block' src={cartItem.productId.image} width={50} height={30} alt={cartItem.productId.title} />
                <p className='w-full text-left'>
                  {cartItem.productId.title.length > 40 ? `${cartItem.productId.title.substring(0, 40)}...` : cartItem.productId.title}
                </p>
              </div>
              <div>
                <p>$ {cartItem.productId.price}</p>
              </div>
              <div className="flex items-center gap-5">
                <button
                  onClick={() => handleDecreaseQuantity(cartItem.productId._id)}
                  className="px-4 text-2xl rounded-sm"
                >-</button>
                <p className='text-lg'>{cartItem.quantity}</p>
                <button
                  onClick={() => handleIncreaseQuantity(cartItem.productId._id)}
                  className="px-4 text-2xl rounded-sm"
                >+</button>
              </div>
              <div>
                <p>$ {(cartItem.productId.price * cartItem.quantity).toFixed(2)}</p>
              </div>
              <div onClick={() => deleteFromCart({ cartId: cartItem._id })}>
                <MdDelete className='hover:text-red-600 duration-300 transition-all cursor-pointer' size={20} />
              </div>
            </div>
          ))}
          <div className='bg-white grid grid-cols-[2fr_1fr_1fr_1fr_1fr] justify-items-center mt-2 py-5 mb-5'>
            <p>Total</p>
            <p></p>
            <p></p>
            <p>$ {cartItems?.reduce((acc: number, cartItem: any) => {
              return acc + (cartItem.productId.price * cartItem.quantity);
            }, 0).toFixed(2)}</p>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
