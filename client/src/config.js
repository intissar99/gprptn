import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://gprotn1.herokuapp.com/"
})