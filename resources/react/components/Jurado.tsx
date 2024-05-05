function Jurado({ jurado, setIsModalEditOpen, setModalEditJurado, setIsModalDeleteOpen, setModalDeleteJuradoId })
{
    const handleEdit = () => {
        setModalEditJurado(jurado);
        setIsModalEditOpen(true);
    };

    const handleDelete = () => {
        setModalDeleteJuradoId(jurado.id);
        setIsModalDeleteOpen(true);
    };

    return (
        <div className="task-item-content">
            <span className="task-project">
                <span className="task-project-name">
                	{jurado.nombre}
                </span>
                <span className="task-time">
                	Lugar {jurado.departamento}
                </span>
           	</span>
            <span className="task-title">{jurado.fecha}</span>
            <div className="task-actions">
                <button className="task-edit-btn"
                	onClick={handleEdit}>Edit</button>
                <button className="task-delete-btn"
                	onClick={handleDelete}>Delete</button>
            </div>
        </div>
    );
}

export default Jurado;