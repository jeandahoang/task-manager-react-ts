import type {Task} from '../types/Task';

interface TaskItemProps {
    task: Task;
    onToggle: (id: string) => void;
}

// using standard function declaration approach
export function TaskItem({task, onToggle} : TaskItemProps) {
    return (
        <div className="task-item">
            <input type="checkbox" checked={task.isCompleted} onChange={()=>onToggle(task.id)} />
            <span style={{textDecoration: task.isCompleted ? 'line-through' : 'none'}}>{task.title} {task.dueDate ? `by this date: ${new Date(task.dueDate).toLocaleDateString()}` : '(optional)'}</span>
        </div>
    );
};