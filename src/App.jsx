import { useRef, useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef();
  const [editText, setEditText] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  const handleAddTodo = () => {
    const text = inputRef.current.value;
    const newItem = { completed: false, text };
    setTodos([...todos, newItem]);
    inputRef.current.value = "";
  };

  const handleItemDone = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const handleDeleteItem = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const handleEditStart = (index, text) => {
    setEditingIndex(index);
    setEditText(text);
  };

  const handleEditSave = (index) => {
    const newTodo = [...todos];
    newTodo[index].text = editText;
    setTodos(newTodo);
    setEditingIndex(null);
  };

  const handleEditCancel = () => {
    setEditingIndex(null);
    setEditText("");
  };

  return (
    <>
      <h2 className="title"> To Do List</h2>
      <div className="input-container">
        <input
          className="input-list"
          ref={inputRef}
          placeholder="Enter item..."
        />
        <button className="btn-add" onClick={handleAddTodo}>
          Add
        </button>
      </div>

      <ul className="list">
        {todos.map(({ text, completed }, index) => {
          return (
            <div key={index}>
              {editingIndex === index ? (
                <>
                  <input
                    className="edit-input"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                  />
                  <span
                    onClick={() => handleEditSave(index)}
                    className="btn-save"
                  >
                    ✓
                  </span>
                  <span onClick={handleEditCancel} className="btn-cancel">
                    ✕
                  </span>
                </>
              ) : (
                <>
                  <li
                    className={completed ? "done" : ""}
                    onClick={() => handleItemDone(index)}
                  >
                    {text}
                  </li>
                  <span
                    onClick={() => handleEditStart(index, text)}
                    className="btn-edit"
                  >
                    ✏️
                  </span>
                  <span
                    onClick={() => handleDeleteItem(index)}
                    className="btn-delete"
                  >
                    {" "}
                    🗑️{" "}
                  </span>
                </>
              )}
            </div>
          );
        })}
      </ul>
    </>
  );
}

export default App;
