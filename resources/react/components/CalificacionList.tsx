import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";
import Calificacion from "./Calificacion";
import {reorderCalificacions} from "../utils";

const getItemStyle = (isDragging, draggableStyle) => ({
    background: isDragging ? 'lightgreen' : 'var(--light)',
    ...draggableStyle,
});

function CalificacionList({ calificacionss, setIsModalEditOpen, setModalEditCalificacion, setIsModalDeleteOpen, setModalDeleteCalificacionId, projectId, setCalificacions })
{
    const handleDragEnd = (result) => {
        if (!result.destination || result.destination.index === result.source.index) {
            return;
        }

        const items = Array.from(calificacionss);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
        reorderCalificacions(projectId, result.source.index + 1, result.destination.index + 1);

        setCalificacions(items);
    };

    return (
        <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="droppable">
                
                {(provided) => (
                    <div>
                        <h2>Todas las Calificacions</h2>
                    <ul {...provided.droppableProps} ref={provided.innerRef}>
                        {calificacionss.map((calificacions, index) => (
                            <Draggable key={calificacions.id.toString()} draggableId={calificacions.id.toString()} index={index}>
                                {(provided, snapshot) => (
                                    <li ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        className="task-item"
                                        style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
                                    >
                                        <Calificacion calificacions={calificacions}
                                              setIsModalEditOpen={setIsModalEditOpen}
                                              setModalEditCalificacion={setModalEditCalificacion}
                                              setIsModalDeleteOpen={setIsModalDeleteOpen}
                                              setModalDeleteCalificacionId={setModalDeleteCalificacionId}
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

export default CalificacionList;