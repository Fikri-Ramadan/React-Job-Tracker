import axios from 'axios';

const URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

const customFetch = axios.create({
  baseURL: `${URL}/api/v1`,
  withCredentials: true,
});

export default customFetch;
