import axios from '@/lib/axios'

export const loginUser = async (credential:any, passcode: string) =>{
    try {
        const res = await axios.post(`/auth/google/secret`,{
            authID: credential,
            passcode,
        })
        return res.data;
    } catch (err) {
        console.log(`Failed to login user: ${err}`)
    }
}

export const getAuthenticatedUser = async () =>{
    try {
        const res = await axios.get('/auth/google/authenticated')
        return res.data.user;
    } catch (err) {
        console.log(`Failed to get authenticated user: ${err}`)
    }
}

export const logoutUser = async () =>{
    try {
        const res = await axios.post('/auth/google/logout')
        return res.data;
    } catch (err) {
        console.log(`Failed to logout user: ${err}`)
    }
}