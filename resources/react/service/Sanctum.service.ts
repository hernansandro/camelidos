import { AxiosResponse } from "axios";
import axiosConfig from '../axiosConfig';
//import http from "../http-common";

class SanctumService {
    csrfProtection(): Promise<AxiosResponse<any>> {
        return axiosConfig.get("/sanctum/csrf-cookie");
    }
}

export default new SanctumService();