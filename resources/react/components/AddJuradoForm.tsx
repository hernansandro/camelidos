import {createJurado} from "../jurado-utils";

function AddJuradoForm({newJurado, setNewJurado, projectId, reloadJurados })
{
    const clearJuradoCreate = () => {
        setNewJurado({nombre: '', departamento: '', feria:''});
    };
    const submitJuradoCreate = () => {
        createJurado(newJurado).then(() => {
            setNewJurado({nombre: '', departamento: '', fecha:''});
            reloadJurados();
        });
    };

    return (
        <>
            <h2 className="add-task-header">Crear Jurado</h2>

            <h3 className="add-task-header">Nombre</h3>
            <input type="text"
                   className="add-task-input"
                   onChange={(e) => setNewJurado({
                   	...newJurado,
                    nombre: e.target.value
                   })}
                   value={newJurado.nombre}
            />
            <h3 className="add-task-input-header">Lugar</h3>
            <input type="text" 
                    className="add-task-input"
                      onChange={(e) => setNewJurado({
                      	...newJurado,
                        departamento: e.target.value
                      })}
                      value={newJurado.departamento || ''}
            />
            <h3 className="add-task-input-header">Fecha</h3>
            <input type="text" 
                    className="add-task-input"
                      onChange={(e) => setNewJurado({
                      	...newJurado,
                        fecha: e.target.value
                      })}
                      value={newJurado.fecha || ''}
            />
            <div className="add-task-actions">
                <button className="add-task-btn add-task-btn-cancel"
                        onClick={clearJuradoCreate}>Clear
                </button>
                <button className="add-task-btn add-task-btn-submit"
                        onClick={submitJuradoCreate}>Add</button>
            </div>
        </>
    );
}

export default AddJuradoForm;