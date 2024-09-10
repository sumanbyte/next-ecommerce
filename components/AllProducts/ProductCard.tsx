import Image from "next/image";
import { ProductObjectInterface } from "../Homepage/Products/Products";
import Link from "next/link";
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";

export default function ProductCard({ product }: { product: ProductObjectInterface }) {
    return <div className="w-60 h-72 bg-white p-4 shadow-customproducts">
        <Link
            href={{
                pathname: '/products/[productid]',
                query: { productid: product.id }
            }}
            className="">
            <div className="h-full w-full">
                <Image src={product.image} alt={product.description} width={250} height={250} className="w-full h-40 object-contain mb-4" />
                <h5 className="font-bold text-lg mb-4">{product.title.length > 15 ? `${product.title.substring(0, 15)}...` : product.title}</h5>
                <div className="flex justify-between items-center">
                    <div>
                        {
                            Array.from({ length: 5 }, (_, index) => {
                                let number = index + 0.5;
                                let { rate } = product.rating;
                                return <div key={index} className="inline-block mr-0.5">
                                    {
                                        rate >= index + 1 ? <IoIosStar className="text-xl text-yellow-500" /> : rate >= number ? <IoIosStarHalf className="text-xl text-yellow-500" /> : <IoIosStarOutline className="text-xl text-yellow-500" />
                                    }

                                </div>

                            })
                        }
                    </div>
                    <p className="text-2xl">${product.price}</p>
                </div>
            </div>
        </Link>
    </div>
}