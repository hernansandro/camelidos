import {createConcurso} from "../concurso-utils";

function AddConcursoForm({newConcurso, setNewConcurso, projectId, reloadConcursos })
{
    const clearConcursoCreate = () => {
        setNewConcurso({nombre: '', departamento: '', feria:''});
    };
    const submitConcursoCreate = () => {
        createConcurso(newConcurso).then(() => {
            setNewConcurso({nombre: '', departamento: '', fecha:''});
            reloadConcursos();
        });
    };

    return (
        <>
            <h2 className="add-task-header">Crear Concurso</h2>

            <h3 className="add-task-header">Nombre</h3>
            <input type="text"
                   className="add-task-input"
                   onChange={(e) => setNewConcurso({
                   	...newConcurso,
                    nombre: e.target.value
                   })}
                   value={newConcurso.nombre}
            />
            <h3 className="add-task-input-header">Lugar</h3>
            <input type="text" 
                    className="add-task-input"
                      onChange={(e) => setNewConcurso({
                      	...newConcurso,
                        departamento: e.target.value
                      })}
                      value={newConcurso.departamento || ''}
            />
            <h3 className="add-task-input-header">Fecha</h3>
            <input type="text" 
                    className="add-task-input"
                      onChange={(e) => setNewConcurso({
                      	...newConcurso,
                        fecha: e.target.value
                      })}
                      value={newConcurso.fecha || ''}
            />
            <div className="add-task-actions">
                <button className="add-task-btn add-task-btn-cancel"
                        onClick={clearConcursoCreate}>Clear
                </button>
                <button className="add-task-btn add-task-btn-submit"
                        onClick={submitConcursoCreate}>Add</button>
            </div>
        </>
    );
}

export default AddConcursoForm;