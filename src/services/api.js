import axios from "axios";
import { REACT_APP_BITLY_TOKEN } from "@env";

// gerar uma key em bit.ly

export const key = REACT_APP_BITLY_TOKEN;

const api = axios.create({
    baseURL: "https://api-ssl.bitly.com/v4",
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${key}`,
    },
});

export default api;
