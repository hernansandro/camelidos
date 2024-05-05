import {Modal} from "react-responsive-modal";
import React from "react";
import {editPremio} from "../premio-utils";

function ModalEdit({
	isModalEditOpen, setIsModalEditOpen, setModalEditPremio,
    modalEditPremio, reloadPremios
}) {
    const submitPremioEdit = () => {
        setIsModalEditOpen(false);
        editPremio(modalEditPremio).then(() => {
            reloadPremios();
        });
    };

    return (
        <Modal open={isModalEditOpen} center
        	onClose={() => setIsModalEditOpen(false)}>
            <div className="modal-content">
                <h2 className="modal-header">Editar Premio</h2>
                <h3 className="modal-input-header">Nombre</h3>
                <input type="text" value={modalEditPremio.nombre}
                       className="modal-input"
                       onChange={(e) => setModalEditPremio({
                       	...modalEditPremio,
                        nombre: e.target.value
                       })}
                />
                <h3 className="modal-input-header">Lugar</h3>
                <input type="text" className="modal-input"
                          onChange={(e) => setModalEditPremio({
                          	...modalEditPremio,
                            departamento: e.target.value
                          })}
                          value={modalEditPremio.departamento || ''}
                />

                <h3 className="modal-input-header">Fecha</h3>
                <input type="text" className="modal-input"
                          onChange={(e) => setModalEditPremio({
                          	...modalEditPremio,
                            fecha: e.target.value
                          })}
                          value={modalEditPremio.fecha || ''}
                />
                <div className="modal-actions">
                    <button className="modal-btn modal-btn-cancel"
                            onClick={() => setIsModalEditOpen(false)}
                    >Cerrar
                    </button>
                    <button className="modal-btn modal-btn-submit"
                            onClick={submitPremioEdit}
                    >Guardar</button>
                </div>
            </div>
        </Modal>
    )
}

export default ModalEdit;