import axiosConfig from './axiosConfig';
import { toast } from 'react-toastify';

export const getErrorMessage = (error: unknown) => {
    if (error instanceof Error) return error.message;
    return String(error)
}

export const getParticipantes = async () => {

    try {
        const response = await axiosConfig.get(`/participantes`);
        const { success, participantes, message } = response.data;

        if (success) {
            return participantes;
        } else {
            toast.error(message);
            return [];
        }
    } catch (err) {
        toast.error(getErrorMessage(err));
        return [];
    }
}

export const reorderParticipantes = async (projectId, start, end) => {
    try {
        const response = await axiosConfig.put('/participantes', {
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

export const editParticipante = async (participante) => {
    if (!participante.id) return;
    if (!participante.nombre) {
        toast.error("Nombre is required!");
        return;
    }

    try {
        const response = await axiosConfig.put(`/participantes/${participante.id}`, {
            nombre: participante.nombre,
            departamento: participante.departamento,
            fecha: participante.fecha
        });
        const { success, message } = response.data;

        toast[success ? 'success' : 'error'](message);
    } catch (err) {
        toast.error(getErrorMessage(err));
    }
}

export const deleteParticipante = async (id) => {
    if (!id) {
        toast.error("Invalid Participante!");
        return;
    }

    try {
        const response = await axiosConfig.delete(`/participantes/${id}`);
        const { success, message } = response.data;

        toast[success ? 'success' : 'error'](message);
    } catch (err) {
        toast.error(getErrorMessage(err));
    }
}

export const createParticipante = async (participante) => {
    
    if (!participante.nombre) {
        toast.error("Nombre is required!");
        return;
    }

    try {
        const response = await axiosConfig.post(`/participantes`, {
            nombre: participante.nombre,
            departamento: participante.departamento,
            fecha : participante.fecha
        });
        const { success, message } = response.data;

        toast[success ? 'success' : 'error'](message);
    } catch (err) {
        toast.error(getErrorMessage(err));
    }
}