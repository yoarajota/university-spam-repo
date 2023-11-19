import axios from 'axios'


axios.defaults.headers.post['Content-Type'] = 'application/json';

const api = axios.create({
    baseURL: import.meta.env.VITE_API,
});


export default api;