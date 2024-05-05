import {Modal} from "react-responsive-modal";
import {deleteJurado} from "../jurado-utils";

function ModalDelete({
	isModalDeleteOpen, setIsModalDeleteOpen,
    modalDeleteJuradoId, reloadJurados
}) {
    const submitJuradoDelete = () => {
        setIsModalDeleteOpen(false);
        deleteJurado(modalDeleteJuradoId).then(() => {
            reloadJurados();
        });
    };

    return (
        <Modal open={isModalDeleteOpen} onClose={() => setIsModalDeleteOpen(false)} center>
            <div className="modal-content">
                <h2 className="modal-header">Eliminar Jurado</h2>
                <p className="modal-question">
                	Estas seguro de eleminar la feria?
                </p>
                <div className="modal-actions">
                    <button className="modal-btn modal-btn-cancel"
                            onClick={() => setIsModalDeleteOpen(false)}
                    >Cancel</button>
                    <button className="modal-btn modal-btn-submit"
                            onClick={submitJuradoDelete}
                    >Yes</button>
                </div>
            </div>
        </Modal>
    );
}

export default ModalDelete;