import { configureStore } from '@reduxjs/toolkit';
import userSlice from './features/user/userSlice';
import formSlice from './features/form/formSlice';

const store = configureStore({
  reducer: {
    user: userSlice,
    form: formSlice,
  },
});

export default store;
