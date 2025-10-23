import axios from 'axios';
import { API_BASE_URL, API_TOKEN } from '../../config';

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'X-Auth-Token': API_TOKEN,
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});
