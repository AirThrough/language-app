import axios from 'axios'
import {API_BASE_URL} from "../config/apiConfig"

export const req = axios.create({
    baseURL: API_BASE_URL
})

req.interceptors.response.use(async (response) => {
    await new Promise((resolve) => setTimeout(resolve, 500))
    return response
})