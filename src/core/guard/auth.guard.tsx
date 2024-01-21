import { PATHS, ROLES } from '@app/common/constants';
import { AuthContextType, ProtectedRouteProps } from '@app/types';
import { useAuth } from '@core/context/auth.context';
import { Navigate, Outlet } from 'react-router-dom';

export const ProtectedRoute = ({ allowedRoles = [ROLES.ADMIN, ROLES.STUDENT, ROLES.TEACHER] }: ProtectedRouteProps) => {
  const { user } = useAuth() as AuthContextType;

  if (!user) {
    return <Navigate to={PATHS.HOMEPAGE} replace />;
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to={PATHS.HOMEPAGE} replace />;
  }

  return <Outlet />;
};
