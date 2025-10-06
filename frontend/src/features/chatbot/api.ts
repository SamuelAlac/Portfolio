import axios from '@/lib/axios'

export const getChatHistory = async () =>{
    try{
        const res = await axios.get('/ai/history')
        return res.data;
    }catch(err){
        console.log(`Failed to get chat history: ${err}`)
    }
}

export const postChatMessage = async () =>{
    try {
        
    } catch (err) {
        console.log(`Failed to post chat message: ${err}`)
    }
}