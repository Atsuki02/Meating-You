import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  formData: {
    userId: null,
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    reservationDate: '',
    reservationTime: '17:30',
    numberOfPeople: '',
    tableType: '',
    tableImage: '',
  },
  isLoggedIn: false,
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setUserId(state, action) {
      state.formData.userId = action.payload;
    },
    setReservationData(state, action) {
      state.formData.reservationDate = action.payload.reservationDate;
      state.formData.reservationTime = action.payload.reservationTime;
      state.formData.numberOfPeople = action.payload.numberOfPeople;
    },
    setTableType(state, action) {
      state.formData.tableType = action.payload.tableType;
      state.formData.tableImage = action.payload.tableImage;
    },
    setUserData(state, action) {
      state.formData.firstName = action.payload.firstName;
      state.formData.lastName = action.payload.lastName;
      state.formData.email = action.payload.email;
      state.formData.phoneNumber = action.payload.phoneNumber;
    },
    clearFormData(state) {
      return {
        ...initialState,
      };
    },
    loginUser(state) {
      state.isLoggedIn = true;
    },
    logoutUser(state) {
      return {
        ...initialState,
      };
    },
  },
});

export const {
  setUserId,
  setReservationData,
  setTableType,
  setUserData,
  clearFormData,
  loginUser,
  logoutUser,
} = formSlice.actions;

export const getFormData = (state) => state.form.formData;
export const getIsLoggedIn = (state) => state.form.isLoggedIn;

export default formSlice.reducer;
