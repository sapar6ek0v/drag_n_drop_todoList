import { Todo } from '../todos/types';

export type Project = {
  id: string;
  name: string;
  createdAt: Date;
  todos: Todo[];
};

export type ProjectInputValue = {
  name: string;
};

export type ProjectUpdateInputValue = {
  id: string;
  name: string;
};
