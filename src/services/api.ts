import axios from "axios";

export const api = axios.create({
    baseURL: 'https://dnmoney-backend.herokuapp.com/api',
})