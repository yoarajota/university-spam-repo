import axios from 'axios'

const api = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL + "/api/",
});

api.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export default api