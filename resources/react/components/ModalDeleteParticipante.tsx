import {Modal} from "react-responsive-modal";
import {deleteParticipante} from "../participante-utils";

function ModalDelete({
	isModalDeleteOpen, setIsModalDeleteOpen,
    modalDeleteParticipanteId, reloadParticipantes
}) {
    const submitParticipanteDelete = () => {
        setIsModalDeleteOpen(false);
        deleteParticipante(modalDeleteParticipanteId).then(() => {
            reloadParticipantes();
        });
    };

    return (
        <Modal open={isModalDeleteOpen} onClose={() => setIsModalDeleteOpen(false)} center>
            <div className="modal-content">
                <h2 className="modal-header">Eliminar Participante</h2>
                <p className="modal-question">
                	Estas seguro de eleminar la feria?
                </p>
                <div className="modal-actions">
                    <button className="modal-btn modal-btn-cancel"
                            onClick={() => setIsModalDeleteOpen(false)}
                    >Cancel</button>
                    <button className="modal-btn modal-btn-submit"
                            onClick={submitParticipanteDelete}
                    >Yes</button>
                </div>
            </div>
        </Modal>
    );
}

export default ModalDelete;