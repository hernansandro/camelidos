function Premio({ premio, setIsModalEditOpen, setModalEditPremio, setIsModalDeleteOpen, setModalDeletePremioId })
{
    const handleEdit = () => {
        setModalEditPremio(premio);
        setIsModalEditOpen(true);
    };

    const handleDelete = () => {
        setModalDeletePremioId(premio.id);
        setIsModalDeleteOpen(true);
    };

    return (
        <div className="task-item-content">
            <span className="task-project">
                <span className="task-project-name">
                	{premio.nombre}
                </span>
                <span className="task-time">
                	Lugar {premio.departamento}
                </span>
           	</span>
            <span className="task-title">{premio.fecha}</span>
            <div className="task-actions">
                <button className="task-edit-btn"
                	onClick={handleEdit}>Edit</button>
                <button className="task-delete-btn"
                	onClick={handleDelete}>Delete</button>
            </div>
        </div>
    );
}

export default Premio;