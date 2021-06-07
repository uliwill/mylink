import axios from "axios";

// key 67b3e5ed3548e7f44738914a8295ee15beef536a

// base url: https://api-ssl.bitly.com/v4/

export const key = "67b3e5ed3548e7f44738914a8295ee15beef536a";

const api = axios.create({
  baseURL: "https://api-ssl.bitly.com/v4",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${key}`,
  },
});

export default api;
