//MOdule 1 Project
//todo app


import React, { useState } from "react";

function Project1() {
  const [task, setTask] = useState("");       // Input value
  const [tasks, setTasks] = useState([]);     // List of tasks

  // Add task
  const addTask = () => {
    if (task.trim() === "") return;  // Prevent empty tasks
    setTasks([...tasks, task]);
    setTask(""); // Clear input
  };

  // Delete task
  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>✅TODO App</h1>

      {/* Input + Button */}
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task"
      />
      <button onClick={addTask}>Add</button>

      {/* Task List */}
      <ul>
        {tasks.length === 0 ? (
          <p>No tasks yet...</p>
        ) : (
          tasks.map((t, index) => (
            <li key={index}>
              {t} <button onClick={() => deleteTask(index)}>❌</button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default Project1;
