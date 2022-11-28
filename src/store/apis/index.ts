import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://63809f8a786e112fe1b53949.mockapi.io/api/v1/',
  }),
  endpoints: () => ({}),
});
