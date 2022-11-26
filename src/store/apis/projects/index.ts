import { baseApi } from '../..';
import { Project, ProjectInputValue, ProjectUpdateInputValue } from './types';

const apiProjectsTag = baseApi.enhanceEndpoints({ addTagTypes: ['Projects'] });

export const projectsApi = apiProjectsTag.injectEndpoints({
  endpoints: (builder) => ({
    getAll: builder.query<Project[], void>({
      query: () => `projects?sortBy=createdAt&order=desc`,
      providesTags: [{ type: 'Projects', id: 'LIST' }],
    }),

    getProjectById: builder.query<Project, string>({
      query: (id) => `projects/${id}`,
      providesTags: [{ type: 'Projects', id: 'LIST' }],
    }),

    createProject: builder.mutation<Project, ProjectInputValue>({
      query(value) {
        return {
          url: `projects`,
          method: 'POST',
          body: value,
        };
      },
      invalidatesTags: [{ type: 'Projects', id: 'LIST' }],
    }),

    updateProject: builder.mutation<Project, ProjectUpdateInputValue>({
      query(value) {
        return {
          url: `projects/${value.id}`,
          method: 'PUT',
          body: value,
        };
      },
      invalidatesTags: [{ type: 'Projects', id: 'LIST' }],
    }),

    deleteProject: builder.mutation<Project, string>({
      query(id) {
        return {
          url: `projects/${id}`,
          method: 'DELETE',
        };
      },
      invalidatesTags: [{ type: 'Projects', id: 'LIST' }],
    }),
  }),
});

export const {
  useGetAllQuery,
  useGetProjectByIdQuery,
  useCreateProjectMutation,
  useUpdateProjectMutation,
  useDeleteProjectMutation,
} = projectsApi;
