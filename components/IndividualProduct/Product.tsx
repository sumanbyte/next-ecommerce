"use client";

import Image from "next/image";
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/entities/cart";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import AxiosInstance from "@/lib/AxiosInstance";

export default function Product({ product }: { product: any }) {
    const dispatch = useDispatch();
    const router = useRouter();

    console.log(product);
    const [cartItems, setCartItems] = useState([]);
    
    
    useEffect(()=> {
        console.log(product);
        if(localStorage.getItem('cart')) {
            let cart = localStorage.getItem('cart')!;
            let items: any = JSON.parse(cart) || [];
            setCartItems((item) => [...item]);
        }
    }, [])
    
    const cartFunction = async () => {
        try {
        const response = await AxiosInstance.post("/api/user/cart", { productId: product._id, quantity: 1 });
        console.log(response);
        } catch (e: any) {
            toast.info(e.response.data.message)
        }
        console.log(product)
        // let cartItems: any = [];
        // if (localStorage.getItem('cart')) {
        //     let cart = localStorage.getItem('cart')!;
        //     let items: any = JSON.parse(cart) || [];
        //     cartItems.push(...items);
        // }

        // let foundProduct = cartItems.find((cartItem: any) => product.id === cartItem.id);
        // if (!foundProduct) {
        //     let currentProduct = { ...product, quantity: 1 }
        //     cartItems.push(currentProduct);
        //     dispatch(addToCart({ item: currentProduct }));
        //     toast.success('Successfully added to the cart')
        // } else {
        //     toast.info('Product already added to the cart')
        // }

        // localStorage.setItem('cart', JSON.stringify(cartItems));
        // console.log(cartItems)
    }

    const buyFunction = ()=> {
        let cartItems: any = [];
        if (localStorage.getItem('cart')) {
            let cart = localStorage.getItem('cart')!;
            let items: any = JSON.parse(cart) || [];
            cartItems.push(...items);
        }

        let foundProduct = cartItems.find((cartItem: any) => product.id === cartItem.id);
        if (!foundProduct) {
            let currentProduct = { ...product, quantity: 1 }
            cartItems.push(currentProduct);
            dispatch(addToCart({ item: currentProduct }));
        }
        
        localStorage.setItem('cart', JSON.stringify(cartItems));
        router.push("/checkout");
        
    }




    return <div className="flex flex-col md:flex-row items-center md:justify-around">
        <div >
            <Image className="w-60" src={product.image} alt={product.description} width={500} height={500} />
        </div>
        <div className="w-full px-5 mt-4 md:mt-0 md:w-1/2">
            <h1 className="font-bold text-2xl">{product.title}</h1>
            <p>{product.description}</p>
            <p className="my-2">Category: <span className="bg-secondary-700 px-2 py-2">{product.category}</span></p>
            <p className="text-3xl">&#36; {product.price}	</p>
            {
                Array.from({ length: 5 }, (_, index) => {
                    let number = index + 0.5;
                    let { rate } = product.rating;
                    return <div key={index} className="inline-block mr-2">
                        {
                            rate >= index + 1 ? <IoIosStar className="text-3xl text-yellow-500" /> : rate >= number ? <IoIosStarHalf className="text-3xl text-yellow-500" /> : <IoIosStarOutline className="text-3xl text-yellow-500" />
                        }

                    </div>

                })
            }
            <p>{product.rating.count} Reviews</p>
            
            <button onClick={cartFunction} className="mr-5 px-5 py-2 bg-primary-500 rounded-md transition-transform transform hover:scale-105 active:scale-95">Add to Cart</button>
            <button onClick={buyFunction} className="mr-5 px-5 py-2 bg-accent-500 rounded-md transition-transform transform hover:scale-105 active:scale-95">Buy Now</button>

        </div>
    </div>
}