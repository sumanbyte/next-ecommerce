import Image from "next/image";
import { ProductObjectInterface } from "./Products";
import Link from "next/link";

export default function Product({ product }: { product: ProductObjectInterface }) {
    const { title } = product;
    const updatedTitle = title.substring(0, 19);
    const hasDots = updatedTitle.length < title.length ? '...' : '';

    return (
        
        <div className="flex-none w-48 md:w-56 h-56 md:h-60 flex flex-col py-4 bg-white">
            <Link href={`/products/${product.id}`} key={product.id} className="">
            <div className="flex-grow flex flex-col items-center justify-center h-40 md:h-44 w-full px-4">
                <Image
                    src={product.image}
                    width={300}
                    height={400}
                    alt={product.title}
                    className="w-full h-full object-contain"
                />
            </div>
            <div className="flex-grow flex flex-col justify-end px-2 text-center">
                <p className="text-base mt-4">{updatedTitle}{hasDots}</p>
            </div>
        </Link>
        </div>
    );
}