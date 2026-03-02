import axios from "axios";

export const api = axios.create ({
    baseURL:"https://devsapihub.com/api-movies",
    timeout:5000
})