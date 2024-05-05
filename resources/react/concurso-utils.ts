import axiosConfig from './axiosConfig';
import { toast } from 'react-toastify';

export const getErrorMessage = (error: unknown) => {
    if (error instanceof Error) return error.message;
    return String(error)
}

export const getConcursos = async () => {

    try {
        const response = await axiosConfig.get(`/concursos`);
        const { success, concursos, message } = response.data;

        if (success) {
            return concursos;
        } else {
            toast.error(message);
            return [];
        }
    } catch (err) {
        toast.error(getErrorMessage(err));
        return [];
    }
}

export const reorderConcursos = async (projectId, start, end) => {
    try {
        const response = await axiosConfig.put('/concursos', {
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

export const editConcurso = async (concurso) => {
    if (!concurso.id) return;
    if (!concurso.nombre) {
        toast.error("Nombre is required!");
        return;
    }

    try {
        const response = await axiosConfig.put(`/concursos/${concurso.id}`, {
            nombre: concurso.nombre,
            departamento: concurso.departamento,
            fecha: concurso.fecha
        });
        const { success, message } = response.data;

        toast[success ? 'success' : 'error'](message);
    } catch (err) {
        toast.error(getErrorMessage(err));
    }
}

export const deleteConcurso = async (id) => {
    if (!id) {
        toast.error("Invalid Concurso!");
        return;
    }

    try {
        const response = await axiosConfig.delete(`/concursos/${id}`);
        const { success, message } = response.data;

        toast[success ? 'success' : 'error'](message);
    } catch (err) {
        toast.error(getErrorMessage(err));
    }
}

export const createConcurso = async (concurso) => {
    
    if (!concurso.nombre) {
        toast.error("Nombre is required!");
        return;
    }

    try {
        const response = await axiosConfig.post(`/concursos`, {
            nombre: concurso.nombre,
            departamento: concurso.departamento,
            fecha : concurso.fecha
        });
        const { success, message } = response.data;

        toast[success ? 'success' : 'error'](message);
    } catch (err) {
        toast.error(getErrorMessage(err));
    }
}