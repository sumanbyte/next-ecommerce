"use client";
import { BiCart, BiChevronDown } from 'react-icons/bi'
import { FiSearch } from 'react-icons/fi'
import { CgProfile } from 'react-icons/cg'
import { AiOutlineMenu } from 'react-icons/ai'
import { RxCross1 } from 'react-icons/rx'
import { Brands, Categories, Collections, Deals_And_Offers, Options, Support } from '../../Utilities/NavLinks';
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Link from 'next/link'
import NavModal from './NavModal'
import Cart from '../Cart/Cart'
import { changeNav } from '@/redux/entities/navbar'
import Category from './Category'
import { ProductObjectInterface } from '@/components/Homepage/Products/Products';
import AxiosInstance from '@/lib/AxiosInstance'
import { updateAuthStatus } from '@/redux/entities/auth'
import { toast } from 'react-toastify'
import Spinner from '@/components/Spinner/Spinner'
import { IoLogOutOutline } from "react-icons/io5";
import { useRouter } from 'next/router'
import { AppDispatch } from "@/redux/store/store"
import { cartsApi, useShowCartsQuery } from '@/redux/apis/cartApiSlice';


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
    mobilemenu: boolean;
}


export interface RootState {
    navbar: NavbarState;
    products: {
        productsArray: ProductObjectInterface[];
        loading: boolean;
        error: boolean;
    }
}

