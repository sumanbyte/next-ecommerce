import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/components/Common/Navigation/Navbar";
import { setProducts, AppDispatch } from "@/redux/entities/products"; // Make sure to import AppDispatch
import ProductCard from "./ProductCard";

export default function AllProducts() {
    const products = useSelector((state: RootState) => state.products);

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

    return (
        <div className="flex max-w-7xl m-auto flex-wrap">
            {
                products.productsArray?.map(product => {
                    return <ProductCard key={product.id} product={product}/>
                })
            }
        </div>
    )
}