import { FaFacebook, FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

export default function FooterNewsLetter() {
    return <div className="bg-gray-500">
        <div className=" py-10 max-w-7xl m-auto px-2 md:px-4">
            <div className="flex flex-col md:flex-row justify-between items-center ">

                <div className="flex w-full justify-center md:justify-normal">
                    <input type="text" id="first_name" className="w-full md:w-80 bg-gray-50 border border-gray-300 text-gray-900 text-sm  block p-1.5 md:p-2.5 placeholder:font-extrabold" placeholder="Subscribe to our NewsLetter" />
                    <button className='p-1.5  md:p-2.5 text-xs md:text-sm bg-secondary-500 uppercase font-extrabold'>SUBSCRIBE</button>
                </div>
                <div className="flex justify-start md:justify-end w-full mt-2">
                    <div className="pt-4 md:py-0 text-xl md:text-2xl">
                        <FaFacebook />

                    </div>
                    <div className="pt-4 md:py-0 pl-4 text-xl md:text-2xl">
                        <BsTwitterX />

                    </div>
                    <div className="pt-4 md:py-0 pl-4 text-xl md:text-2xl">
                        <FaInstagram />

                    </div>
                </div>
            </div>

        </div>
    </div>

}