function Participante({ participante, setIsModalEditOpen, setModalEditParticipante, setIsModalDeleteOpen, setModalDeleteParticipanteId })
{
    const handleEdit = () => {
        setModalEditParticipante(participante);
        setIsModalEditOpen(true);
    };

    const handleDelete = () => {
        setModalDeleteParticipanteId(participante.id);
        setIsModalDeleteOpen(true);
    };

    return (
        <div className="task-item-content">
            <span className="task-project">
                <span className="task-project-name">
                	{participante.nombre}
                </span>
                <span className="task-time">
                	Lugar {participante.departamento}
                </span>
           	</span>
            <span className="task-title">{participante.fecha}</span>
            <div className="task-actions">
                <button className="task-edit-btn"
                	onClick={handleEdit}>Edit</button>
                <button className="task-delete-btn"
                	onClick={handleDelete}>Delete</button>
            </div>
        </div>
    );
}

export default Participante;