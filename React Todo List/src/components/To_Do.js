import React, { useState } from "react";
function To_Do()
{
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');
    const [editIndex, setEditIndex] = useState(null);
    const [editText, setEditText] = useState('');
  
    
    const handleAddTodo = () => {
      if (newTodo.trim() === '') return;
      setTodos([...todos, newTodo]);
      setNewTodo('');
    };
  
    const handleDeleteTodo = (index) => {
      const newTodos = todos.filter((_, i) => i !== index);
      setTodos(newTodos);
    };
  
    const handleEditTodo = (index) => {
      setEditIndex(index);
      setEditText(todos[index]);
    };
  
    const handleSaveEdit = () => {
      const newTodos = todos.map((todo, index) =>
        index === editIndex ? editText : todo
      );
      setTodos(newTodos);
      setEditIndex(null);
      setEditText('');
    };
  
    return (
      <div className="App">
        <h1>Todo List</h1>
        <div>
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Add a new todo"
          />
          <button onClick={handleAddTodo}>Add</button>
        </div>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              {editIndex === index ? (
                <>
                  <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                  />
                  <button onClick={handleSaveEdit}>Save</button>
                </>
              ) : (
                <>
                  {todo}
                  <button onClick={() => handleEditTodo(index)}>Edit</button>
                  <button onClick={() => handleDeleteTodo(index)}>Delete</button>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
}
export default To_Do;
