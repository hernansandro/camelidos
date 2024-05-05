import axiosConfig from './axiosConfig';
import { toast } from 'react-toastify';

export const getErrorMessage = (error: unknown) => {
    if (error instanceof Error) return error.message;
    return String(error)
}

export const getPremios = async () => {

    try {
        const response = await axiosConfig.get(`/premios`);
        const { success, premios, message } = response.data;

        if (success) {
            return premios;
        } else {
            toast.error(message);
            return [];
        }
    } catch (err) {
        toast.error(getErrorMessage(err));
        return [];
    }
}

export const reorderPremios = async (projectId, start, end) => {
    try {
        const response = await axiosConfig.put('/premios', {
            project_id: projectId,
            start,
            end,
        });
        const { success, message } = response.data;
        
        toast[success ? 'success' : 'error'](message);
    } catch (err) {
        toast.error(getErrorMessage(err));
    }
}

export const editPremio = async (premio) => {
    if (!premio.id) return;
    if (!premio.nombre) {
        toast.error("Nombre is required!");
        return;
    }

    try {
        const response = await axiosConfig.put(`/premios/${premio.id}`, {
            nombre: premio.nombre,
            departamento: premio.departamento,
            fecha: premio.fecha
        });
        const { success, message } = response.data;

        toast[success ? 'success' : 'error'](message);
    } catch (err) {
        toast.error(getErrorMessage(err));
    }
}

export const deletePremio = async (id) => {
    if (!id) {
        toast.error("Invalid Premio!");
        return;
    }

    try {
        const response = await axiosConfig.delete(`/premios/${id}`);
        const { success, message } = response.data;

        toast[success ? 'success' : 'error'](message);
    } catch (err) {
        toast.error(getErrorMessage(err));
    }
}

export const createPremio = async (premio) => {
    
    if (!premio.nombre) {
        toast.error("Nombre is required!");
        return;
    }

    try {
        const response = await axiosConfig.post(`/premios`, {
            nombre: premio.nombre,
            departamento: premio.departamento,
            fecha : premio.fecha
        });
        const { success, message } = response.data;

        toast[success ? 'success' : 'error'](message);
    } catch (err) {
        toast.error(getErrorMessage(err));
    }
}