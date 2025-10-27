import React, { useState, useEffect, useRef } from "react";

// React Todo List (single-file component)
// Features:
// - Add, edit, delete todos
// - Toggle complete
// - Filter: All / Active / Completed
// - Persist to localStorage
// - Accessible: keyboard add (Enter), focus management
// - Responsive Tailwind UI

export default function TodoApp() {
  const [todos, setTodos] = useState(() => {
    try {
      const raw = localStorage.getItem("todos_v1");
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  });

  const [text, setText] = useState("");
  const [filter, setFilter] = useState("all"); // all | active | completed
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    localStorage.setItem("todos_v1", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  function addTodo(e) {
    e?.preventDefault?.();
    const trimmed = text.trim();
    if (!trimmed) return;
    const newTodo = {
      id: Date.now().toString(),
      text: trimmed,
      completed: false,
      createdAt: new Date().toISOString(),
    };
    setTodos((t) => [newTodo, ...t]);
    setText("");
  }

  function toggleTodo(id) {
    setTodos((t) => t.map((item) => (item.id === id ? { ...item, completed: !item.completed } : item)));
  }

  function removeTodo(id) {
    setTodos((t) => t.filter((item) => item.id !== id));
  }

  function startEdit(id, currentText) {
    setEditingId(id);
    setEditingText(currentText);
  }

  function saveEdit(e) {
    e?.preventDefault?.();
    const trimmed = editingText.trim();
    if (!trimmed) {
      // if user clears text, delete the todo
      setTodos((t) => t.filter((item) => item.id !== editingId));
      cancelEdit();
      return;
    }
    setTodos((t) => t.map((item) => (item.id === editingId ? { ...item, text: trimmed } : item)));
    cancelEdit();
  }

  function cancelEdit() {
    setEditingId(null);
    setEditingText("");
  }

  function clearCompleted() {
    setTodos((t) => t.filter((item) => !item.completed));
  }

  const filtered = todos.filter((t) => {
    if (filter === "active") return !t.completed;
    if (filter === "completed") return t.completed;
    return true;
  });

  const remaining = todos.filter((t) => !t.completed).length;

  return (
    <div className="min-h-screen bg-gray-50 flex items-start justify-center p-6">
      <div className="w-full max-w-2xl">
        <header className="mb-6">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Todo List</h1>
          <p className="text-sm text-gray-600">Simple, fast, and persistent. Built with React + Tailwind.</p>
        </header>

        <form onSubmit={addTodo} className="flex gap-2 mb-4">
          <input
            ref={inputRef}
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Escape") setText("");
            }}
            className="flex-1 px-4 py-3 rounded-lg shadow-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-300"
            placeholder="What needs to be done? (press Enter to add)"
            aria-label="New todo"
          />
          <button
            type="submit"
            className="px-4 py-3 rounded-lg bg-indigo-600 text-white font-medium shadow hover:bg-indigo-700 disabled:opacity-50"
            disabled={!text.trim()}
          >
            Add
          </button>
        </form>

        <div className="bg-white rounded-xl shadow divide-y divide-gray-100 overflow-hidden">
          <ul className="max-h-[60vh] overflow-auto">
            {filtered.length === 0 ? (
              <li className="p-6 text-center text-gray-500">No todos — add a new one above.</li>
            ) : (
              filtered.map((item) => (
                <li key={item.id} className="flex items-center justify-between px-4 py-3 hover:bg-gray-50">
                  <div className="flex items-center gap-3">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={item.completed}
                        onChange={() => toggleTodo(item.id)}
                        className="w-5 h-5 rounded text-indigo-600"
                        aria-label={`Mark ${item.text} as ${item.completed ? "incomplete" : "complete"}`}
                      />
                      {editingId === item.id ? (
                        <form onSubmit={saveEdit} className="w-full">
                          <input
                            autoFocus
                            value={editingText}
                            onChange={(e) => setEditingText(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === "Escape") cancelEdit();
                            }}
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-200"
                          />
                        </form>
                      ) : (
                        <span className={`select-none ${item.completed ? "line-through text-gray-400" : "text-gray-900"}`}>
                          {item.text}
                        </span>
                      )}
                    </label>
                  </div>

                  <div className="flex items-center gap-2">
                    {editingId === item.id ? (
                      <>
                        <button onClick={saveEdit} className="px-3 py-1 rounded text-sm bg-green-50 text-green-700">Save</button>
                        <button onClick={cancelEdit} className="px-3 py-1 rounded text-sm bg-red-50 text-red-700">Cancel</button>
                      </>
                    ) : (
                      <>
                        <button
                          onClick={() => startEdit(item.id, item.text)}
                          className="px-3 py-1 rounded text-sm bg-yellow-50 text-yellow-800"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => removeTodo(item.id)}
                          className="px-3 py-1 rounded text-sm bg-red-50 text-red-700"
                        >
                          Delete
                        </button>
                      </>
                    )}
                  </div>
                </li>
              ))
            )}
          </ul>

          <div className="flex items-center justify-between px-4 py-3">
            <div className="text-sm text-gray-600">{remaining} item{remaining !== 1 ? "s" : ""} left</div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setFilter("all")}
                className={`px-3 py-1 rounded ${filter === "all" ? "bg-indigo-600 text-white" : "bg-gray-50 text-gray-700"}`}
              >
                All
              </button>
              <button
                onClick={() => setFilter("active")}
                className={`px-3 py-1 rounded ${filter === "active" ? "bg-indigo-600 text-white" : "bg-gray-50 text-gray-700"}`}
              >
                Active
              </button>
              <button
                onClick={() => setFilter("completed")}
                className={`px-3 py-1 rounded ${filter === "completed" ? "bg-indigo-600 text-white" : "bg-gray-50 text-gray-700"}`}
              >
                Completed
              </button>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={clearCompleted} className="px-3 py-1 rounded bg-red-50 text-red-700 text-sm">Clear completed</button>
            </div>
          </div>
        </div>

        <footer className="mt-4 text-xs text-gray-500 text-center">Tip: press Enter to add a todo. Edited text empty &rarr; will delete the todo.</footer>
      </div>
    </div>
  );
}
