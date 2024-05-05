import {Modal} from "react-responsive-modal";
import React from "react";
import {editParticipante} from "../participante-utils";

function ModalEdit({
	isModalEditOpen, setIsModalEditOpen, setModalEditParticipante,
    modalEditParticipante, reloadParticipantes
}) {
    const submitParticipanteEdit = () => {
        setIsModalEditOpen(false);
        editParticipante(modalEditParticipante).then(() => {
            reloadParticipantes();
        });
    };

    return (
        <Modal open={isModalEditOpen} center
        	onClose={() => setIsModalEditOpen(false)}>
            <div className="modal-content">
                <h2 className="modal-header">Editar Participante</h2>
                <h3 className="modal-input-header">Nombre</h3>
                <input type="text" value={modalEditParticipante.nombre}
                       className="modal-input"
                       onChange={(e) => setModalEditParticipante({
                       	...modalEditParticipante,
                        nombre: e.target.value
                       })}
                />
                <h3 className="modal-input-header">Lugar</h3>
                <input type="text" className="modal-input"
                          onChange={(e) => setModalEditParticipante({
                          	...modalEditParticipante,
                            departamento: e.target.value
                          })}
                          value={modalEditParticipante.departamento || ''}
                />

                <h3 className="modal-input-header">Fecha</h3>
                <input type="text" className="modal-input"
                          onChange={(e) => setModalEditParticipante({
                          	...modalEditParticipante,
                            fecha: e.target.value
                          })}
                          value={modalEditParticipante.fecha || ''}
                />
                <div className="modal-actions">
                    <button className="modal-btn modal-btn-cancel"
                            onClick={() => setIsModalEditOpen(false)}
                    >Cerrar
                    </button>
                    <button className="modal-btn modal-btn-submit"
                            onClick={submitParticipanteEdit}
                    >Guardar</button>
                </div>
            </div>
        </Modal>
    )
}

export default ModalEdit;