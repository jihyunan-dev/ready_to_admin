import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

export default class ApiService {
    client: AxiosInstance;

    constructor(baseUrl: string) {
        this.client = axios.create({
            baseURL: `http://localhost:5000${baseUrl}`,
        });

        this.client.interceptors.request.use();

        this.client.interceptors.response.use();
    }

    async get<T = any>(url: string, config?: AxiosRequestConfig) {
        const result = await this.client.get<T>(url, config);
        return result.data;
    }

    async put<T = any>(url: string, data?: any, config?: AxiosRequestConfig) {
        const result = await this.client.put<T>(url, data, config);
        return result.data;
    }

    async post<T = any>(url: string, data?: any, config?: AxiosRequestConfig) {
        const result = await this.client.post<T>(url, data, config);
        return result.data;
    }

    async delete<T = any>(url: string, config?: AxiosRequestConfig) {
        const result = await this.client.delete<T>(url, config);
        return result.data;
    }
}
