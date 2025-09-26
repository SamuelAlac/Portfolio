import axios from '@/api/axios'

export const getProjects = async () =>{
    try {
        const res = await axios.get('/repos')
        return res.data;
    } catch (err) {
        console.log(`Fetching error ${err}`)
    }
}