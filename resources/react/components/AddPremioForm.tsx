import {createPremio} from "../premio-utils";

function AddPremioForm({newPremio, setNewPremio, projectId, reloadPremios })
{
    const clearPremioCreate = () => {
        setNewPremio({nombre: '', departamento: '', feria:''});
    };
    const submitPremioCreate = () => {
        createPremio(newPremio).then(() => {
            setNewPremio({nombre: '', departamento: '', fecha:''});
            reloadPremios();
        });
    };

    return (
        <>
            <h2 className="add-task-header">Crear Premio</h2>

            <h3 className="add-task-header">Nombre</h3>
            <input type="text"
                   className="add-task-input"
                   onChange={(e) => setNewPremio({
                   	...newPremio,
                    nombre: e.target.value
                   })}
                   value={newPremio.nombre}
            />
            <h3 className="add-task-input-header">Lugar</h3>
            <input type="text" 
                    className="add-task-input"
                      onChange={(e) => setNewPremio({
                      	...newPremio,
                        departamento: e.target.value
                      })}
                      value={newPremio.departamento || ''}
            />
            <h3 className="add-task-input-header">Fecha</h3>
            <input type="text" 
                    className="add-task-input"
                      onChange={(e) => setNewPremio({
                      	...newPremio,
                        fecha: e.target.value
                      })}
                      value={newPremio.fecha || ''}
            />
            <div className="add-task-actions">
                <button className="add-task-btn add-task-btn-cancel"
                        onClick={clearPremioCreate}>Clear
                </button>
                <button className="add-task-btn add-task-btn-submit"
                        onClick={submitPremioCreate}>Add</button>
            </div>
        </>
    );
}

export default AddPremioForm;