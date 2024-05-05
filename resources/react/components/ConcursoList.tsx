import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";
import Concurso from "./Concurso";
import {reorderConcursos} from "../concurso-utils";

const getItemStyle = (isDragging, draggableStyle) => ({
    background: isDragging ? 'lightgreen' : 'var(--light)',
    ...draggableStyle,
});

function ConcursoList({ concursos, setIsModalEditOpen, setModalEditConcurso, setIsModalDeleteOpen, setModalDeleteConcursoId, projectId, setConcursos })
{
    const handleDragEnd = (result) => {
        if (!result.destination || result.destination.index === result.source.index) {
            return;
        }

        const items = Array.from(concursos);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
        reorderConcursos(projectId, result.source.index + 1, result.destination.index + 1);

        setConcursos(items);
    };

    return (
        <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="droppable">
                
                {(provided) => (
                    <div>
                        <h2>Todas los Concursos</h2>
                    <ul {...provided.droppableProps} ref={provided.innerRef}>
                        {concursos.map((concurso, index) => (
                            <Draggable key={concurso.id.toString()} draggableId={concurso.id.toString()} index={index}>
                                {(provided, snapshot) => (
                                    <li ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        className="task-item"
                                        style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
                                    >
                                        <Concurso concurso={concurso}
                                              setIsModalEditOpen={setIsModalEditOpen}
                                              setModalEditConcurso={setModalEditConcurso}
                                              setIsModalDeleteOpen={setIsModalDeleteOpen}
                                              setModalDeleteConcursoId={setModalDeleteConcursoId}
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

export default ConcursoList;