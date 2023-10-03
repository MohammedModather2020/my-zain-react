import axios from 'axios';

export default axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': import.meta.env.VITE_BASE_URL,
  },
  timeout: 1000 * 60,
  withCredentials: true,
});
