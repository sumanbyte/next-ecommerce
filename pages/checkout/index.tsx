"use client";

import CheckoutPage from '@/components/CheckoutPage/CheckoutPage';
import AxiosInstance from '@/lib/AxiosInstance';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

export default function Checkout() {
    const router = useRouter();

    const logout = async ()=> {
        try{
            const response = await AxiosInstance.get('/api/auth/logout');
            toast.success(response.data.message)
            router.push("/");

        }catch(e:any){
            toast.error(e.response.data.message);
        }
    }
    return (
        <>
            <CheckoutPage />
            <button className='px-2 py-2 bg-red-500' onClick={logout}>Logout</button>
        </>
    );
}

