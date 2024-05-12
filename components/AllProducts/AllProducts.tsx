
import ProductCard from "./ProductCard";

export default function AllProducts({products}: {products: any}) {

    

    

    if (products.error) {
        return <p className="text-center">Some Error Occured {products.error}</p>
    }

    if (products.loading) {
        return <p className="text-center">Loading...</p>
    }

    return (
        <div className="flex max-w-7xl m-auto flex-wrap">
            {
                products.productsArray?.map((product:any) => {
                    return <ProductCard key={product.id} product={product}/>
                })
            }
        </div>
    )
}