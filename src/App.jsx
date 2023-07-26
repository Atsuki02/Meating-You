import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Auth from './features/pages/Auth';
import Home from './features/pages/Home';
import YourInformationPage from './features/pages/YourInfomationPage';
import ConfirmationPage from './features/pages/ConfirmationPage';
import ReservationCompletePage from './features/pages/ReservationCompletePage';
import Header from './features/pages/Header';
import Booking from './features/pages/Booking';
import Table from './features/form/Table';
import YourBooking from './features/pages/YourBooking';
import ProtectedRoute from './features/authentication/ProtectedRoute';
import PageNotFound from './features/pages/PageNotFound';

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
          <Route path="*" element={<PageNotFound />} />
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
