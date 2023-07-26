import { useNavigate } from 'react-router-dom';
import Button from '../../ui/Button';

function PageNotFound() {
  const navigate = useNavigate();
  return (
    <div className="flex h-screen items-center justify-center bg-teal-700">
      <div className="max-w-2/3 w-full rounded-md border border-gray-100 bg-white p-12 text-center">
        <h1 className="mb-8">
          The page you are looking for could not be found 😢
        </h1>
        <Button type="continue" onClick={() => navigate('/home')}>
          &larr; Go back
        </Button>
      </div>
    </div>
  );
}

export default PageNotFound;
