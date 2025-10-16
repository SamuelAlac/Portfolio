import axios from '@/lib/axios'

export const loginUser = async () =>{
    
}

export const getAuthenticatedUser = async () =>{
    try {
        const res = await axios.get('/auth/google/authenticated')
        return res;
    } catch (err) {
        console.log(`Failed to get authenticated user: ${err}`)
    }
}