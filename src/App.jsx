import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Auth from './ui/Auth';
import Home from './ui/Home';
import Error from './ui/Error';
import YourInformationPage from './ui/YourInfomationPage';
import ConfirmationPage from './ui/ConfirmationPage';
import ReservationCompletePage from './ui/ReservationCompletePage';
import Header from './ui/Header';
import Booking from './ui/Booking';
import Table from './ui/Table';
import YourBooking from './ui/YourBooking';
import ProtectedRoute from './ui/ProtectedRoute';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Navigate replace to="home" />} />
          <Route path="home" element={<Home />} />
          <Route element={<Header />}>
            <Route path="booking" element={<Booking />} />
            <Route path="table" element={<Table />} />
            <Route
              path="yourInformationPage"
              element={<YourInformationPage />}
            />
            <Route path="confirmationPage" element={<ConfirmationPage />} />
            <Route
              path="yourbooking"
              element={
                <ProtectedRoute>
                  <YourBooking />
                </ProtectedRoute>
              }
            />
          </Route>
          <Route
            path="reservationCompletePage"
            element={<ReservationCompletePage />}
          />
          <Route path="auth" element={<Auth />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: '8px' }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 3000,
          },
          style: {
            fontSize: '16px',
            maxWidth: '500px',
            padding: '16px 24px',
            backgroundColor: 'white',
            color: 'black',
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
