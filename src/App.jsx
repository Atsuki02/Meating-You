import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Auth from './ui/Auth';
import Home from './ui/Home';
import Error from './ui/Error';
import { useDispatch, useSelector } from 'react-redux';
import { getTokenData, setToken } from './features/user/userSlice';
import { useEffect } from 'react';

function App() {
  const token = useSelector(getTokenData);
  const dispatch = useDispatch();

  if (token) {
    sessionStorage.setItem('token', JSON.stringify(token));
  }

  useEffect(() => {
    if (sessionStorage.getItem('token')) {
      let data = JSON.parse(sessionStorage.getItem('token'));
      dispatch(setToken(data));
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate replace to="auth" />} />
        <Route path="auth" element={<Auth />} />
        {token ? <Route path="home" element={<Home />} /> : null}
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
