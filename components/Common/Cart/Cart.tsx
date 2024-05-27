import { RxCross2 } from 'react-icons/rx'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../Navigation/Navbar';
import { changeNav } from '@/redux/entities/navbar';
import Link from 'next/link'

export default function Cart() {
    const navbarState = useSelector((state: RootState) => state.navbar);
    const cartState = useSelector((state: any) => state.cart.items);
    const auth = useSelector((state: any) => state.auth);

    const dispatch = useDispatch();

    const showCartItems = () => {
        if (cartState) {
            return cartState.map((product: any) => {
                return <p key={product.id}>{product.title}</p>
            })
        } else {
            return <p className='text-center'>Your Cart is currently empty.</p>
        }
    }


    return (
        <div className={`bg-secondary-300 p-2 h-screen w-96 absolute z-10 right-0 top-0 overflow-x-hidden transform ${navbarState.cart === false ? 'translate-x-full' : ''} transition duration-500`}>

            <h1 className='text-3xl relative'>Your Cart <span>
                <RxCross2 className='inline absolute right-1 cursor-pointer' onClick={() => {
                    dispatch(changeNav({ type: '8' }))
                }} />
            </span></h1>
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
                : <p>You need to be logged in for checkout option</p>
                }
            </div>
        </div>
    )

}