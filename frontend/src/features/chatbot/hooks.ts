import { useQuery } from "@tanstack/react-query"
import { getChatHistory } from "./api"

export const useChatHistory = () =>{
    return useQuery({
        queryKey: ['chatHistory'],
        queryFn: getChatHistory,
    })
}