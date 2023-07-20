import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { ProductsFetchResponse } from "../types/products-fetch-response";

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'localhost:3333'

const fetcher = (): AxiosPromise<ProductsFetchResponse> => {
    return axios.post(
        API_URL,
        {
            query: `
                query {
                    allProducts {
                        id
                        name
                        price_in_cents
                        image_url
                    }
                }
            `
        }

    )
}

export function useProducts() {
    const { data } = useQuery({
        queryFn: fetcher,
        queryKey: ['products'],
    });
    return {
        data: data?.data?.data?.allProducts
    }
}