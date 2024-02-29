import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";
import Feria from "./Feria";
import {reorderFerias} from "../utils";

const getItemStyle = (isDragging, draggableStyle) => ({
    background: isDragging ? 'lightgreen' : 'grey',
    ...draggableStyle,
});

function FeriaList({ ferias, setIsModalEditOpen, setModalEditFeria, setIsModalDeleteOpen, setModalDeleteFeriaId, projectId, setFerias })
{
    const handleDragEnd = (result) => {
        if (!result.destination || result.destination.index === result.source.index) {
            return;
        }

        const items = Array.from(ferias);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
        reorderFerias(projectId, result.source.index + 1, result.destination.index + 1);

        setFerias(items);
    };

    return (
        <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="droppable">
                {(provided) => (
                    <ul {...provided.droppableProps} ref={provided.innerRef}>
                        {ferias.map((feria, index) => (
                            <Draggable key={feria.id.toString()} draggableId={feria.id.toString()} index={index}>
                                {(provided, snapshot) => (
                                    <li ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        className="task-item"
                                        style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
                                    >
                                        <Feria feria={feria}
                                              setIsModalEditOpen={setIsModalEditOpen}
                                              setModalEditFeria={setModalEditFeria}
                                              setIsModalDeleteOpen={setIsModalDeleteOpen}
                                              setModalDeleteFeriaId={setModalDeleteFeriaId}
                                        />
                                    </li>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </ul>
                )}
            </Droppable>
        </DragDropContext>
    );
}

export default FeriaList;