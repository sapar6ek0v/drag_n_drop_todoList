import { baseApi } from '../..';
import { Todo, TodoInputValue } from './types';

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
  }),
});

export const { useGetAllTodosQuery, useCreateTodoMutation } = todosApi;
