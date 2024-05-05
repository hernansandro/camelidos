import {createCalificacion} from "../calificacion-utils";

function AddCalificacionForm({newCalificacion, setNewCalificacion, projectId, reloadCalificacions })
{
    const clearCalificacionCreate = () => {
        setNewCalificacion({nombre: '', departamento: '', feria:''});
    };
    const submitCalificacionCreate = () => {
        createCalificacion(newCalificacion).then(() => {
            setNewCalificacion({nombre: '', departamento: '', fecha:''});
            reloadCalificacions();
        });
    };

    return (
        <>
            <h2 className="add-task-header">Crear Calificacion</h2>

            <h3 className="add-task-header">Nombre</h3>
            <input type="text"
                   className="add-task-input"
                   onChange={(e) => setNewCalificacion({
                   	...newCalificacion,
                    nombre: e.target.value
                   })}
                   value={newCalificacion.nombre}
            />
            <h3 className="add-task-input-header">Lugar</h3>
            <input type="text" 
                    className="add-task-input"
                      onChange={(e) => setNewCalificacion({
                      	...newCalificacion,
                        departamento: e.target.value
                      })}
                      value={newCalificacion.departamento || ''}
            />
            <h3 className="add-task-input-header">Fecha</h3>
            <input type="text" 
                    className="add-task-input"
                      onChange={(e) => setNewCalificacion({
                      	...newCalificacion,
                        fecha: e.target.value
                      })}
                      value={newCalificacion.fecha || ''}
            />
            <div className="add-task-actions">
                <button className="add-task-btn add-task-btn-cancel"
                        onClick={clearCalificacionCreate}>Clear
                </button>
                <button className="add-task-btn add-task-btn-submit"
                        onClick={submitCalificacionCreate}>Add</button>
            </div>
        </>
    );
}

export default AddCalificacionForm;