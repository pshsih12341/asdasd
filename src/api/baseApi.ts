import axios from 'axios';

export const BASE_URL = import.meta.env.VITE_DEV_BASE_URL;
export const GAMES_SERVICE = "https://football.itatmisis.ru/gameservice/";

const api = axios.create({
  baseURL: `${BASE_URL}/api`,
});

export default api;
