import {Modal} from "react-responsive-modal";
import {deleteFeria} from "../utils";

function ModalDelete({
	isModalDeleteOpen, setIsModalDeleteOpen,
    modalDeleteFeriaId, reloadFerias
}) {
    const submitFeriaDelete = () => {
        setIsModalDeleteOpen(false);
        deleteFeria(modalDeleteFeriaId).then(() => {
            reloadFerias();
        });
    };

    return (
        <Modal open={isModalDeleteOpen} onClose={() => setIsModalDeleteOpen(false)} center>
            <div className="modal-content">
                <h2 className="modal-header">Eliminar Feria</h2>
                <p className="modal-question">
                	Estas seguro de eleminar la feria?
                </p>
                <div className="modal-actions">
                    <button className="modal-btn modal-btn-cancel"
                            onClick={() => setIsModalDeleteOpen(false)}
                    >Cancel</button>
                    <button className="modal-btn modal-btn-submit"
                            onClick={submitFeriaDelete}
                    >Yes</button>
                </div>
            </div>
        </Modal>
    );
}

export default ModalDelete;