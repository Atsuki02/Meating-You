import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userData: {
    fullName: '',
    email: '',
    password: '',
  },
  isLoggedIn: false,
  token: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    createUser(state, action) {
      state.userData.fullName = action.payload.fullName;
      state.userData.email = action.payload.email;
      state.userData.password = action.payload.password;
    },
    setToken(state, action) {
      state.token = action.payload;
    },
    loginUser(state) {
      state.isLoggedIn = true;
    },
    logoutUser(state) {
      state.isLoggedIn = false;
      state.userData = {
        fullName: '',
        email: '',
        password: '',
      };
    },
  },
});

export const { createUser, setToken, loginUser, logoutUser } =
  userSlice.actions;

export const getUserData = (state) => state.user.userData;
export const getTokenData = (state) => state.user.token;
export const getIsLoggedIn = (state) => state.user.isLoggedIn;

export default userSlice.reducer;
