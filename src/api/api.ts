import axios, { AxiosRequestHeaders } from 'axios';
import { COMMON_REQUEST_HEADER } from './types';

const BASE_URL = 'https://www.anapioficeandfire.com/api/characters';

export const createAxiosInstance = (baseApi: string, header: AxiosRequestHeaders = COMMON_REQUEST_HEADER) =>
  axios.create({ baseURL: baseApi, headers: header, withCredentials: false });

export const characterApi = createAxiosInstance(BASE_URL);
