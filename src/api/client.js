import axios from "axios";

const client = axios.create({
  baseURL: "http://mybimiboo.dev:8000/",
  timeout: 60 * 4 * 1000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default client;
