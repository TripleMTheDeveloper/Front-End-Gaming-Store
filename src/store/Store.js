import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authS';

const store = configureStore({
  reducer: {
    auth: authReducer
  }
});

export default store;
