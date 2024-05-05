import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";
import Premio from "./Premio";
import {reorderPremios} from "../premio-utils";

const getItemStyle = (isDragging, draggableStyle) => ({
    background: isDragging ? 'lightgreen' : 'var(--light)',
    ...draggableStyle,
});

function PremioList({ premios, setIsModalEditOpen, setModalEditPremio, setIsModalDeleteOpen, setModalDeletePremioId, projectId, setPremios })
{
    const handleDragEnd = (result) => {
        if (!result.destination || result.destination.index === result.source.index) {
            return;
        }

        const items = Array.from(premios);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
        reorderPremios(projectId, result.source.index + 1, result.destination.index + 1);

        setPremios(items);
    };

    return (
        <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="droppable">
                
                {(provided) => (
                    <div>
                        <h2>Todas las Premios</h2>
                    <ul {...provided.droppableProps} ref={provided.innerRef}>
                        {premios.map((premio, index) => (
                            <Draggable key={premio.id.toString()} draggableId={premio.id.toString()} index={index}>
                                {(provided, snapshot) => (
                                    <li ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        className="task-item"
                                        style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
                                    >
                                        <Premio premio={premio}
                                              setIsModalEditOpen={setIsModalEditOpen}
                                              setModalEditPremio={setModalEditPremio}
                                              setIsModalDeleteOpen={setIsModalDeleteOpen}
                                              setModalDeletePremioId={setModalDeletePremioId}
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

export default PremioList;