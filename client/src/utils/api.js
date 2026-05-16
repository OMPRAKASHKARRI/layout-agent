import axios from 'axios';

export const api = axios.create({
  baseURL:
    'https://layout-agent-bny4.onrender.com/api',
});