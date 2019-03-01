import axios from 'axios';

// Conexão com o backend em node
const api = axios.create({
    baseURL: 'https://aprovaja-monitorasummer-back.herokuapp.com/'
})

export default api;
