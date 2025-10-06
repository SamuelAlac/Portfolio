import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { getChatHistory, postChatMessage } from "./api"

export const useChatHistory = () =>{
    return useQuery({
        queryKey: ['chatHistory'],
        queryFn: getChatHistory,
    })
}

export const usePostChatMessage = () =>{
    const queryClient = useQueryClient();
    return useMutation({
        mutationKey: ['postMessage'],
        mutationFn: postChatMessage,
        onSuccess: () =>{
            queryClient.invalidateQueries({queryKey: ['chatHistory'] });
        },
        onError: (err) =>{
            console.log(`Error creating post chat message mutation: ${err}`);
        },
    })
}