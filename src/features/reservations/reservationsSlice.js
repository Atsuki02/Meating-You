import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { supabase } from '../../../supabase';

const initialState = {
  reservations: [],
  status: 'idle',
  error: null,
};

export const fetchReservations = createAsyncThunk(
  'reservations/fetchReservations',
  async () => {
    try {
      const { data, error } = await supabase.from('reservations').select('*');
      if (error) {
        throw new Error('予約情報の取得中にエラーが発生しました。');
      }
      return data;
    } catch (error) {
      throw new Error('予約情報の取得中にエラーが発生しました。');
    }
  }
);

const reservationsSlice = createSlice({
  name: 'reservations',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReservations.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchReservations.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.reservations = action.payload;
      })
      .addCase(fetchReservations.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default reservationsSlice.reducer;
