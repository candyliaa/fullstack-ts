import axios, { AxiosError } from 'axios';
import type { Diary, NewDiary } from './types';

const baseUrl = 'http://localhost:3000/api/diaries';

export const getAllDiaries = () => {
    return axios
        .get<Diary[]>(baseUrl)
        .then(response => response.data)
}

export const createDiary = async (object: NewDiary) => {
    try {
        const response = await axios.post<Diary>(baseUrl, object)
        return response.data;
    }
    catch (error) {
        if (axios.isAxiosError(error)) {
            const message = error.response?.data?.toString() ?? 'couldn\'t create diary';
            throw new Error(message);
        } else {
            throw new Error('unknown error');
        }
    }
}
