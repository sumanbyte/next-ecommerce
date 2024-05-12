import Product from "./Product";
import styles from '@/styles/CustomScrollbar.module.css';
import { useSelector } from "react-redux";
import { RootState } from "@/components/Common/Navigation/Navbar";
import Link from "next/link";

export interface ProductObjectInterface {
    id: number;
    category: string;
    description: string;
    image: string;
    price: number;
    rating: {
        rate: number;
        count: number;
    };
    title: string;
}

export default function Products() {
    const products = useSelector((state: RootState) => state.products);
    
    

    if(products.error){
        return <p>Some Error Occured {products.error}</p>
    }

    if(products.loading){
        return <p>Loading...</p>
    }

    return (
        <div className="lg:my-20 md:my-16 sm:my-12 my-10 ">
            <h1 className="text-center lg:text- text-secondary-700 lg:text-4xl md:text-3xl sm:text-2xl text-xl font-montserrat font-extrabold lg:mb-20 md:mb-16 sm:mb-12 mb-10 tracking-wider">Featured Products</h1>
            <Link href={'/products'}>View all products</Link>
            <div className={`flex overflow-x-scroll space-x-4 ${styles['custom-scrollbar']}`}>
                {products.productsArray.slice(0, 10)?.map((product) => (
                    <Product key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}
