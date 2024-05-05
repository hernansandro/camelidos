import {Modal} from "react-responsive-modal";
import {deletePremio} from "../premio-utils";

function ModalDelete({
	isModalDeleteOpen, setIsModalDeleteOpen,
    modalDeletePremioId, reloadPremios
}) {
    const submitPremioDelete = () => {
        setIsModalDeleteOpen(false);
        deletePremio(modalDeletePremioId).then(() => {
            reloadPremios();
        });
    };

    return (
        <Modal open={isModalDeleteOpen} onClose={() => setIsModalDeleteOpen(false)} center>
            <div className="modal-content">
                <h2 className="modal-header">Eliminar Premio</h2>
                <p className="modal-question">
                	Estas seguro de eleminar la feria?
                </p>
                <div className="modal-actions">
                    <button className="modal-btn modal-btn-cancel"
                            onClick={() => setIsModalDeleteOpen(false)}
                    >Cancel</button>
                    <button className="modal-btn modal-btn-submit"
                            onClick={submitPremioDelete}
                    >Yes</button>
                </div>
            </div>
        </Modal>
    );
}

export default ModalDelete;