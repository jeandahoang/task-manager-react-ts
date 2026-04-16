import { useState , useEffect } from 'react';
import type { Task } from './types/Task';
import { TaskItem } from './components/TaskItem';
import './App.css'

function App() {
  // set default state
  const [tasks, setTasks] = useState<Task[]>([]);

  const toggleTask = (id: string) => {
    setTasks(prev => prev.map(t => t.id === id ? {...t, isCompleted: !t.isCompleted} : t))
  };

  useEffect(() => {
     fetch('../data/tasks.json')
    .then(response => response.json())
    .then((jsonData: Task[]) => setTasks(jsonData))
    .catch(error => console.log('Error loading JSON:', error));
  }, []);

  return (
    <>
      <div className="app-container">
        <h1>My Book List</h1>
        {tasks.map(task => (
            <TaskItem key={task.id} task={task} onToggle={toggleTask}/>
        ))}
      </div>
    </>
  );
}

export default App
