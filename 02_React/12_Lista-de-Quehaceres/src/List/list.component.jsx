import { useState } from "react";

const List = (props) => {
  const { taskList, setTaskList, onDeleteTasks } = props;

  return (
    <div>
      <ul>
        {taskList.map((task) => (
          <li>
            {task.description}
            <button onClick={() => onDeleteTasks(task.description)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
