import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { ProductsFetchResponse } from "../types/products-fetch-response";
import { useFilter } from "./useFilter";
import { generateQuery } from "@/util/graphQL-filter";
import { useDeferredValue } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'localhost:3333'


const fetcher = (query: string): AxiosPromise<ProductsFetchResponse> => {
    return axios.post(
        API_URL,
        {
            query
        }

    )
}

export function useProducts() {
    const { type, priority, search } = useFilter();
    const searchDeferred = useDeferredValue(search);
    const { data } = useQuery({
        queryFn: () => fetcher(generateQuery(type, priority)),
        queryKey: ['products', type, priority],
    });

    const products = data?.data?.data?.allProducts;
    const filteredProducts = products?.filter(product => product.name.toLowerCase().includes(searchDeferred.toLowerCase()))
    return {
        data: filteredProducts
    }
}