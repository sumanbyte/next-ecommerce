"use client";

import Image from "next/image";
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { useAddToCartMutation } from "@/redux/apis/cartApiSlice";

export default function Product({ product }: { product: any }) {
    const router = useRouter();
    const auth = useSelector((state: any) => state.auth);
    const [addToCartBackend] = useAddToCartMutation();

    const cartFunction = async () => {
        if (auth.isAuthenticated) {
            try {
                // api call for adding to cart in the database
                addToCartBackend({ productId: product, quantity: 1 });
                // updating the redux store
                toast.success("Item added to the cart")

            } catch (e: any) {
                toast.info(e.response.data.message)
            }
        } else {
            let cartItems: any[] = localStorage.getItem("cartItems") as any || [];

            if (localStorage.getItem("cartItems")) {
                if (JSON.parse(localStorage.getItem("cartItems")!)) {
                    let parsedItems = JSON.parse(cartItems as any);
                    const index = parsedItems.findIndex((item: any) => item.id === product.id);
                    if (index < 0) {
                        parsedItems.push(product);
                        localStorage.setItem("cartItems", JSON.stringify(parsedItems));
                        toast.success("Item added to the cart successfully")
                    } else {
                        toast.info("Item already in your cart");
                    }
                }
            } else {
                cartItems.push(product);
                localStorage.setItem("cartItems", JSON.stringify(cartItems));
                toast.success("Item added to the cart successfully")
            }
        }
    }

    const buyFunction = () => {
        if (auth.isAuthenticated) {
            addToCartBackend({ productId: product, quantity: 1 })
            router.push("/checkout");
        } else {
            toast.info("Please login to continue your purchase");
            router.push("/login");
        }
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