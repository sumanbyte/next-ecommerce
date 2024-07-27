import { RxCross2 } from 'react-icons/rx'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../Navigation/Navbar';
import { changeNav } from '@/redux/entities/navbar';
import Link from 'next/link'
import { useShowCartsQuery } from '@/redux/apis/cartApiSlice';

export default function Cart() {
    const navbarState = useSelector((state: RootState) => state.navbar);
    const dispatch = useDispatch();
    const auth = useSelector((state: any) => state.auth);
    const { data: cartState } = useShowCartsQuery(undefined);

    const showCartItems = () => {
        if (cartState) {
            return cartState.map((product: any) => {
                return <p className='text-sm md:text-base px-2 py-2' key={product._id}>{product.productId.title}</p>
            })
        } else {
            return <p className='text-sm md:text-base text-center'>Your Cart is currently empty.</p>
        }
    }

    return (
        <div className={`bg-white p-2 w-60 md:w-96 z-10 h-screen fixed top-0 transition-all ${navbarState.cart ? 'right-0' : '-right-60 md:-right-96'} duration-500 ease-in-out`}>
            <h1 className='text-xl md:text-3xl relative'>Your <span className='text-blue-600'>Cart</span>
                <RxCross2 className='inline absolute right-1 cursor-pointer' onClick={() => {
                    dispatch(changeNav({ type: '8' }))
                }} />
            </h1>
            <hr />
            {
                showCartItems()
            }
            <div>
                {
                    auth.isAuthenticated ?
                        <Link href={'/checkout'}>
                            <button className='bg-primary-700 hover:bg-primary-800 hover:scale-105 active:scale-95 transition text-white px-5 py-2'
                                onClick={() => { dispatch(changeNav({ type: '8' })) }}

                            >Checkout</button>
                        </Link>
                        : <p className='text-sm md:text-base text-primary-600'>You need to be logged in for checkout option</p>
                }
            </div>
        </div>
    )

}