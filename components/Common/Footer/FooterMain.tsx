
export default function FooterMain() {


    return <div className="bg-gray-700">
        <div className="flex items-center md:items-start sm:flex-row flex-wrap justify-between px-2 md:px-4 bg-gray-700 py-10 max-w-7xl m-auto  gap-4 md:gap-10">
            <div className="text-white my-5 self-start">
                <h2 className="font-medium">Shopping Services</h2>
                <ul>
                    <li className="py-1 text-sm"><a href="">Help Center</a></li>
                    <li className="py-1 text-sm"><a href="">Returns and Exchanges</a></li>
                    <li className="py-1 text-sm"><a href="">Shipping Information</a></li>
                    <li className="py-1 text-sm"><a href="">FAQs</a></li>
                </ul>
            </div>
            <div className="text-white my-5 self-start">
                <h2 className=" font-medium">About</h2>
                <ul>
                    <li className="py-1 text-sm"><a href="">Our Story</a></li>
                    <li className="py-1 text-sm"><a href="">Reviews</a></li>
                    <li className="py-1 text-sm"><a href="">Careers</a></li>
                    <li className="py-1 text-sm"><a href="">Financing</a></li>
                    <li className="py-1 text-sm"><a href="">Awards and Recognition</a></li>
                    <li className="py-1 text-sm"><a href="">Community Involvement</a></li>
                </ul>
            </div>
            <div className="text-white my-5 self-start">
                <h2 className=" font-medium">Resources</h2>
                <ul>
                    <li className="py-1 text-sm"><a href="">Look up Order Status</a></li>
                    <li className="py-1 text-sm"><a href="">Assembly Instructions</a></li>
                    <li className="py-1 text-sm"><a href="">Shipping and Delivery</a></li>
                    <li className="py-1 text-sm"><a href="">Refer a Friend</a></li>
                </ul>
            </div>
            <div className="text-white my-5 self-start">
                <h2 className=" font-medium">Contact Customer Experience</h2>
                <p className="py-1 text-sm">Email: support@shopwave.com</p>
                <p className="py-1 text-sm">Hours: </p>
                <p className="py-1 text-sm">Monday to Friday --- 10am to 6pm EST</p>
                <p className="py-1 text-sm">Saturday to Sunday --- 10am to 2pm EST</p>
            </div>
        </div>
    </div>
}