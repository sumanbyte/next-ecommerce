import { useGetProductsQuery } from "@/redux/apis/productsApiSlice";
import ProductCard from "../AllProducts/ProductCard";

const Search = ({ query }: { query: string | null}) => {

    const {data: products, error,  isLoading} = useGetProductsQuery(undefined);

    const searchResult = products?.filter((product: any) => {
        return product.title.toLowerCase().includes(query?.toLowerCase());
    });


    if (isLoading) {
        return <p>Loading...</p>
    }

    if(error){
        return <p>Something went wrong..</p>
    }

    return <div className="max-w-7xl m-auto px-5 py-5">
        <h1 className="text-3xl">Search <span className="text-blue-700">Page</span></h1>
        {query &&

            <h1 className="text-xl pb-8 pt-2">you searched for &quot;{query}&quot;</h1>
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