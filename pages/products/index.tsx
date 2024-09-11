import AllProducts from "@/components/AllProducts/AllProducts";
import { useGetProductsQuery } from "@/redux/apis/productsApiSlice";

export default function ProductPage() {
    const products = useGetProductsQuery({});

    return <div className="max-w-7xl mx-auto">
        <div className="px-2 md:px-4 my-10">
            <h1 className="text-center text-secondary-700 lg:text-4xl md:text-3xl text-2xl font-montserrat font-extrabold lg:mb-20 md:mb-16 mb-5 tracking-wider">Browse all Products</h1>
        </div>
        <div className="px-2 md:px-4">
            <AllProducts products={products} />
        </div>
    </div>
}