import axios from "axios";

const apiClient = axios.create({
    baseURL : 'http://172.30.1.83:9090'
})

export default apiClient