import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  formData: {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    reservationDate: '',
    reservationTime: '',
    numberOfPeople: '',
  },
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setReservationData(state, action) {
      state.formData.reservationDate = action.payload.reservationDate;
      state.formData.reservationTime = action.payload.reservationTime;
      state.formData.numberOfPeople = action.payload.numberOfPeople;
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
  },
});

export const { setReservationData, setUserData, clearFormData } =
  formSlice.actions;

export const getFormData = (state) => state.form.formData;

export default formSlice.reducer;
