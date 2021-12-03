import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.pexels.com/v1',
  headers: {
    Authorization: process.env.REACT_APP_API_KEY,
  },
});

export default api;
