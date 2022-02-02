import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

import baseApi from 'services/baseApi';

const makeStore = () => {
  const store = configureStore({
    reducer: {},
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(baseApi.middleware),
  });

  return store;
};

export const wrapper = createWrapper(makeStore);
export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
