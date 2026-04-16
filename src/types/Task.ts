export interface Task {
    id: string;
    title: string;
    isCompleted: boolean;
    dueDate?: Date; // dueDate is optional
}