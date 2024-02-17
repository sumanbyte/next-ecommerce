import Image from "next/image";
import { ProductObjectInterface } from "./Products";
import Link from "next/link";

export default function Product({ product }: { product: ProductObjectInterface }) {
    const { title } = product;
    const updatedTitle = title.substring(0, 20);
    const hasDots = updatedTitle.length < title.length ? '...' : '';

    return (
        
        <div className="flex-none w-1/3 max-w-xs mx-3 my-2 px-4 flex flex-col justify-center items-center bg-white">
            <Link href={`/products/${product.id}`} key={product.id}>
            <div className="flex-grow flex flex-col items-center justify-center">
                <Image
                    src={product.image}
                    width={300}
                    height={400}
                    alt={product.title}
                    className="w-40 md:h-44"
                />
            </div>
            <div className="flex-grow flex flex-col justify-end">
                <p className="text-base mt-2">{updatedTitle}{hasDots}</p>
            </div>
        </Link>
        </div>

    );
}