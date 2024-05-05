import axiosConfig from './axiosConfig';
import { toast } from 'react-toastify';

export const getErrorMessage = (error: unknown) => {
    if (error instanceof Error) return error.message;
    return String(error)
}

export const getCalificacions = async () => {

    try {
        const response = await axiosConfig.get(`/calificaciones`);
        const { success, calificacions, message } = response.data;

        if (success) {
            return calificacions;
        } else {
            toast.error(message);
            return [];
        }
    } catch (err) {
        toast.error(getErrorMessage(err));
        return [];
    }
}

export const reorderCalificacions = async (projectId, start, end) => {
    try {
        const response = await axiosConfig.put('/calificaciones', {
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

export const editCalificacion = async (feria) => {
    if (!feria.id) return;
    if (!feria.nombre) {
        toast.error("Nombre is required!");
        return;
    }

    try {
        const response = await axiosConfig.put(`/calificaciones/${feria.id}`, {
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

export const deleteCalificacion = async (id) => {
    if (!id) {
        toast.error("Invalid Calificacion!");
        return;
    }

    try {
        const response = await axiosConfig.delete(`/calificaciones/${id}`);
        const { success, message } = response.data;

        toast[success ? 'success' : 'error'](message);
    } catch (err) {
        toast.error(getErrorMessage(err));
    }
}

export const createCalificacion = async (feria) => {
    
    if (!feria.nombre) {
        toast.error("Nombre is required!");
        return;
    }

    try {
        const response = await axiosConfig.post(`/calificaciones`, {
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