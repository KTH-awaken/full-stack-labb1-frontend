import axios, { AxiosResponse } from "axios";


const BASE_URL = "http://localhost:3001"
// export const BASE_URL = "http://localhost:8000/api/v1";

axios.defaults.timeout = 3 * 1000;
export const apiService = {
    get: async <T>(endpoint: string): Promise<T> => {
        const response: AxiosResponse<T> = await axios.get(
            `${BASE_URL}${endpoint}`
        );
        return response.data;
    },
    post: async <T, U = {}>(endpoint: string, data: U): Promise<T> => {
        const response: AxiosResponse<T> = await axios.post(
            `${BASE_URL}${endpoint}`,
            data
        );
        return response.data;
    },
    put: async <T, U = {}>(endpoint: string, data: U): Promise<T> => {
        const response: AxiosResponse<T> = await axios.put(
            `${BASE_URL}${endpoint}`,
            data
        );
        return response.data;
    },
    delete: async <T>(endpoint: string): Promise<T> => {
        const response: AxiosResponse<T> = await axios.delete(
            `${BASE_URL}${endpoint}`
        );
        return response.data;
    },
};
