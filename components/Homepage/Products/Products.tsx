import Product from "./Product";
import styles from "@/styles/CustomScrollbar.module.css";
import { useGetProductsQuery } from "@/redux/apis/productsApiSlice";
import Link from "next/link";
import Spinner from "@/components/Spinner/Spinner";
import { Skeleton } from "@/components/ui/skeleton";

export interface ProductObjectInterface {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  rating: {
    rate: number;
    count: number;
  };
  title: string;
}

export default function Products() {
  const { data, error, isLoading } = useGetProductsQuery({});

  if (error) {
    return <p>Some Error Occured {error.toString()}</p>;
  }

  if (isLoading) {
    return (
      <div className="w-full flex justify-center text-center">
        {/* <Skeleton className="h-[125px] w-[250px] rounded-xl" /> */}
      </div>
    );
  }

  return (
    <>

      <div className="lg:my-20 md:my-16 sm:my-12 my-10 max-w-7xl m-auto">
        <div className="h-full w-full">
            <Skeleton className="h-[300px] w-full rounded-xl" />
        </div>
        <div className="px-2 md:px-4">
          <h1 className="text-center text-secondary-700 lg:text-4xl md:text-3xl text-2xl font-montserrat font-extrabold lg:mb-20 md:mb-16 mb-5 tracking-wider">
            Featured Products
          </h1>
          <div className="block text-right mb-3">
            <Link
              href={"/products"}
              className="bg-secondary-700 py-2 px-2 md:px-4 hover:scale-105 active:scale-95 hover:bg-secondary-800 transition duration-300 text-white text-sm md:text-base"
            >
              View All
            </Link>
          </div>
          <div
            className={`flex overflow-x-scroll space-x-4 ${styles["custom-scrollbar"]}`}
          >
            {data.slice(0, 10)?.map((product: any) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
      {/* <div className="px-4">
                <Product product={data[0]} />
            </div> */}
    </>
  );
}
