import { RootState } from "@/components/Common/Navigation/Navbar";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import { useMemo } from "react";
import { ProductObjectInterface } from "@/components/Homepage/Products/Products";
import IndividualProduct from '@/components/IndividualProduct/Product'

export default function ProductPage() {
    const pathname: any = usePathname();

    const products = useSelector((state: RootState) => state.products);
    const product: ProductObjectInterface | undefined = useMemo(() => {
        if (pathname) {
            const number = Number(pathname.split('/')[2]) - 1;
            return products.productsArray[number];
        }
    }, [products.productsArray, pathname])






    if (products.error) {
        return <p className="text-center">Some Error Occured {products.error}</p>
    }

    if (products.loading) {
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