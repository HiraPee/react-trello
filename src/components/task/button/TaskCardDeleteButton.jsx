import React from "react";

export const TaskCardDeleteButton = ({ taskCardsList, setTaskCardsList, taskCard }) => {
  const taskCardDeleteButton = (id) => {
    //該当idのカードを削除
    setTaskCardsList(taskCardsList.filter((e) => e.id !== id));
  };

  return (
    <div>
      <button className="taskClassDeleteButton" onClick={() => taskCardDeleteButton(taskCard.id)}>
        <i className="fa-regular fa-circle-xmark"></i>
      </button>
    </div>
  );
};
