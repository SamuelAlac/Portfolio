import axios from '@/api/axios'

export const getProjects = async () =>{
    try {
        const res = await axios.get('/github/repository')
        return res.data;
    } catch (err) {
        console.log(`Fetching error ${err}`)
    }
}