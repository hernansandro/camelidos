function Calificacion({ calificacion, setIsModalEditOpen, setModalEditCalificacion, setIsModalDeleteOpen, setModalDeleteCalificacionId })
{
    const handleEdit = () => {
        setModalEditCalificacion(calificacion);
        setIsModalEditOpen(true);
    };

    const handleDelete = () => {
        setModalDeleteCalificacionId(calificacion.id);
        setIsModalDeleteOpen(true);
    };

    return (
        <div className="task-item-content">
            <span className="task-project">
                <span className="task-project-name">
                	{calificacion.nombre}
                </span>
                <span className="task-time">
                	Lugar {calificacion.departamento}
                </span>
           	</span>
            <span className="task-title">{calificacion.fecha}</span>
            <div className="task-actions">
                <button className="task-edit-btn"
                	onClick={handleEdit}>Edit</button>
                <button className="task-delete-btn"
                	onClick={handleDelete}>Delete</button>
            </div>
        </div>
    );
}

export default Calificacion;