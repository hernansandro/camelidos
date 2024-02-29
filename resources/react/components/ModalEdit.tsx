import {Modal} from "react-responsive-modal";
import React from "react";
import {editFeria} from "../utils";

function ModalEdit({
	isModalEditOpen, setIsModalEditOpen, setModalEditFeria,
    modalEditFeria, reloadFerias
}) {
    const submitFeriaEdit = () => {
        setIsModalEditOpen(false);
        editFeria(modalEditFeria).then(() => {
            reloadFerias();
        });
    };

    return (
        <Modal open={isModalEditOpen} center
        	onClose={() => setIsModalEditOpen(false)}>
            <div className="modal-content">
                <h2 className="modal-header">Editar Feria</h2>
                <h3 className="modal-input-header">Nombre</h3>
                <input type="text" value={modalEditFeria.nombre}
                       className="modal-input"
                       onChange={(e) => setModalEditFeria({
                       	...modalEditFeria,
                        nombre: e.target.value
                       })}
                />
                <h3 className="modal-input-header">Lugar</h3>
                <input type="text" className="modal-input"
                          onChange={(e) => setModalEditFeria({
                          	...modalEditFeria,
                            departamento: e.target.value
                          })}
                          value={modalEditFeria.departamento || ''}
                />

                <h3 className="modal-input-header">Fecha</h3>
                <input type="text" className="modal-input"
                          onChange={(e) => setModalEditFeria({
                          	...modalEditFeria,
                            fecha: e.target.value
                          })}
                          value={modalEditFeria.fecha || ''}
                />
                <div className="modal-actions">
                    <button className="modal-btn modal-btn-cancel"
                            onClick={() => setIsModalEditOpen(false)}
                    >Cerrar
                    </button>
                    <button className="modal-btn modal-btn-submit"
                            onClick={submitFeriaEdit}
                    >Guardar</button>
                </div>
            </div>
        </Modal>
    )
}

export default ModalEdit;