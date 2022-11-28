import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ImageType } from './types';

export const cloudinaryApi = createApi({
  reducerPath: 'cloudinaryApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_CLOUDINARY_URL,
  }),
  endpoints: (builder) => ({
    upload: builder.mutation<ImageType, any>({
      query(value) {
        return {
          url: ``,
          method: 'POST',
          body: value,
        };
      },
    }),
  }),
});

export const { useUploadMutation } = cloudinaryApi;
