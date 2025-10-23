import { useState } from 'react';
import Saludo from './Saludo.jsx';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const addTask = () => {
    const text = input.trim();
    if (!text) return;
    const task = { id: Date.now(), text };
    setTasks((prev) => [task, ...prev]);
    setInput('');
  };

  const removeTask = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  const onKeyDown = (e) => {
    if (e.key === 'Enter') addTask();
  };

  return (
    <section style={{ maxWidth: 600, margin: '24px auto', textAlign: 'left' }}>
      <h2>To‑Do List</h2>
      <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
        <input
          aria-label='Nueva tarea'
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={onKeyDown}
          placeholder='Escribe una tarea...'
          style={{ flex: 1, padding: '8px 10px' }}
        />
        <button onClick={addTask} style={{ padding: '8px 12px' }}>
          Agregar
        </button>
      </div>

      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {tasks.length === 0 && (
          <li style={{ color: '#666' }}>No hay tareas todavía.</li>
        )}
        {tasks.map((task) => (
          <li
            key={task.id}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '8px 0',
              borderBottom: '1px solid #eee',
            }}
          >
            <span>{task.text}</span>
            <button
              onClick={() => removeTask(task.id)}
              aria-label={`Eliminar ${task.text}`}
              style={{ color: '#900' }}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: '24px' }}>
      <h1>Ejemplo: To‑Do simple</h1>
      <Saludo nombre='Estudiante de Diseno Web II' />
      <TodoList />
    </div>
  );
}

export default App;
