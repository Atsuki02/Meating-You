import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Auth from './ui/Auth';
import Home from './ui/Auth';
import Error from './ui/Error';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate replace to="auth" />}></Route>
        <Route path="auth" element={<Auth />}></Route>
        <Route path="home" element={<Home />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
