import { AuthContextType } from '@app/types';
import { useAuth } from '@core/context/auth.context';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const { endSession } = useAuth() as AuthContextType;
  const navigate = useNavigate();

  const handleLogout = () => {
    endSession();
    navigate('/login', { replace: true });
  };

  setTimeout(() => {
    handleLogout();
  }, 3 * 1000);

  return <>Logout Page</>;
};

export default Logout;
