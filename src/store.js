import { configureStore } from '@reduxjs/toolkit';
import formSlice from './features/form/formSlice';

const store = configureStore({
  reducer: {
    form: formSlice,
  },
});

export default store;
