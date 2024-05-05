function Concurso({ concurso, setIsModalEditOpen, setModalEditConcurso, setIsModalDeleteOpen, setModalDeleteConcursoId })
{
    const handleEdit = () => {
        setModalEditConcurso(concurso);
        setIsModalEditOpen(true);
    };

    const handleDelete = () => {
        setModalDeleteConcursoId(concurso.id);
        setIsModalDeleteOpen(true);
    };

    return (
        <div className="task-item-content">
            <span className="task-project">
                <span className="task-project-name">
                	{concurso.nombre}
                </span>
                <span className="task-time">
                	Lugar {concurso.departamento}
                </span>
           	</span>
            <span className="task-title">{concurso.fecha}</span>
            <div className="task-actions">
                <button className="task-edit-btn"
                	onClick={handleEdit}>Edit</button>
                <button className="task-delete-btn"
                	onClick={handleDelete}>Delete</button>
            </div>
        </div>
    );
}

export default Concurso;