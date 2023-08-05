'use client';

import { useState } from 'react';

const WeekOne = () => {
  const [input, setInput] = useState('');
  const [todo, setTodo] = useState<{ text: string; completed: boolean }[]>([]);

  const handleClick = () => {
    setTodo((current) => [...current, { text: input, completed: false }]);
    setInput('');
  };

  const handleMarkComplete = (index: number) => {
    const updatedTodo = todo.map((item, i) =>
      i === index ? { ...item, completed: !item.completed } : item
    );
    setTodo(updatedTodo);
  };

  const handleDeleteItem = (index: number) => {
    const updatedTodo = todo.filter((_, i) => i !== index);
    setTodo(updatedTodo);
  };

  return (
    <div>
      <h2>To Do List</h2>
      <br />

      <input onChange={(e) => setInput(e.target.value)} value={input} />
      <button type={'button'} onClick={handleClick}>
        Add
      </button>
      <br />
      <br />
      <div>
        <ul>
          {todo.map((item, index) => (
            <li key={`${item.text}-${Math.random()}`}>
              <span
                style={{
                  textDecoration: item.completed ? 'line-through' : 'none'
                }}
              >
                {item.text}
              </span>
              <button type={'button'} onClick={() => handleMarkComplete(index)}>
                {item.completed ? 'Undo' : 'Complete'}
              </button>
              <button type={'button'} onClick={() => handleDeleteItem(index)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WeekOne;
