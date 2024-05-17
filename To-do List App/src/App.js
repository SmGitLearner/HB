import React, { useState, useEffect } from 'react';
import './App.css'
function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  const addTodo = () => {
    if (inputValue.trim() !== '') {
      const newTodo = { id: Date.now(), text: inputValue };
      setTodos([...todos, newTodo]);
      localStorage.setItem('todos', JSON.stringify([...todos, newTodo]));
      setInputValue('');
    }
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const editTodo = (id, newText) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, text: newText };
      }
      return todo;
    });
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
    setEditId(null);
  };

  const toggleEdit = (id) => {
    setEditId(id === editId ? null : id);
  };

  return (
    <div class="container">
      <h2>To-Do List</h2>
      <input type="text" id="input" value={inputValue} onChange={handleInputChange} />
      <button onClick={addTodo} id='add'>Add</button>
      
      <ol>
        {todos.map(todo => (
          <li key={todo.id}>
            {editId === todo.id ? (
              <input
                type="text"
                value={todo.text}
                onChange={(e) => editTodo(todo.id, e.target.value)}
                autoFocus
              />
            ) : (
              <span id="litem">{todo.text}</span>
            )}
            
            <button id='edit' onClick={() => toggleEdit(todo.id)}>{editId === todo.id ? 'Save' : 'Edit'}</button>
            <button id='delete' onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ol>
      
    </div>
  );
}

export default TodoList;
