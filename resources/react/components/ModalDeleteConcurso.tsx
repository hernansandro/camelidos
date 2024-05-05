import {Modal} from "react-responsive-modal";
import {deleteConcurso} from "../concurso-utils";

function ModalDelete({
	isModalDeleteOpen, setIsModalDeleteOpen,
    modalDeleteConcursoId, reloadConcursos
}) {
    const submitConcursoDelete = () => {
        setIsModalDeleteOpen(false);
        deleteConcurso(modalDeleteConcursoId).then(() => {
            reloadConcursos();
        });
    };

    return (
        <Modal open={isModalDeleteOpen} onClose={() => setIsModalDeleteOpen(false)} center>
            <div className="modal-content">
                <h2 className="modal-header">Eliminar Concurso</h2>
                <p className="modal-question">
                	Estas seguro de eleminar la feria?
                </p>
                <div className="modal-actions">
                    <button className="modal-btn modal-btn-cancel"
                            onClick={() => setIsModalDeleteOpen(false)}
                    >Cancel</button>
                    <button className="modal-btn modal-btn-submit"
                            onClick={submitConcursoDelete}
                    >Yes</button>
                </div>
            </div>
        </Modal>
    );
}

export default ModalDelete;