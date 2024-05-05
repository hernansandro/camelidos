import {Modal} from "react-responsive-modal";
import React from "react";
import {editCalificacion} from "../calificacion-utils";

function ModalEdit({
	isModalEditOpen, setIsModalEditOpen, setModalEditCalificacion,
    modalEditCalificacion, reloadCalificacions
}) {
    const submitCalificacionEdit = () => {
        setIsModalEditOpen(false);
        editCalificacion(modalEditCalificacion).then(() => {
            reloadCalificacions();
        });
    };

    return (
        <Modal open={isModalEditOpen} center
        	onClose={() => setIsModalEditOpen(false)}>
            <div className="modal-content">
                <h2 className="modal-header">Editar Calificacion</h2>
                <h3 className="modal-input-header">Nombre</h3>
                <input type="text" value={modalEditCalificacion.nombre}
                       className="modal-input"
                       onChange={(e) => setModalEditCalificacion({
                       	...modalEditCalificacion,
                        nombre: e.target.value
                       })}
                />
                <h3 className="modal-input-header">Lugar</h3>
                <input type="text" className="modal-input"
                          onChange={(e) => setModalEditCalificacion({
                          	...modalEditCalificacion,
                            departamento: e.target.value
                          })}
                          value={modalEditCalificacion.departamento || ''}
                />

                <h3 className="modal-input-header">Fecha</h3>
                <input type="text" className="modal-input"
                          onChange={(e) => setModalEditCalificacion({
                          	...modalEditCalificacion,
                            fecha: e.target.value
                          })}
                          value={modalEditCalificacion.fecha || ''}
                />
                <div className="modal-actions">
                    <button className="modal-btn modal-btn-cancel"
                            onClick={() => setIsModalEditOpen(false)}
                    >Cerrar
                    </button>
                    <button className="modal-btn modal-btn-submit"
                            onClick={submitCalificacionEdit}
                    >Guardar</button>
                </div>
            </div>
        </Modal>
    )
}

export default ModalEdit;