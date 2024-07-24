import AllProducts from "@/components/AllProducts/AllProducts";
import { useGetProductsQuery } from "@/redux/apis/productsApiSlice";

export default function ProductPage() {

    const products = useGetProductsQuery({});



    return <div className="">
        <div>
            <h1 className="text-center lg:text- text-secondary-700 lg:text-4xl md:text-3xl sm:text-2xl text-xl font-montserrat font-extrabold lg:mb-20 md:mb-16 sm:mb-12 mb-10 mt-10 tracking-wider">All Products</h1>
        </div>
        <div>
            <AllProducts products={products} />
        </div>
    </div>
}