import {createParticipante} from "../participante-utils";

function AddParticipanteForm({newParticipante, setNewParticipante, projectId, reloadParticipantes })
{
    const clearParticipanteCreate = () => {
        setNewParticipante({nombre: '', departamento: '', feria:''});
    };
    const submitParticipanteCreate = () => {
        createParticipante(newParticipante).then(() => {
            setNewParticipante({nombre: '', departamento: '', fecha:''});
            reloadParticipantes();
        });
    };

    return (
        <>
            <h2 className="add-task-header">Crear Participante</h2>

            <h3 className="add-task-header">Nombre</h3>
            <input type="text"
                   className="add-task-input"
                   onChange={(e) => setNewParticipante({
                   	...newParticipante,
                    nombre: e.target.value
                   })}
                   value={newParticipante.nombre}
            />
            <h3 className="add-task-input-header">Lugar</h3>
            <input type="text" 
                    className="add-task-input"
                      onChange={(e) => setNewParticipante({
                      	...newParticipante,
                        departamento: e.target.value
                      })}
                      value={newParticipante.departamento || ''}
            />
            <h3 className="add-task-input-header">Fecha</h3>
            <input type="text" 
                    className="add-task-input"
                      onChange={(e) => setNewParticipante({
                      	...newParticipante,
                        fecha: e.target.value
                      })}
                      value={newParticipante.fecha || ''}
            />
            <div className="add-task-actions">
                <button className="add-task-btn add-task-btn-cancel"
                        onClick={clearParticipanteCreate}>Clear
                </button>
                <button className="add-task-btn add-task-btn-submit"
                        onClick={submitParticipanteCreate}>Add</button>
            </div>
        </>
    );
}

export default AddParticipanteForm;