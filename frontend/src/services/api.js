import axios from 'axios';

const API_URL = "http://localhost:8081/api/users";

export const register = (userData) => axios.post(`${API_URL}/register`, userData);
export const login = (loginData) => axios.post(`${API_URL}/login`, loginData);