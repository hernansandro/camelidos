import { AxiosResponse } from "axios";
//import http from "../http-common";
import axiosConfig from '../axiosConfig';
import SanctumService from "./Sanctum.service";
import { LoginData } from "./types/LoginData";
import { RegisterData } from "./types/RegisterData";

class AuthService {
    constructor(public prefix = "") {
        this.prefix = "/api";
    }

    register(data: RegisterData): Promise<AxiosResponse<string>> {
        return axiosConfig.post(`${this.prefix}/register`, data);
    }

    login(data: LoginData): Promise<AxiosResponse<any>> {
        return SanctumService.csrfProtection().then((response: AxiosResponse) =>
        axiosConfig.post(`${this.prefix}/login`, data)
        );
    }

    getUser(): Promise<AxiosResponse<any>> {
        return axiosConfig.get(`${this.prefix}/user`);
    }

    logout(): Promise<AxiosResponse<any>> {
        return axiosConfig.post(`${this.prefix}/logout`);
    }
}

export default new AuthService();