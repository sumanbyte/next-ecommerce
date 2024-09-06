import AxiosInstance from "@/lib/AxiosInstance";
import { useRouter } from "next/router";
import { FormEvent, useEffect, useState } from "react";
import { toast } from "react-toastify";

const ChangePassword = () => {
    const [processing, setProcessing] = useState(false);
    const router = useRouter();
    const query = router.query;
    const token = query.token?.toString() || "";
    const userId = query.userId?.toString() || "";

    const [data, setData] = useState({ password: '', cpassword: '' });

    const onChange = (e: any) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const changepassword = async (e: FormEvent<HTMLFormElement>, token: string, userId: string) => {
        e.preventDefault();
        if (data.password !== data.cpassword) {
            return toast.info("Password and confirm password dont't match")
        }
        setProcessing(true);
        try {
            const response = await AxiosInstance.post("/api/user/changepassword", { password: data.password, token, userId });
            if (response.data.success) {
                toast.success(response.data.message);
                router.push("/auth/login");
            }
        } catch (error: any) {
            console.log(error)
            toast.info(error.response.data.message)
        } finally {
            setProcessing(false);
        }

    }


    return (
        <>
            <p className="text-center bg-secondary-300 py-2">Please don&apos;t refresh the page until you change your password.</p>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 mt-10">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h1 className='font-bold text-2xl cursor-pointer text-center font-comfortaa'>ShopWave</h1>
                    <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Reset Password
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="POST" onSubmit={(e) => changepassword(e, token, userId)}>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                Password
                            </label>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="text"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    value={data.password}
                                    onChange={onChange}
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="cpassword" className="block text-sm font-medium leading-6 text-gray-900">
                                Confirm Password
                            </label>
                            <div className="mt-2">
                                <input
                                    id="cpassword"
                                    name="cpassword"
                                    type="text"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    value={data.cpassword}
                                    onChange={onChange}
                                />
                            </div>
                        </div>



                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                {!processing ? "Change Password" : "Please wait..."}
                            </button>
                        </div>
                    </form>


                </div>
            </div>
        </>
    )
}

export default ChangePassword;