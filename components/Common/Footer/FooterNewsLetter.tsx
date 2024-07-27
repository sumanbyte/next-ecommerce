import { FaFacebook, FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

export default function FooterNewsLetter() {
    return <div className="bg-gray-500">
        <div className="flex flex-col md:flex-row justify-between items-center bg-gray-500 py-10 px-5 max-w-7xl m-auto pt-10">
            <div className="flex w-full justify-center md:justify-normal">
                <input type="text" id="first_name" className="w-4/5 md:w-80 bg-gray-50 border border-gray-300 text-gray-900 text-sm  block p-2.5 placeholder:font-extrabold" placeholder="Subscribe to our NewsLetter" />
                <button className=' px-2 sm:px-5 md:px-20 py-1 sm:py-2 md:py-3  text-sm md:text-lg bg-secondary-500 uppercase font-extrabold'>SUBSCRIBE</button>
            </div>
            <div className="flex ">
                <div className="pt-4 md:py-0 px-4 text-2xl">
                    <FaFacebook />

                </div>
                <div className="pt-4 md:py-0 px-4 text-2xl">
                    <BsTwitterX />

                </div>
                <div className="pt-4 md:py-0 px-4 text-2xl">
                    <FaInstagram />

                </div>
            </div>
        </div>
    </div>

}