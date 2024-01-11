import { PATHS } from '@app/common/constants';
import ChangePassword from '@app/pages/change-password/change-password.page';
import ForgotPassword from '@app/pages/forgot-password/forgot-password.page';
import Register from '@app/pages/register/register.page';
import { RouteObject } from 'react-router-dom';

const routes: RouteObject[] = [
  { path: PATHS.REGISTER, element: <Register /> },
  { path: PATHS.FORGOT_PASSWORD, element: <ForgotPassword /> },
  { path: PATHS.CHANGE_PASSWORD, element: <ChangePassword /> },
];

export default routes;
