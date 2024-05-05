import axiosConfig from './axiosConfig';
import { toast } from 'react-toastify';

export const getErrorMessage = (error: unknown) => {
    if (error instanceof Error) return error.message;
    return String(error)
}

export const getJurados = async () => {

    try {
        const response = await axiosConfig.get(`/jurados`);
        const { success, jurados, message } = response.data;

        if (success) {
            return jurados;
        } else {
            toast.error(message);
            return [];
        }
    } catch (err) {
        toast.error(getErrorMessage(err));
        return [];
    }
}

export const reorderJurados = async (projectId, start, end) => {
    try {
        const response = await axiosConfig.put('/jurados', {
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

export const editJurado = async (jurado) => {
    if (!jurado.id) return;
    if (!jurado.nombre) {
        toast.error("Nombre is required!");
        return;
    }

    try {
        const response = await axiosConfig.put(`/jurados/${jurado.id}`, {
            nombre: jurado.nombre,
            departamento: jurado.departamento,
            fecha: jurado.fecha
        });
        const { success, message } = response.data;

        toast[success ? 'success' : 'error'](message);
    } catch (err) {
        toast.error(getErrorMessage(err));
    }
}

export const deleteJurado = async (id) => {
    if (!id) {
        toast.error("Invalid Jurado!");
        return;
    }

    try {
        const response = await axiosConfig.delete(`/jurados/${id}`);
        const { success, message } = response.data;

        toast[success ? 'success' : 'error'](message);
    } catch (err) {
        toast.error(getErrorMessage(err));
    }
}

export const createJurado = async (jurado) => {
    
    if (!jurado.nombre) {
        toast.error("Nombre is required!");
        return;
    }

    try {
        const response = await axiosConfig.post(`/jurados`, {
            nombre: jurado.nombre,
            departamento: jurado.departamento,
            fecha : jurado.fecha
        });
        const { success, message } = response.data;

        toast[success ? 'success' : 'error'](message);
    } catch (err) {
        toast.error(getErrorMessage(err));
    }
}