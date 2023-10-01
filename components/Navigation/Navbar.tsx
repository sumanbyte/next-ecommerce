import { BiCart, BiChevronDown } from 'react-icons/bi'
import { FiSearch } from 'react-icons/fi'
import { CgProfile } from 'react-icons/cg'
import { AiOutlineMenu } from 'react-icons/ai'
import { RxCross1 } from 'react-icons/rx'
import { Brands, Categories, Collections, Deals_And_Offers, Options, Support } from '../Utilities/NavLinks';
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Link from 'next/link'
import NavModal from './NavModal'
import Cart from '../Cart/Cart'
import { changeNav } from '@/redux/entities/navbar'
import Category from './Category'

interface NavbarState {
    categories: boolean;
    brands: boolean;
    collections: boolean;
    deals_and_offers: boolean;
    support: boolean;
    options: boolean;
    search: boolean;
    cart: boolean;
    selectedText: string;
    hasMobile: boolean;
}


export interface RootState {
    navbar: NavbarState;
}

export default function Navbar() {
    const navbarState = useSelector((state: RootState) => state.navbar);
    const dispatch = useDispatch();



    const shouldShowNavModal = () => {

        return (navbarState.categories || navbarState.brands || navbarState.collections || navbarState.deals_and_offers || navbarState.support || navbarState.options || navbarState.search) && !navbarState.hasMobile;
    }


    const modalLeaveState = () => {
        if (!navbarState.search && !navbarState.cart) {
            dispatch(changeNav({ type: 0 }));
        }
    }

    const [menu, showMenu] = useState(true);



    return (
        <>
            <header onMouseLeave={modalLeaveState}>

                <nav className="w-full h-14 bg-gray-300 flex items-center justify-between lg:justify-normal">
                    <div className='block lg:hidden w-1/3'>
                        {
                            menu ?
                                <AiOutlineMenu className='text-xl mx-2' onClick={() => showMenu((state) => !state)} />
                                :
                                <RxCross1 className='text-xl mx-2' onClick={() => showMenu((state) => !state)} />
                        }
                    </div>
                    <div className="font-comfortaa">
                        <h1 className='font-bold text-2xl cursor-pointer ml-0 lg:ml-8 text-center lg:text-left'>ShopWave</h1>
                    </div>

                    <div className='w-1/3 lg:w-full flex justify-end lg:justify-between ml-0 mr-0 lg:ml-6 lg:mr-8'>
                        <div className='gap-2 lg:gap-3 xl:gap-4 2xl:gap-11 font-size text-base font-medium font-chakrapetch hidden lg:flex'>

                            <Category type='1' text='categories' state={navbarState.categories} />
                            <Category type='2' text='brands' state={navbarState.brands} />
                            <Category type='3' text='collections' state={navbarState.collections} />
                            <Category type='4' text='deals_and_offers' state={navbarState.deals_and_offers} />
                            <Category type='5' text='support' state={navbarState.support} />
                            <Category type='6' text='options' state={navbarState.options} />




                        </div>

                        <div>
                            <div className='flex gap-7 items-center'>
                                <div className='flex items-center gap-5 cursor-pointer hover:text-red-700 duration-500' onClick={() => {
                                    dispatch(changeNav({ type: '7', selectedText: 'search' }))
                                }}>
                                    <FiSearch className='text-2xl font-bold' />
                                    <span className='text-sm font-light font-montserrat hidden lg:block'>Search</span>
                                </div>
                                <div className='hover:text-red-700 duration-500 cursor-pointer'>
                                    <Link href={'/login'}>
                                        <CgProfile className='text-2xl font-bold' />
                                    </Link>
                                </div>
                                <div className='hover:text-red-700 duration-500 cursor-pointer hidden md:block' onClick={() => {
                                    dispatch(changeNav({ type: '8' }))
                                }}>
                                    <BiCart className='text-2xl font-bold' />
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>


                {shouldShowNavModal() && <NavModal title={navbarState.selectedText} />}

                {navbarState.cart && <Cart />}
            </header>
            <div className={`bg-red-400 w-[300px] h-mobileNav overflow-scroll absolute z-10 ${!menu ? 'block' : 'hidden'}`}>
                <div className="menus" >

                    <div className="menu flex flex-col mx-2 my-5">
                        <div >
                            <input type="checkbox" className="hidden" id='checkbox' checked={navbarState.categories} />
                            <label className='text-xl' htmlFor="checkbox" onClick={() => { dispatch(changeNav({ type: '1', hasMobile: true })) }}>Categories <span><BiChevronDown className={`inline transform ${navbarState.categories ? 'rotate-180' : ''}`} /></span></label>
                        </div>
                        <div className="sub-menu">
                            {
                                navbarState.categories &&
                                <div className='pl-2'>
                                    <Categories />
                                </div>
                            }
                        </div>
                    </div>

                    <div className="menu flex flex-col mx-2 my-5">
                        <div >
                            <input type="checkbox" className="hidden" id='checkbox' checked={navbarState.brands} />
                            <label className='text-xl' htmlFor="checkbox" onClick={() => { dispatch(changeNav({ type: '2', hasMobile: true })) }}>Brands <span><BiChevronDown className={`inline transform ${navbarState.brands ? 'rotate-180' : ''}`} /></span></label>
                        </div>
                        <div className="sub-menu">
                            {
                                navbarState.brands &&
                                <div className='pl-2'>
                                    <Brands />
                                </div>
                            }
                        </div>
                    </div>
                    <div className="menu flex flex-col mx-2 my-5">
                        <div >
                            <input type="checkbox" className="hidden" id='checkbox' checked={navbarState.collections} />
                            <label className='text-xl' htmlFor="checkbox" onClick={() => { dispatch(changeNav({ type: '3', hasMobile: true })) }}>Collections <span><BiChevronDown className={`inline transform ${navbarState.collections ? 'rotate-180' : ''}`} /></span></label>
                        </div>
                        <div className="sub-menu">
                            {
                                navbarState.collections &&
                                <div className='pl-2'>
                                    <Collections />
                                </div>
                            }
                        </div>
                    </div>

                    <div className="menu flex flex-col mx-2 my-5">
                        <div >
                            <input type="checkbox" className="hidden" id='checkbox' checked={navbarState.deals_and_offers} />
                            <label className='text-xl' htmlFor="checkbox" onClick={() => { dispatch(changeNav({ type: '4', hasMobile: true })) }}>Deals and Offers <span><BiChevronDown className={`inline transform ${navbarState.deals_and_offers ? 'rotate-180' : ''}`} /></span></label>
                        </div>
                        <div className="sub-menu">
                            {
                                navbarState.deals_and_offers &&
                                <div className='pl-2'>
                                    <Deals_And_Offers />
                                </div>
                            }
                        </div>
                    </div>
                    <div className="menu flex flex-col mx-2 my-5">
                        <div >
                            <input type="checkbox" className="hidden" id='checkbox' checked={navbarState.support} />
                            <label className='text-xl' htmlFor="checkbox" onClick={() => { dispatch(changeNav({ type: '5', hasMobile: true })) }}>Support <span><BiChevronDown className={`inline transform ${navbarState.support ? 'rotate-180' : ''}`} /></span></label>
                        </div>
                        <div className="sub-menu">
                            {
                                navbarState.support &&
                                <div className='pl-2'>
                                    <Support />
                                </div>
                            }
                        </div>
                    </div>

                    <div className="menu flex flex-col mx-2 my-5">
                        <div >
                            <input type="checkbox" className="hidden" id='checkbox' checked={navbarState.options} />
                            <label className='text-xl' htmlFor="checkbox" onClick={() => { dispatch(changeNav({ type: '6', hasMobile: true })) }}>Options <span><BiChevronDown className={`inline transform ${navbarState.options ? 'rotate-180' : ''}`} /></span></label>
                        </div>
                        <div className="sub-menu">
                            {
                                navbarState.options &&
                                <div className='pl-2'>
                                    <Options />
                                </div>
                            }
                        </div>
                    </div>

                </div>
            </div>
        </>


    )
}
