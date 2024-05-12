import ProductCard from "../AllProducts/ProductCard";

const Search = ({ query, products }: { query: string | null, products: any }) => {
    const searchResult = products.productsArray.filter((product: any) => {
        return product.title.toLowerCase().includes(query?.toLowerCase());
    });


    console.log(products)

    if (products.loading) {
        return <p>Loading...</p>
    }

    return <div className="max-w-7xl m-auto py-5">
        <h1 className="text-3xl">SearchPage</h1>
        {query &&

            <h1 className="text-3xl text-center pb-8">you searched for &quot;{query}&quot;</h1>
        }
        {
            searchResult.length > 0 ? <>
                <div className="flex flex-wrap">
                    {searchResult.map((product: any, index: number) => {
                        return <ProductCard key={index} product={product} />
                    })}
                </div>

            </> : <>
                <h1 className="text-3xl text-center py-8">No results found.</h1>
            </>

        }


    </div>
}

export default Search