import Slice from "./Slice";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

const Burger = ({ slices, setSlices }) => {
  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(slices);
    const [reordered] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reordered);

    setSlices(items);
  };

  const removeSlice = (id) => {
    setSlices(slices.filter((slice) => slice.id !== id));
  };

  return (
    <div className="flex flex-col items-center">
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="burger">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {/* Bread Top */}
              <div className="w-72 h-14 bg-yellow-700 rounded-t-full mb-1" />

              {slices.map((slice, index) => (
                <Draggable key={slice.id} draggableId={slice.id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="relative"
                    >
                      <Slice type={slice.type} />
                      <button
                        onClick={() => removeSlice(slice.id)}
                        className="
                          absolute
                          right-[-50px]
                          top-0
                          bg-red-500
                          text-white
                          px-2
                          rounded
                        "
                      >
                        X
                      </button>
                    </div>
                  )}
                </Draggable>
              ))}

              {provided.placeholder}

              {/* Bread Bottom */}
              <div className="w-72 h-10 bg-yellow-800 rounded-b-lg mt-1" />
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default Burger;
