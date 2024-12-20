import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://172.30.1.45:9090'
})


// Account -

export const apiJoinAccount = async (data) => {
    const result = await apiClient.post('/account/join', data);
    return result
}

export const apiLoginAccount = async (data) => {
    const result = await apiClient.post('/account/login', data);
    return result
}



// Habit -

export const apiAddHabit = async (data) => {
    const result = await apiClient.post('/habit/test', data);
    return result
}