import axios from '@/lib/axios'

export const getProjects = async () =>{
    try {
        const res = await axios.get('/github/repository')
        return res.data;
    } catch (err) {
        console.log(`Fetching error ${err}`)
    }
}

export const getContributions = async () =>{
    try {
        const res = await axios.get('/github/contributions')
        return res.data;
    } catch (err) {
        console.log(`Fetching error ${err}`)
    }
}