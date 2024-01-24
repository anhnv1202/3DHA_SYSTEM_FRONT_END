import { PATHS } from '@app/common/constants';
import { AuthContextType } from '@app/types';
import Loading from '@core/components/loading';
import { useAuth } from '@core/context/auth.context';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const { endSession, user } = useAuth() as AuthContextType;
  const navigate = useNavigate();

  useEffect(() => {
    user ? endSession() : navigate(PATHS.LOGIN, { replace: true });
  }, [endSession, navigate, user]);

  return <Loading />;
};
export default Logout;
