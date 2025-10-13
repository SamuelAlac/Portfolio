import axios from '@/lib/axios'

export const getBlog = async () =>{
    try {
        const res = await axios.get('/ai/blog/')
        return res;
    } catch (err) {
        console.log(`Failed to get blog: ${err}`)
    }
}