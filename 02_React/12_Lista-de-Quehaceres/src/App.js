import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

import List from "./List/list.component";
import Description from "./Description/description.component";

function App() {
  const [description, setDescription] = useState("");
  const [taskList, setTaskList] = useState([]);

  const handleAddTasks = (tasks) => {
    setTaskList((taskList) => [...taskList, tasks]);
  };

  const handleDeleteTasks = (tasks) => {
    setTaskList((taskList) =>
      taskList.filter((task) => task.description !== tasks)
    );
  };

  return (
    <div>
      <div>
        <Description // Form component
          onAddTasks={handleAddTasks}
          description={description}
          setDescription={setDescription}
        />
      </div>
      <div>
        <List
          taskList={taskList}
          setList={setTaskList}
          onDeleteTasks={handleDeleteTasks}
        />
      </div>
    </div>
  );
}

export default App;
