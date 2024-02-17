import { RootState } from "@/components/Common/Navigation/Navbar";
import { usePathname } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useMemo,  } from "react";
import { AppDispatch, setProducts } from "@/redux/entities/products";
import { ProductObjectInterface } from "@/components/Homepage/Products/Products";
import IndividualProduct from '@/components/IndividualProduct/Product'

export default function ProductPage() {
    const pathname:any = usePathname();

    const products = useSelector((state: RootState) => state.products);
    const product: ProductObjectInterface | undefined = useMemo(()=> {
        if(pathname){
            const number = Number(pathname.split('/')[2])-1;
            return products.productsArray[number];
        } 
    }, [products.productsArray, pathname])

    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        const action: ReturnType<typeof dispatch> = dispatch(setProducts());

        if (action && typeof action === 'object' && 'then' in action) {
            (action as Promise<any>).then((resolvedAction: any) => {
                console.log('Thunk resolvedAction: ', resolvedAction);
            });
        }
    }, [dispatch]);

    

    if (products.error) {
        return <p className="text-center">Some Error Occured {products.error}</p>
    }

    if (products.loading) {
        return <p className="text-center">Loading...</p>
    }

    return <div className="max-w-7xl mx-auto mt-10">
        {
            product && <>
            
            <IndividualProduct product={{...product, quantity: 1}} />
            
            </>
        }
    </div>
}