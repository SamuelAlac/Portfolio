import axios from '@/lib/axios'

export const getProjects = async () =>{
    try {
        const res = await axios.get('/github/repository')
        return res.data;
    } catch (err) {
        console.log(`Failed to get github repositories: ${err}`)
    }
}

export const getProject = async ({ repo }: { repo: string }) =>{
    try {
        const res = await axios.get(`/github/repository/${repo}`)
        return res.data;
    } catch (err) {
        console.log(`Failed to get github repository`)
    }
}

export const getContributions = async () =>{
    try {
        const res = await axios.get('/github/contributions')
        return res.data;
    } catch (err) {
        console.log(`Failed to get github contributions: ${err}`)
    }
}