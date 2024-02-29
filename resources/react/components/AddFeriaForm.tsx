import {createFeria} from "../utils";

function AddFeriaForm({newFeria, setNewFeria, projectId, reloadFerias })
{
    const clearFeriaCreate = () => {
        setNewFeria({nombre: '', departamento: '', feria:''});
    };
    const submitFeriaCreate = () => {
        createFeria(newFeria).then(() => {
            setNewFeria({nombre: '', departamento: '', fecha:''});
            reloadFerias();
        });
    };

    return (
        <>
            <h2 className="add-task-header">Crear Feria</h2>

            <h3 className="add-task-header">Nombre</h3>
            <input type="text"
                   className="add-task-input"
                   onChange={(e) => setNewFeria({
                   	...newFeria,
                    nombre: e.target.value
                   })}
                   value={newFeria.nombre}
            />
            <h3 className="add-task-input-header">Lugar</h3>
            <input type="text" 
                    className="add-task-input"
                      onChange={(e) => setNewFeria({
                      	...newFeria,
                        departamento: e.target.value
                      })}
                      value={newFeria.departamento || ''}
            />
            <h3 className="add-task-input-header">Fecha</h3>
            <input type="text" 
                    className="add-task-input"
                      onChange={(e) => setNewFeria({
                      	...newFeria,
                        fecha: e.target.value
                      })}
                      value={newFeria.fecha || ''}
            />
            <div className="add-task-actions">
                <button className="add-task-btn add-task-btn-cancel"
                        onClick={clearFeriaCreate}>Clear
                </button>
                <button className="add-task-btn add-task-btn-submit"
                        onClick={submitFeriaCreate}>Add</button>
            </div>
        </>
    );
}

export default AddFeriaForm;