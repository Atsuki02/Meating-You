import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userData: {
    fullName: '',
    email: '',
    password: '',
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    createUser(state, action) {
      state.userData.fullName = action.payload;
      state.userData.email = action.payload;
      state.userData.password = action.payload;
    },
  },
});

export const { createUser } = userSlice.actions;

export const getUserData = (state) => state.user.userData;

export default userSlice.reducer;
