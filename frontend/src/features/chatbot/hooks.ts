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
        onMutate: async (newMessage) =>{
            queryClient.cancelQueries({queryKey: ['chatHistory'] });
            const previousChat = queryClient.getQueryData(['chatHistory']);
            queryClient.setQueryData(['chatHistory'], (old: any)=>[
                ...(old || []),
                {
                    id: Date.now(),
                    type: 'human',
                    content: newMessage.input,
                },
            ]);
            return { previousChat };
        },
        onError: (_err, _newMessage, context) =>{
            if(context?.previousChat) {
                queryClient.setQueryData(['chatHistory'], context?.previousChat)
            }
        },
        onSettled: () =>{
            queryClient.invalidateQueries({ queryKey: ['chatHistory'] });
        },
    })
}