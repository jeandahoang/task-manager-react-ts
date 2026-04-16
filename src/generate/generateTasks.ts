import * as fs from 'fs';
import type { Task } from '../types/Task';
import { faker } from '@faker-js/faker';

// Generate dynamic array of tasks
const generateTasks = (count: number): Task[] => {
    const tasks: Task[] = [];
    for (let i = 0; i < count; i++) {
        tasks.push(
            {
                id: i.toString(),
                title: `Read ${faker.book.title()}`,
                isCompleted: false,
                dueDate: Math.floor(Math.random() * 2) ? faker.date.future() : undefined
            }
        );
    }
    return tasks;
};

// Save to JSON file
const data = generateTasks(10);
fs.writeFileSync('../../public/data/tasks.json', JSON.stringify(data, null, 2));
console.log('data.json generated successfully');
