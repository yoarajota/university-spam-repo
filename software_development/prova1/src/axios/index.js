import axios from 'axios'


axios.defaults.headers.post['Content-Type'] = 'application/json';

const api = axios.create({
    baseURL: 'https://fakerestapi.azurewebsites.net',
});


export default api;