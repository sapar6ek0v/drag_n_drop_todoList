export type Todo = {
  id: string;
  projectId: string;
  number: number;
  header: string;
  description: string;
  priority: string;
  files: string;
  status: string;
  expirationDate: Date;
  workingTime: Date;
  createdAt: Date;
};
