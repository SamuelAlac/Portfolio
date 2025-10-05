import { getContributions } from "@/features/github/api"
import { getProjects } from "@/features/github/api"
import { useQuery } from "@tanstack/react-query"

export const useProjects = () =>{
    return useQuery({
        queryKey: ['projects'],
        queryFn: getProjects,
        staleTime: 10000,
    })
}

export const useContributions = () =>{
    return useQuery({
        queryKey: ['contributions'],
        queryFn: getContributions,
        staleTime: 10000,
    })
}