import axiosConfig from './axiosConfig';
import { toast } from 'react-toastify';

export const getErrorMessage = (error: unknown) => {
    if (error instanceof Error) return error.message;
    return String(error)
}

export const getFerias = async () => {

    try {
        const response = await axiosConfig.get(`/ferias`);
        const { success, ferias, message } = response.data;

        if (success) {
            return ferias;
        } else {
            toast.error(message);
            return [];
        }
    } catch (err) {
        toast.error(getErrorMessage(err));
        return [];
    }
}

export const reorderFerias = async (projectId, start, end) => {
    try {
        const response = await axiosConfig.put('/ferias', {
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

export const editFeria = async (feria) => {
    if (!feria.id) return;
    if (!feria.nombre) {
        toast.error("Nombre is required!");
        return;
    }

    try {
        const response = await axiosConfig.put(`/ferias/${feria.id}`, {
            nombre: feria.nombre,
            departamento: feria.departamento,
            fecha: feria.fecha
        });
        const { success, message } = response.data;

        toast[success ? 'success' : 'error'](message);
    } catch (err) {
        toast.error(getErrorMessage(err));
    }
}

export const deleteFeria = async (id) => {
    if (!id) {
        toast.error("Invalid Feria!");
        return;
    }

    try {
        const response = await axiosConfig.delete(`/ferias/${id}`);
        const { success, message } = response.data;

        toast[success ? 'success' : 'error'](message);
    } catch (err) {
        toast.error(getErrorMessage(err));
    }
}

export const createFeria = async (feria) => {
    
    if (!feria.nombre) {
        toast.error("Nombre is required!");
        return;
    }

    try {
        const response = await axiosConfig.post(`/ferias`, {
            nombre: feria.nombre,
            departamento: feria.departamento,
            fecha : feria.fecha
        });
        const { success, message } = response.data;

        toast[success ? 'success' : 'error'](message);
    } catch (err) {
        toast.error(getErrorMessage(err));
    }
}