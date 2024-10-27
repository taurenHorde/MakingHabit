import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://172.30.1.83:9090'
})



export const apiJoinAccount = async (data) => {
    const result = await apiClient.post('/account/join', data);
    return result.data
}

