import { useState } from 'react';
import type { Task } from './types/Task';
import { TaskItem } from './components/TaskItem';
import './App.css'

function App() {
  // set default state
  const [tasks, setTasks] = useState<Task[]>([
    {id: "1" , title: "Grab coffee in the morning!", isCompleted: false},
    {id: "2" , title: "Drop off at cleaners.", isCompleted: false},
    {id: "3" , title: "Pick up items at store.", isCompleted: false}


  ]);
  const toggleTask = (id: string) => {
    setTasks(prev => prev.map(t => t.id === id ? {...t, isCompleted: !t.isCompleted} : t))
  };

  return (
    <>
      <div className="app-container">
        <h1>My Task Manager</h1>
        
        
        {tasks.map(task => (
            <TaskItem key={task.id} task={task} onToggle={toggleTask}/>
        ))}
        
      </div>
    </>
  );
}

export default App
