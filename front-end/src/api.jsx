import axios from "axios"

const baseURL = import.meta.env.VITE_BASEURL

const api = axios.create({
    baseURL,
    timeout: 1000,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
});
export { baseURL, api }