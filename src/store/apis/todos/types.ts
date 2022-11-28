import { ImageType } from '../cloudinary/types';

export type Todo = {
  id: string;
  projectId: string;
  number: number;
  header: string;
  description: string;
  files: string;
  priority: TodoPriorities;
  status: TodoStatuses;
  expirationDate: number | Date;
  workingTime: Date;
  createdAt: Date;
  subtasks: Subtask[];
};

export enum TodoStatuses {
  QUEUE = 'Queue',
  DEVELOPMENT = 'Development',
  DONE = 'Done',
}

export enum TodoPriorities {
  HIGH = 'High',
  NORMAL = 'Normal',
}

export type TodoInputValue = {
  projectId: string;
  number: number;
  header: string;
  description: string;
  priority: string;
  files: ImageType[];
  status: string;
  expirationDate: number | Date;
};

export type TodoStatus = {
  status: TodoStatuses;
  icon: string;
  color: string;
};

export type TodoChangeStatusValue = {
  id: string;
  projectId: string;
  status: TodoStatuses;
};

export type TodoDeleteValue = {
  id: string;
  projectId: string;
};

export type Subtask = {
  id: string;
  todoId: string;
  todo: string;
  isCompleted: boolean;
  createdAt: number | Date;
};

export type SubtaskInputValue = {
  id: string;
  todoId: string;
  projectId: string;
  todo: string;
  isCompleted: boolean;
};

export type SingleSubtaskValue = {
  id: string;
  todoId: string;
  projectId: string;
};
