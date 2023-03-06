import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import ordersReducer from './slices/ordersSlice';
import categoriesReducer from './slices/categoriesSlice';
import purchasesReducer from './slices/purchasesSlice';
import sallesReducer from './slices/sallesSlice';

import {
  // persistStore,
  // persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

export default configureStore({
  reducer: {
    order: ordersReducer,
    categories: categoriesReducer,
    purchases: purchasesReducer,
    salles: sallesReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});