export default function Navbar() {
    const navbarState = useSelector((state: RootState) => state.navbar);
    const { data, isLoading, error } = useShowCartsQuery(undefined);
    const auth = useSelector((state: any) => state.auth);
    const router = useRouter();
    const dispatch = useDispatch<AppDispatch>();


    useEffect(() => {
        AxiosInstance.get("/api/auth/verify").then(res => {
            dispatch(updateAuthStatus(res.data.isAuthenticated))
        })
            .catch(e => {
                dispatch(updateAuthStatus(false));
            })
    }, []);


    const logout = async () => {
        try {
            const response = await AxiosInstance.get('/api/auth/logout');
            dispatch(updateAuthStatus(false));
            dispatch(cartsApi.util.resetApiState());
            toast.success(response.data.message);
            router.push("/");

        } catch (e: any) {
            toast.error(e.response.data.message);
        }
    }

    const shouldShowNavModal = () => {
        return (navbarState.categories || navbarState.brands || navbarState.collections || navbarState.deals_and_offers || navbarState.support || navbarState.options || navbarState.search) && !navbarState.hasMobile;
    }

    const modalLeaveState = () => {
        if (!navbarState.search && !navbarState.cart) {
            dispatch(changeNav({ type: 0 }));
        }
    }
    return (
        <>
            <header onMouseLeave={modalLeaveState} className=' bg-primary-500 m-auto'>
                <nav className="max-w-7xl m-auto w-full h-14 text-primary-100 flex items-center justify-between lg:justify-normal">
                    <div className='block lg:hidden w-1/3'>
                        {
                            !navbarState.mobilemenu ?
                                <AiOutlineMenu className='text-xl mx-2' onClick={() => {
                                    dispatch(changeNav({ type: "9" }))

                                }} />
                                :
                                <RxCross1 className='text-xl mx-2' onClick={() => {
                                    dispatch(changeNav({ type: "9" }))

                                }} />
                        }
                    </div>
                    <div className="font-comfortaa">
                        <Link href={'/'}>
                            <h1 className='font-bold text-2xl cursor-pointer ml-0 lg:ml-8 text-center lg:text-left'>ShopWave</h1>
                        </Link>
                    </div>

                    <div className='w-1/3 lg:w-full flex justify-end lg:justify-between ml-0 mr-0 lg:ml-6 lg:mr-8'>
                        <div className='gap-2 lg:gap-3  font-size text-base font-medium font-chakrapetch hidden lg:flex'>

                            <Category type='1' text='categories' state={navbarState.categories} />
                            <Category type='2' text='brands' state={navbarState.brands} />
                            <Category type='3' text='collections' state={navbarState.collections} />
                            <Category type='4' text='deals_and_offers' state={navbarState.deals_and_offers} />
                            <Category type='5' text='support' state={navbarState.support} />
                            <Category type='6' text='options' state={navbarState.options} />

                        </div>

                        <div>
                            <div className='flex gap-7 items-center'>
                                <div className='flex items-center gap-5 cursor-pointer hover:text-red-700 duration-500 mr-2' onClick={() => {
                                    dispatch(changeNav({ type: '7', selectedText: 'search' }))
                                }}>
                                    <FiSearch className='text-2xl font-bold' />
                                    <span className='text-sm font-light font-montserrat hidden lg:block'>Search</span>
                                </div>
                                <div className='hover:text-red-700 duration-500 cursor-pointer hidden lg:block'>
                                    {
                                        auth.isLoading && !auth.isAuthenticated ? <Spinner size={24} /> :
                                            auth.isAuthenticated && !auth.isLoading ? <div onClick={logout} title="Logout">
                                                <IoLogOutOutline className='text-2xl font-bold' />
                                            </div> :
                                                <Link href={'/auth/login'}>
                                                    <CgProfile className='text-2xl font-bold' />
                                                </Link>
                                    }
                                </div>
                                {
                                    auth.isAuthenticated &&
                                    <div className='hover:text-red-700 duration-500 cursor-pointer mr-4 hidden lg:block' onClick={() => {
                                        dispatch(changeNav({ type: '8' }))
                                    }}>
                                        <div className='relative'>
                                            <BiCart className='text-2xl font-bold' />
                                            <span className='absolute -top-3 -right-2'>{!isLoading && !error ? data.length : 0}</span>

                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </nav>


                {shouldShowNavModal() && <NavModal title={navbarState.selectedText} />}
                <Cart />

            </header>
            <div className={`bg-primary-400 text-primary-100 w-[300px] h-mobileNav overflow-scroll absolute z-10 transform transition duration-500 ${navbarState.mobilemenu ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="menus" >

                    <div className="menu flex flex-col mx-2 my-5">
                        <div >
                            <input type="checkbox" className="hidden" id='checkbox' checked={navbarState.categories} readOnly />
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
                            <input type="checkbox" className="hidden" id='checkbox' checked={navbarState.brands} readOnly />
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
                            <input type="checkbox" className="hidden" id='checkbox' checked={navbarState.collections} readOnly />
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
                            <input type="checkbox" className="hidden" id='checkbox' checked={navbarState.deals_and_offers} readOnly />
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
                            <input type="checkbox" className="hidden" id='checkbox' checked={navbarState.support} readOnly />
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
                            <input type="checkbox" className="hidden" id='checkbox' checked={navbarState.options} readOnly />
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

                    <div className="menu flex mx-2 my-5 gap-2">
                        {auth.isLoading && !auth.isAuthenticated ? <Spinner size={24} /> : !auth.isAuthenticated ?
                            <>   <Link href={"/auth/login"} className='px-2 py-1 bg-primary-700'>Login</Link>
                                <Link href={"/auth/signup"} className='px-2 py-1 bg-secondary-700'>Signup</Link>
                            </>
                            : <>
                                <div onClick={() => {
                                    dispatch(changeNav({ type: '8' }))
                                }} className='px-3 py-2 bg-secondary-800 flex items-center justify-center gap-3 transition-transform hover:scale-105 active:scale-95'>
                                    <p className='text-sm'>View Carts</p>

                                    <div className='relative'>
                                        <BiCart className='text-sm font-bold' />
                                        <span className='absolute -top-3 -right-2 text-sm'>{!isLoading && !error ? data.length : 0}</span>

                                    </div>
                                </div>
                                <Link href={"#"} className='px-2 py-2 bg-red-500 text-sm transition-transform hover:scale-105 active:scale-95' onClick={logout}>Logout</Link>
                            </>
                        }
                    </div>



                </div>
            </div>
        </>
    )
}
