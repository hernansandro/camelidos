import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";
import Participante from "./Participante";
import {reorderParticipantes} from "../participante-utils";

const getItemStyle = (isDragging, draggableStyle) => ({
    background: isDragging ? 'lightgreen' : 'var(--light)',
    ...draggableStyle,
});

function ParticipanteList({ participantes, setIsModalEditOpen, setModalEditParticipante, setIsModalDeleteOpen, setModalDeleteParticipanteId, projectId, setParticipantes })
{
    const handleDragEnd = (result) => {
        if (!result.destination || result.destination.index === result.source.index) {
            return;
        }

        const items = Array.from(participantes);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
        reorderParticipantes(projectId, result.source.index + 1, result.destination.index + 1);

        setParticipantes(items);
    };

    return (
        <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="droppable">
                
                {(provided) => (
                    <div>
                        <h2>Todas las Participantes</h2>
                    <ul {...provided.droppableProps} ref={provided.innerRef}>
                        {participantes.map((participante, index) => (
                            <Draggable key={participante.id.toString()} draggableId={participante.id.toString()} index={index}>
                                {(provided, snapshot) => (
                                    <li ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        className="task-item"
                                        style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
                                    >
                                        <Participante participante={participante}
                                              setIsModalEditOpen={setIsModalEditOpen}
                                              setModalEditParticipante={setModalEditParticipante}
                                              setIsModalDeleteOpen={setIsModalDeleteOpen}
                                              setModalDeleteParticipanteId={setModalDeleteParticipanteId}
                                        />
                                    </li>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </ul>
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    );
}

export default ParticipanteList;