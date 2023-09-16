import axios from 'axios';

axios.defaults.withCredentials = true;

const customFetch = axios.create({
  // baseURL: 'https://fikri-jobtracker-api.vercel.app/api/v1',
  baseURL: 'https://fikri-jobtracker.vercel.app/api/v1',
  // baseURL: 'http://localhost:3000/api/v1',
  withCredentials: true,
});

export default customFetch;
