import Product from "./Product";
import styles from '@/styles/CustomScrollbar.module.css';
import { useGetProductsQuery } from '@/redux/apis/productsApiSlice';
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
    const {data, error, isLoading } = useGetProductsQuery({});

    if (error) {
        return <p>Some Error Occured {error.toString()}</p>
    }

    if (isLoading) {
        return <p>Loading...</p>
    }

    console.log(data);

    return (
        <div className="lg:my-20 md:my-16 sm:my-12 my-10 ">
            <h1 className="text-center lg:text- text-secondary-700 lg:text-4xl md:text-3xl sm:text-2xl text-xl font-montserrat font-extrabold lg:mb-20 md:mb-16 sm:mb-12 mb-10 tracking-wider">Featured Products</h1>
            <div className="block text-right p-2">
                <Link href={'/products'} className="bg-secondary-700 py-2 px-4 hover:bg-secondary-800 transition duration-300 text-white rounded-md">View all products</Link>
            </div>
            <div className={`flex overflow-x-scroll space-x-4 ${styles['custom-scrollbar']}`}>
                {data.slice(0, 10)?.map((product:any) => (
                    <Product key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}
