import { configureStore } from '@reduxjs/toolkit';
import userSlice from './features/user/userSlice';
import formSlice from './features/form/formSlice';
import reservationsSlice from './features/reservations/reservationsSlice';

const store = configureStore({
  reducer: {
    user: userSlice,
    form: formSlice,
    reservations: reservationsSlice,
  },
});

export default store;
