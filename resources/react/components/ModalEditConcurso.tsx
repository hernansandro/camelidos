import {Modal} from "react-responsive-modal";
import React from "react";
import {editConcurso} from "../concurso-utils";

function ModalEdit({
	isModalEditOpen, setIsModalEditOpen, setModalEditConcurso,
    modalEditConcurso, reloadConcursos
}) {
    const submitConcursoEdit = () => {
        setIsModalEditOpen(false);
        editConcurso(modalEditConcurso).then(() => {
            reloadConcursos();
        });
    };

    return (
        <Modal open={isModalEditOpen} center
        	onClose={() => setIsModalEditOpen(false)}>
            <div className="modal-content">
                <h2 className="modal-header">Editar Concurso</h2>
                <h3 className="modal-input-header">Nombre</h3>
                <input type="text" value={modalEditConcurso.nombre}
                       className="modal-input"
                       onChange={(e) => setModalEditConcurso({
                       	...modalEditConcurso,
                        nombre: e.target.value
                       })}
                />
                <h3 className="modal-input-header">Lugar</h3>
                <input type="text" className="modal-input"
                          onChange={(e) => setModalEditConcurso({
                          	...modalEditConcurso,
                            departamento: e.target.value
                          })}
                          value={modalEditConcurso.departamento || ''}
                />

                <h3 className="modal-input-header">Fecha</h3>
                <input type="text" className="modal-input"
                          onChange={(e) => setModalEditConcurso({
                          	...modalEditConcurso,
                            fecha: e.target.value
                          })}
                          value={modalEditConcurso.fecha || ''}
                />
                <div className="modal-actions">
                    <button className="modal-btn modal-btn-cancel"
                            onClick={() => setIsModalEditOpen(false)}
                    >Cerrar
                    </button>
                    <button className="modal-btn modal-btn-submit"
                            onClick={submitConcursoEdit}
                    >Guardar</button>
                </div>
            </div>
        </Modal>
    )
}

export default ModalEdit;