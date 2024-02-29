function Feria({ feria, setIsModalEditOpen, setModalEditFeria, setIsModalDeleteOpen, setModalDeleteFeriaId })
{
    const handleEdit = () => {
        setModalEditFeria(feria);
        setIsModalEditOpen(true);
    };

    const handleDelete = () => {
        setModalDeleteFeriaId(feria.id);
        setIsModalDeleteOpen(true);
    };

    return (
        <div className="task-item-content">
            <span className="task-project">
                <span className="task-project-name">
                	{feria.nombre}
                </span>
                <span className="task-time">
                	Lugar {feria.departamento}
                </span>
           	</span>
            <span className="task-title">{feria.fecha}</span>
            <div className="task-actions">
                <button className="task-edit-btn"
                	onClick={handleEdit}>Edit</button>
                <button className="task-delete-btn"
                	onClick={handleDelete}>Delete</button>
            </div>
        </div>
    );
}

export default Feria;