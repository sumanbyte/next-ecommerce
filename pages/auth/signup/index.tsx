"use client";
import AxiosInstance from "@/lib/AxiosInstance";
import { useAddToCartsMutation } from "@/redux/apis/cartApiSlice";
import { updateAuthStatus } from "@/redux/entities/auth";
import Link from "next/link";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";


export default function SignupPage() {
    const [data, setData] = useState({ name: "", email: "", password: "" });
    const router = useRouter();
    const dispatch = useDispatch();
    const [addToCarts] = useAddToCartsMutation();
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const signup = async (e: any) => {
        e.preventDefault();
        
        try {
            const response = await AxiosInstance.post('/api/auth/signup', data);

            if(sessionStorage.getItem("cartItems")){
                let items = JSON.parse(sessionStorage.getItem("cartItems")!);
                if(items.length > 0){
                    addToCarts(items);
                    sessionStorage.removeItem("cartItems");
                }
            }

            console.log(response.data)

            if(response.data.success){
                sessionStorage.setItem("email", JSON.stringify(data.email));
                router.push("/auth/verification")
                toast.success(response.data.message);
            }else{
                toast.info("Some error occured.")
            }

        } catch (e: any) {
            toast.error(e.response.data.message);
        }
    }

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 mt-10">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h1 className='font-bold text-2xl cursor-pointer text-center font-comfortaa'>ShopWave</h1>
                <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Sign up to your account
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" action="#" onSubmit={signup} method="POST">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                            Name
                        </label>
                        <div className="mt-2">
                            <input
                                id="name"
                                name="name"
                                type="text"
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                value={data.name}
                                onChange={onChange}
                            />
                        </div>
                    </div>


                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                            Email address
                        </label>
                        <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                value={data.email}
                                onChange={onChange}
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                Password
                            </label>
                        </div>
                        <div className="mt-2">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                value={data.password}
                                onChange={onChange}
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Sign up
                        </button>
                    </div>
                </form>

                <p className="mt-10 text-center text-sm text-gray-500">
                    Already have an account?{' '}
                    <Link href="/auth/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    )
}
