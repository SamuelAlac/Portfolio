import { getContributions } from "@/api/contributions"
import { useQuery } from "@tanstack/react-query"

export const useContributionsQuery = () =>{
    return useQuery({
        queryKey: ['contributions'],
        queryFn: getContributions,
        staleTime: 10000,
    })
}