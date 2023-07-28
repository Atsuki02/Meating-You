import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Auth from './pages/Auth';
import Home from './pages/Home';
import YourInformationPage from './pages/YourInfomationPage';
import ConfirmationPage from './pages/ConfirmationPage';
import ReservationCompletePage from './pages/ReservationCompletePage';
import Header from './pages/Header';
import Booking from './pages/Booking';
import Table from './pages/Table';
import YourBooking from './pages/YourBooking';
import ProtectedRoute from './features/authentication/ProtectedRoute';
import PageNotFound from './pages/PageNotFound';
import ScrollToTop from './ui/ScrollToTop';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
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
            <Route path="auth" element={<Auth />} />
          </Route>
          <Route
            path="reservationCompletePage"
            element={<ReservationCompletePage />}
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
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
