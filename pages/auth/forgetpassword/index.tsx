import AxiosInstance from "@/lib/AxiosInstance";
import { FormEvent, useState } from "react";
import { toast } from "react-toastify";

const ForgetPassword = () => {
    const [data, setData] = useState({ email: '' });

    const onChange = (e: any) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const forgetpassword = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await AxiosInstance.post("/api/user/forgetpassword", { email: data.email });
            if (response.data.success) {
                toast.success(response.data.message);
                setData({ email: "" });
            }
        } catch (error:any) {
            console.log(error);
            toast.info(error.response.data.message)
        }
    }
    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 mt-10">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h1 className='font-bold text-2xl cursor-pointer text-center font-comfortaa'>ShopWave</h1>
                    <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Forget Password
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="POST" onSubmit={forgetpassword}>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="text"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    value={data.email}
                                    onChange={onChange}
                                />
                            </div>
                        </div>



                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Request
                            </button>
                        </div>
                    </form>


                </div>
            </div>
        </>
    )
}

export default ForgetPassword;