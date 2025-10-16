import axios from '@/lib/axios'

export const loginUser = async (credential:any) =>{
    try {
        const res = await axios.post(`/auth/google/secret`,{
            authID: credential,
        })
        return res;
    } catch (err) {
        console.log(`Failed to login user: ${err}`)
    }
}

export const getAuthenticatedUser = async () =>{
    try {
        const res = await axios.get('/auth/google/authenticated')
        return res;
    } catch (err) {
        console.log(`Failed to get authenticated user: ${err}`)
    }
}