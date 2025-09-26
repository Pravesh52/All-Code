//MOdule 1 Project
//todo app


// import React, { useState } from "react";

// function Project1() {
//   const [task, setTask] = useState("");       // Input value
//   const [tasks, setTasks] = useState([]);     // List of tasks

//   // Add task
//   const addTask = () => {
//     if (task.trim() === "") return;  // Prevent empty tasks
//     setTasks([...tasks, task]);
//     setTask(""); // Clear input
//   };

//   // Delete task
//   const deleteTask = (index) => {
//     const newTasks = tasks.filter((_, i) => i !== index);
//     setTasks(newTasks);
//   };

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h1>✅TODO App</h1>

//       {/* Input + Button */}
//       <input
//         type="text"
//         value={task}
//         onChange={(e) => setTask(e.target.value)}
//         placeholder="Enter a task"
//       />
//       <button onClick={addTask}>Add</button>

//       {/* Task List */}
//       <ul>
//         {tasks.length === 0 ? (
//           <p>No tasks yet...</p>
//         ) : (
//           tasks.map((t, index) => (
//             <li key={index}>
//               {t} <button onClick={() => deleteTask(index)}>❌</button>
//             </li>
//           ))
//         )}
//       </ul>
//     </div>
//   );
// }

// export default Project1;


// module 2 Project TODO APP

// import React, { useState, useEffect, useRef } from "react";

// function Project1() {
//   const [task, setTask] = useState("");              // Input value
//   const [tasks, setTasks] = useState([]);            // List of tasks
//   const inputRef = useRef(null);                     // Ref for auto-focus

//   // Load tasks from localStorage on first render
//   useEffect(() => {
//     const savedTasks = JSON.parse(localStorage.getItem("tasks"));
//     if (savedTasks) setTasks(savedTasks);
//   }, []);

//   // Save tasks to localStorage whenever tasks change
//   useEffect(() => {
//     localStorage.setItem("tasks", JSON.stringify(tasks));
//   }, [tasks]);

//   // Auto-focus input on first render
//   useEffect(() => {
//     inputRef.current.focus();
//   }, []);

//   // Add task
//   const addTask = () => {
//     if (task.trim() === "") return;
//     const newTask = { text: task, completed: false };
//     setTasks([...tasks, newTask]);
//     setTask("");
//     inputRef.current.focus(); // focus back to input
//   };

//   // Delete task
//   const deleteTask = (index) => {
//     const newTasks = tasks.filter((_, i) => i !== index);
//     setTasks(newTasks);
//   };

//   // Toggle task complete
//   const toggleComplete = (index) => {
//     const newTasks = tasks.map((t, i) =>
//       i === index ? { ...t, completed: !t.completed } : t
//     );
//     setTasks(newTasks);
//   };

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h1>✅ TODO App</h1>

//       {/* Input + Button */}
//       <input
//         ref={inputRef}
//         type="text"
//         value={task}
//         onChange={(e) => setTask(e.target.value)}
//         placeholder="Enter a task"
//       />
//       <button onClick={addTask}>Add</button>

//       {/* Task List */}
//       <ul style={{ listStyle: "none", padding: 0 }}>
//         {tasks.length === 0 ? (
//           <p>No tasks yet...</p>
//         ) : (
//           tasks.map((t, index) => (
//             <li key={index} style={{ margin: "8px 0" }}>
//               <span
//                 onClick={() => toggleComplete(index)}
//                 style={{
//                   textDecoration: t.completed ? "line-through" : "none",
//                   cursor: "pointer",
//                   marginRight: "10px",
//                 }}
//               >
//                 {t.text}
//               </span>
//               <button onClick={() => deleteTask(index)}>❌</button>
//             </li>
//           ))
//         )}
//       </ul>
//     </div>
//   );
// }

// export default Project1;

//module 3 project 

import React, { useState, useEffect, useRef } from "react";
 
function Project1() {
  const [transactions, setTransactions] = useState([]);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("transactions"));
    if (saved) setTransactions(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const addTransaction = () => {
    if (text.trim() === "" || amount === "") return;
    const newTransaction = { text, amount: parseFloat(amount) };
    setTransactions([...transactions, newTransaction]);
    setText("");
    setAmount("");
    inputRef.current.focus();
  };

  const deleteTransaction = (index) => {
    const newTransactions = transactions.filter((_, i) => i !== index);
    setTransactions(newTransactions);
  };

  const balance = transactions.reduce((acc, t) => acc + t.amount, 0);
  const income = transactions
    .filter((t) => t.amount > 0)
    .reduce((acc, t) => acc + t.amount, 0);
  const expense = transactions
    .filter((t) => t.amount < 0)
    .reduce((acc, t) => acc + t.amount, 0);

  return (
    <div className="container">
      <h1>💰 Expense Tracker</h1>

      <div className="balance">Balance: ${balance.toFixed(2)}</div>

      <div className="summary">
        <div>
          <h3>Income</h3>
          <p className="income">${income.toFixed(2)}</p>
        </div>
        <div>
          <h3>Expense</h3>
          <p className="expense">${Math.abs(expense).toFixed(2)}</p>
        </div>
      </div>

      <div className="input-section">
        <input
          ref={inputRef}
          type="text"
          placeholder="Description"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount (+/-)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button onClick={addTransaction}>Add</button>
      </div>

      <ul className="transaction-list">
        {transactions.map((t, index) => (
          <li key={index} className="transaction-item">
            <span>{t.text}</span>
            <span>
              <span className={t.amount >= 0 ? "income" : "expense"}>
                {t.amount >= 0 ? "+" : "-"}${Math.abs(t.amount).toFixed(2)}
              </span>
              <button onClick={() => deleteTransaction(index)}>❌</button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Project1;


