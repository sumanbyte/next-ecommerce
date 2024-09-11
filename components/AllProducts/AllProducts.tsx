import ProductCard from "./ProductCard";

export default function AllProducts({products}: {products: any}) {

    if (products.error) {
        return <p className="text-center">Some Error Occured {products.error}</p>
    }

    if (products.isLoading) {
        return <p className="text-center">Loading...</p>
    }

    return (
        <div className="custom-grid-layout gap-5 md:gap-8 flex-wrap pb-10">
            {
                products.data?.map((product:any) => {
                    return <ProductCard key={product.id} product={product}/>
                })
            }
        </div>
    )
}