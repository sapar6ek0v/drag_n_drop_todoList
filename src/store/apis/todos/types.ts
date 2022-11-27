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
};

export enum TodoStatuses {
  QUEUE = 'Queue',
  DEVELOPMENT = 'Development',
  DONE = 'Done',
}

export enum TodoPriorities {
  HIGHT = 'Hight',
  NORMAL = 'Normal',
}

export type TodoInputValue = {
  projectId: string;
  number: string;
  header: string;
  description: string;
  priority: string;
  // files: string;
  status: string;
  expirationDate: number | Date;
};

export type TodoStatus = {
  status: TodoStatuses;
  icon: string;
  color: string;
};
