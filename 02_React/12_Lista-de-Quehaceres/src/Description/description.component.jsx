import { useState } from "react";

const Description = (props) => {
  const { description, setDescription, onAddTasks } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
    const newItem = { description };
    console.log(newItem);
    onAddTasks(newItem);
    setDescription("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="task"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button>Add</button>
      </form>
    </div>
  );
};

export default Description;
