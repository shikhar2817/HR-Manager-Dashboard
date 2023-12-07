import axios, { AxiosError, AxiosResponse } from "axios";
import { AuthResponse, LoginUpForm, SignUpForm } from "../types";

const url = process.env.REACT_APP_SERVER_URL;

export const signUpUser = async (formData: SignUpForm): Promise<AuthResponse> => {
    try {
        const axiosRes: AxiosResponse = await axios.post(`${url}/api/auth/signup`, formData);
        const axiosData: AuthResponse = axiosRes.data;
        const { token } = axiosData;
        localStorage.setItem("token", token);
        return {
            token,
            success: true,
        };
    } catch (error) {
        const axiosError = error as AxiosError;
        const errorMessage: AuthResponse = axiosError.response?.data as AuthResponse;
        return {
            token: "",
            success: false,
        };
    }
};

export const loginUser = async (formData: LoginUpForm): Promise<AuthResponse> => {
    try {
        const axiosRes: AxiosResponse = await axios.post(`${url}/api/auth/login`, formData);
        const axiosData: AuthResponse = axiosRes.data;
        const { token } = axiosData;
        localStorage.setItem("token", token);
        return {
            token,
            success: true,
        };
    } catch (error) {
        const axiosError = error as AxiosError;
        const errorMessage: AuthResponse = axiosError.response?.data as AuthResponse;
        return {
            token: "",
            success: false,
        };
    }
};
