import { baseApi } from '..';
import {
  TodoChangeStatusValue,
  TodoDeleteValue,
  Todo,
  TodoInputValue,
  Subtask,
  SubtaskInputValue,
  SingleSubtaskValue,
  Params,
} from './types';

const apiTodosTag = baseApi.enhanceEndpoints({ addTagTypes: ['Todos'] });

export const todosApi = apiTodosTag.injectEndpoints({
  endpoints: (builder) => ({
    getAllTodos: builder.query<Todo[], Params>({
      query: (params) => `/projects/${params.projectId}/todos?sortBy=createdAt&order=desc${params.search}`,
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

    createSubtask: builder.mutation<Subtask, Omit<SubtaskInputValue, 'id'>>({
      query(value) {
        return {
          url: `projects/${value.projectId}/todos/${value.todoId}/subtask`,
          method: 'POST',
          body: value,
        };
      },
      invalidatesTags: [{ type: 'Todos', id: 'LIST' }],
    }),

    updateSubtask: builder.mutation<Subtask, SubtaskInputValue>({
      query(value) {
        return {
          url: `projects/${value.projectId}/todos/${value.todoId}/subtask/${value.id}`,
          method: 'PUT',
          body: value,
        };
      },
      invalidatesTags: [{ type: 'Todos', id: 'LIST' }],
    }),

    getSingleSubtask: builder.query<Subtask, SingleSubtaskValue>({
      query: (value) => `/projects/${value.projectId}/todos/${value.todoId}/subtask/${value.id}`,
      providesTags: [{ type: 'Todos', id: 'LIST' }],
    }),

    deleteSubtask: builder.mutation<Subtask, SingleSubtaskValue>({
      query(value) {
        return {
          url: `/projects/${value.projectId}/todos/${value.todoId}/subtask/${value.id}`,
          method: 'DELETE',
        };
      },
      invalidatesTags: [{ type: 'Todos', id: 'LIST' }],
    }),
  }),
});

export const {
  useGetAllTodosQuery,
  useCreateTodoMutation,
  useChangeTodoStatusMutation,
  useDeleteTodoMutation,
  useCreateSubtaskMutation,
  useUpdateSubtaskMutation,
  useGetSingleSubtaskQuery,
  useDeleteSubtaskMutation,
} = todosApi;
