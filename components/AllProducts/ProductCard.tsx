import Image from "next/image";
import { ProductObjectInterface } from "../Homepage/Products/Products";
import Link from "next/link";


export default function ProductCard({ product }: { product: ProductObjectInterface }) {
    return <Link
        href={{
            pathname: '/products/[productid]',
            query: { productid: product.id }
        }}
        className="mx-5 my-2">
        <div className="p-4 w-52">

            <Image src={product.image} alt={product.description} width={250} height={250} className="w-40 h-44" />

            <h5>{product.title.length > 15 ? `${product.title.substring(0, 15)}...` : product.title}</h5>

        </div>
    </Link>
}