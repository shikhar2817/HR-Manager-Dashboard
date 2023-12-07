import axios, { AxiosResponse } from "axios";
import { Employee, JwtPayload, UserResponse } from "../types";
import { jwtDecode } from "jwt-decode";

const url = process.env.REACT_APP_SERVER_URL;
const token = localStorage.getItem("token") ?? "";

export const getUserDetails = async () => {
    try {
        const config = {
            headers: { Authorization: `Bearer ${token}` },
        };

        const { userId } = jwtDecode(localStorage.getItem("token") as string) as JwtPayload;
        const axiosRes: AxiosResponse = await axios.get(`${url}/api/users/${userId}`, config);
        const axiosData: UserResponse = axiosRes.data;
        localStorage.setItem("data", JSON.stringify(axiosData));
        return axiosData.employees;
    } catch (error) {
        // const axiosError = error as AxiosError;
        // const errorMessage: AuthResponse = axiosError.response?.data as AuthResponse;
        console.error(error);
        return [];
    }
};

export const createUserEmployeeDetails = async (employee: Employee) => {
    try {
        const config = {
            headers: { Authorization: `Bearer ${token}` },
        };

        const { userId } = jwtDecode(localStorage.getItem("token") as string) as JwtPayload;
        const axiosRes: AxiosResponse = await axios.post(`${url}/api/users/${userId}/employees`, employee, config);
        const axiosData: UserResponse = axiosRes.data;
        return axiosData.employees;
    } catch (error) {
        // const axiosError = error as AxiosError;
        // const errorMessage: AuthResponse = axiosError.response?.data as AuthResponse;
        console.error(error);
        return [];
    }
};

export const updateUserEmployeeDetails = async (employee: Employee) => {
    try {
        const config = {
            headers: { Authorization: `Bearer ${token}` },
        };

        const { userId } = jwtDecode(localStorage.getItem("token") as string) as JwtPayload;
        const axiosRes: AxiosResponse = await axios.put(
            `${url}/api/users/${userId}/employees/${employee.id}`,
            employee,
            config
        );
        const axiosData: UserResponse = axiosRes.data;
        return axiosData.employees;
    } catch (error) {
        // const axiosError = error as AxiosError;
        // const errorMessage: AuthResponse = axiosError.response?.data as AuthResponse;
        console.error(error);
        return [];
    }
};

export const deleteUserEmployeeDetails = async (employeeID: string) => {
    try {
        const config = {
            headers: { Authorization: `Bearer ${token}` },
        };

        const { userId } = jwtDecode(localStorage.getItem("token") as string) as JwtPayload;
        const axiosRes: AxiosResponse = await axios.delete(
            `${url}/api/users/${userId}/employees/${employeeID}`,
            config
        );
        const axiosData: UserResponse = axiosRes.data;
        localStorage.setItem("data", JSON.stringify(axiosData));

        return axiosData.employees;
    } catch (error) {
        // const axiosError = error as AxiosError;
        // const errorMessage: AuthResponse = axiosError.response?.data as AuthResponse;
        console.error(error);
        return [];
    }
};
