import { useNavigate } from 'react-router-dom';
import { useUser } from './useUser';
import { useEffect } from 'react';
import Spinner from '../../ui/Spinner';

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { isLoading, isAuthenticated } = useUser();

  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate('/auth');
    },
    [isAuthenticated, isLoading, navigate]
  );

  if (isLoading)
    return (
      <div className="flex h-screen items-center justify-center">
        <Spinner />
      </div>
    );

  if (isAuthenticated) return children;
}

export default ProtectedRoute;
