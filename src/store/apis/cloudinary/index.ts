import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ImageType } from './types';

export const cloudinaryApi = createApi({
  reducerPath: 'cloudinaryApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `https://api.cloudinary.com/v1_1/dzfibdx5d/image/upload`,
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
