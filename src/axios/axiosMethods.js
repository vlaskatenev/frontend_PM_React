import axios from "./axios";

export const axiosPost = (url, arg) => axios.post(url, arg)
export const axiosGet = (url) => axios.get(url)