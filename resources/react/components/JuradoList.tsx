import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";
import Jurado from "./Jurado";
import {reorderJurados} from "../jurado-utils";

const getItemStyle = (isDragging, draggableStyle) => ({
    background: isDragging ? 'lightgreen' : 'var(--light)',
    ...draggableStyle,
});

function JuradoList({ jurados, setIsModalEditOpen, setModalEditJurado, setIsModalDeleteOpen, setModalDeleteJuradoId, projectId, setJurados })
{
    const handleDragEnd = (result) => {
        if (!result.destination || result.destination.index === result.source.index) {
            return;
        }

        const items = Array.from(jurados);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
        reorderJurados(projectId, result.source.index + 1, result.destination.index + 1);

        setJurados(items);
    };

    return (
        <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="droppable">
                
                {(provided) => (
                    <div>
                        <h2>Todas las Jurados</h2>
                    <ul {...provided.droppableProps} ref={provided.innerRef}>
                        {jurados.map((jurado, index) => (
                            <Draggable key={jurado.id.toString()} draggableId={jurado.id.toString()} index={index}>
                                {(provided, snapshot) => (
                                    <li ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        className="task-item"
                                        style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
                                    >
                                        <Jurado jurado={jurado}
                                              setIsModalEditOpen={setIsModalEditOpen}
                                              setModalEditJurado={setModalEditJurado}
                                              setIsModalDeleteOpen={setIsModalDeleteOpen}
                                              setModalDeleteJuradoId={setModalDeleteJuradoId}
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

export default JuradoList;