import axios from '@/api/axios'

export const getContributions = async () =>{
    try {
        const res = await axios.get('/contributions')
        return res.data;
    } catch (err) {
        console.log(`Fetching error ${err}`)
    }
}