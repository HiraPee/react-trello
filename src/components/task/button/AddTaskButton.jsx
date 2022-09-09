import React from "react";
import { v4 as uuid } from "uuid";

export const AddTaskButton = ({ taskCardsList, setTaskCardsList }) => {
  const addTaskCard = () => {
    const taskCardId = uuid();
    //taskカードを追加する
    setTaskCardsList([
      ...taskCardsList,
      {
        id: taskCardId,
        draggableId: `task${taskCardId} `,
      },
    ]);
  };

  return (
    <div className="addTaskCardButtonArea">
      <button className="addTaskCardButton" onClick={addTaskCard}>
        +
      </button>
    </div>
  );
};
