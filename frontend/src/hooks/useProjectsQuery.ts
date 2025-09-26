import { getProjects } from "@/api/projects"
import { useQuery } from "@tanstack/react-query"

export const useProjectsQuery = () =>{
    return useQuery({
        queryKey: ['projects'],
        queryFn: getProjects,
        staleTime: 10000,
    })
}