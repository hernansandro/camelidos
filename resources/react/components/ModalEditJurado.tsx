import {Modal} from "react-responsive-modal";
import React from "react";
import {editJurado} from "../jurado-utils";

function ModalEdit({
	isModalEditOpen, setIsModalEditOpen, setModalEditJurado,
    modalEditJurado, reloadJurados
}) {
    const submitJuradoEdit = () => {
        setIsModalEditOpen(false);
        editJurado(modalEditJurado).then(() => {
            reloadJurados();
        });
    };

    return (
        <Modal open={isModalEditOpen} center
        	onClose={() => setIsModalEditOpen(false)}>
            <div className="modal-content">
                <h2 className="modal-header">Editar Jurado</h2>
                <h3 className="modal-input-header">Nombre</h3>
                <input type="text" value={modalEditJurado.nombre}
                       className="modal-input"
                       onChange={(e) => setModalEditJurado({
                       	...modalEditJurado,
                        nombre: e.target.value
                       })}
                />
                <h3 className="modal-input-header">Lugar</h3>
                <input type="text" className="modal-input"
                          onChange={(e) => setModalEditJurado({
                          	...modalEditJurado,
                            departamento: e.target.value
                          })}
                          value={modalEditJurado.departamento || ''}
                />

                <h3 className="modal-input-header">Fecha</h3>
                <input type="text" className="modal-input"
                          onChange={(e) => setModalEditJurado({
                          	...modalEditJurado,
                            fecha: e.target.value
                          })}
                          value={modalEditJurado.fecha || ''}
                />
                <div className="modal-actions">
                    <button className="modal-btn modal-btn-cancel"
                            onClick={() => setIsModalEditOpen(false)}
                    >Cerrar
                    </button>
                    <button className="modal-btn modal-btn-submit"
                            onClick={submitJuradoEdit}
                    >Guardar</button>
                </div>
            </div>
        </Modal>
    )
}

export default ModalEdit;