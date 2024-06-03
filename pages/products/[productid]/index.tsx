import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { ProductObjectInterface } from "@/components/Homepage/Products/Products";
import IndividualProduct from '@/components/IndividualProduct/Product';
import { useGetProductsQuery } from "@/redux/apis/productsApiSlice";




export default function ProductPage() {
    const pathname: any = usePathname();
    const {data: products, error, isLoading}= useGetProductsQuery({});
    

    const product: ProductObjectInterface | undefined = useMemo(() => {
        if (pathname) {
            const number = Number(pathname.split('/')[2]);
            if(products && products.length > 0)
            return products.find((product:any) => product.id === number)
        }
    }, [products, pathname])



    if (error) {
        return <p className="text-center">Some Error Occured {products.error}</p>
    }

    if (isLoading) {
        return <p className="text-center">Loading...</p>
    }

    return <div className="max-w-7xl mx-auto mt-10">
        {
            product && <>

                <IndividualProduct product={{ ...product, quantity: 1 }} />

            </>
        }
    </div>
}