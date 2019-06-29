import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.jikan.moe/v3/search',
});

export default api;
