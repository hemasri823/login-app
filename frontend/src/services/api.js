import axios from "axios";

const API = axios.create({
  baseURL: "https://login-backend-1whx.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export const loginUser = (data) => API.post("/login", data);