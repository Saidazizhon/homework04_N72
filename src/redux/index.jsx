import { configureStore } from '@reduxjs/toolkit'

import { api } from './api'

export const store = configureStore({
  reducer: {

    // wishlist,
    // cart,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
})