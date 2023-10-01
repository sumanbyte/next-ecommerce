import {RxCross2} from 'react-icons/rx'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../Navigation/Navbar';
import { changeNav } from '@/redux/entities/navbar';

export default function Cart(){
    const navbarState = useSelector((state:RootState) => state.navbar);
    const dispatch = useDispatch();
    
    return (
        <div className={`bg-red-300 p-2 h-screen w-96 absolute z-10 right-0 top-0 overflow-x-hidden transform ${navbarState.cart === false ?  'translate-x-full': ''} transition duration-500`}>

                <h1 className='text-3xl relative'>Your Cart <span>
                    <RxCross2 className='inline absolute right-1 cursor-pointer' onClick={()=> {
                        dispatch(changeNav({type: '8'}))
                    }} />
                </span></h1>
                <hr />
                <p className='text-center'>Your Cart is currently empty.</p>
        </div>
    )

}