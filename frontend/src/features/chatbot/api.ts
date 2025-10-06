import axios from '@/lib/axios'

export const getChatHistory = async () =>{
    try{
        const res = await axios.get('/ai/history')
        return res.data;
    }catch(err){
        console.log(`Failed to get chat history: ${err}`)
    }
}

export const postChatMessage = async (messageData: { input: string }) =>{
    try {
        const res = await axios.post('/ai/message', messageData)
        return res.data;
    } catch (err) {
        console.log(`Failed to post chat message: ${err}`)
    }
}