import { baseApi } from '..';
import {
  TodoChangeStatusValue,
  TodoDeleteValue,
  Todo,
  TodoInputValue,
  Subtask,
  SubtaskInputValue,
} from './types';

const apiTodosTag = baseApi.enhanceEndpoints({ addTagTypes: ['Todos'] });

export const todosApi = apiTodosTag.injectEndpoints({
  endpoints: (builder) => ({
    getAllTodos: builder.query<Todo[], string>({
      query: (projectId) => `/projects/${projectId}/todos?sortBy=createdAt&order=desc`,
      providesTags: [{ type: 'Todos', id: 'LIST' }],
    }),

    createTodo: builder.mutation<Todo, TodoInputValue>({
      query(value) {
        return {
          url: `projects/${value.projectId}/todos`,
          method: 'POST',
          body: value,
        };
      },
      invalidatesTags: [{ type: 'Todos', id: 'LIST' }],
    }),

    changeTodoStatus: builder.mutation<Todo, TodoChangeStatusValue>({
      query(value) {
        return {
          url: `projects/${value.projectId}/todos/${value.id}`,
          method: 'PUT',
          body: value,
        };
      },
      invalidatesTags: [{ type: 'Todos', id: 'LIST' }],
    }),

    deleteTodo: builder.mutation<Todo, TodoDeleteValue>({
      query(value) {
        return {
          url: `projects/${value.projectId}/todos/${value.id}`,
          method: 'DELETE',
        };
      },
      invalidatesTags: [{ type: 'Todos', id: 'LIST' }],
    }),

    createSubtask: builder.mutation<Subtask, SubtaskInputValue>({
      query(value) {
        return {
          url: `projects/${value.projectId}/todos/${value.todoId}/subtask`,
          method: 'POST',
          body: value,
        };
      },
    }),
  }),
});

export const {
  useGetAllTodosQuery,
  useCreateTodoMutation,
  useChangeTodoStatusMutation,
  useDeleteTodoMutation,
  useCreateSubtaskMutation,
} = todosApi;
