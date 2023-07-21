import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Auth from './ui/Auth';
import Home from './ui/Home';
import Error from './ui/Error';
import { useDispatch, useSelector } from 'react-redux';
import {
  createUser,
  getTokenData,
  loginUser,
  setToken,
} from './features/user/userSlice';
import { useEffect } from 'react';
import YourInformationPage from './ui/YourInfomationPage';
import ConfirmationPage from './ui/ConfirmationPage';
import ReservationCompletePage from './ui/ReservationCompletePage';
import Header from './ui/Header';
import Booking from './ui/Booking';
import Table from './ui/Table';

function App() {
  const token = useSelector(getTokenData);
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      sessionStorage.setItem('token', JSON.stringify(token));
    }
  }, [token]);

  useEffect(() => {
    const storedToken = sessionStorage.getItem('token');
    if (storedToken) {
      const data = JSON.parse(storedToken);
      dispatch(setToken(data));
      if (data?.user) {
        const userData = {
          fullName: data.user.user_metadata.full_name,
          email: data.user.email,
        };
        dispatch(loginUser());
        dispatch(createUser(userData));
      }
    }
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Header />}>
          <Route index element={<Navigate replace to="home" />} />
          <Route path="home" element={<Home />} />
          <Route path="booking" element={<Booking />} />
          <Route path="table" element={<Table />} />
          <Route path="yourInformationPage" element={<YourInformationPage />} />
          <Route path="confirmationPage" element={<ConfirmationPage />} />
          <Route
            path="reservationCompletePage"
            element={<ReservationCompletePage />}
          />
          <Route path="auth" element={<Auth />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
