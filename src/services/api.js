import axios from 'axios';

// Conexão com o backend em node
const api = axios.create({
    baseURL: 'http://192.168.1.111:3001/'
})

export default api;