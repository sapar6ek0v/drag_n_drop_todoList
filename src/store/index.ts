import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { baseApi } from './apis';
import { cloudinaryApi } from './apis/cloudinary';

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    [cloudinaryApi.reducerPath]: cloudinaryApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [],
      },
    }).concat([baseApi.middleware, cloudinaryApi.middleware]),

  devTools: process.env.NODE_ENV !== 'production',
});

setupListeners(store.dispatch);
