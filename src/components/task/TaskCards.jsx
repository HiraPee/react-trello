import React, { useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { AddTaskButton } from "./button/AddTaskButton";
import { TaskCard } from "./TaskCard";

export const TaskCards = () => {
  const [taskCardsList, setTaskCardsList] = useState([
    {
      id: "0",
      draggableId: "item0",
    },
  ]);

  const handleDragEnd = (result) => {
    //タスクの並び替え
    const remove = taskCardsList.splice(result.source.index, 1);
    taskCardsList.splice(result.destination.index, 0, remove[0]);

    setTaskCardsList(taskCardsList);
  };
  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="droppable" direction="horizontal">
        {(provided) => (
          <div className="taskCardsArea" {...provided.droppableProps} ref={provided.innerRef}>
            {taskCardsList.map((taskCard, index) => (
              <TaskCard key={taskCard.id} index={index} taskCardsList={taskCardsList} setTaskCardsList={setTaskCardsList} taskCard={taskCard} />
            ))}
            {provided.placeholder}

            <AddTaskButton taskCardsList={taskCardsList} setTaskCardsList={setTaskCardsList} />
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};
