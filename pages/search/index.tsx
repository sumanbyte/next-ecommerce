"use client";
import Search from "@/components/SearchPage/SearchPage"
import { useSearchParams } from "next/navigation";
import { useSelector } from "react-redux";

const SearchPage = () => {
    const searchParams = useSearchParams();
    const searchQuery = searchParams.get("q")
    const products = useSelector((state: any) => state.products);
    
    return <>
        <Search query={searchQuery} />
    </>
}

export default SearchPage;