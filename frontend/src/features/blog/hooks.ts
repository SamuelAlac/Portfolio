import { useQuery } from "@tanstack/react-query"
import { getBlog } from "./api"

export const useBlog = () =>{
    return useQuery({
        queryKey: ['blog'],
        queryFn: getBlog,
        staleTime: 10000,
    })
}