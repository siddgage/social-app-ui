import { BASE_AUTH_URL, BASE_USER_URL } from "@/constants/UrlConstant";
import axios from "axios";

export const axiosAuth = axios.create({
    baseURL: BASE_AUTH_URL,
    headers: { "Content-Type": "application/x-www-form-urlencoded" }
})

export const axiosUser = axios.create({
    baseURL: BASE_USER_URL,
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "Allow"
    }
})