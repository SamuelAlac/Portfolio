import axios from "axios";

const apiKey = import.meta.env.VITE_API_BASE_URL

const api = axios.create({
    baseURL: apiKey,
    headers: {
        'Content-Type': 'application/json',
    }
})

export default api;