import { PATHS } from '@app/common/constants';
import ForgotPassword from '@app/pages/forgot-password/forgot-password';
import Register from '@app/pages/register/register.page';
import { RouteObject } from 'react-router-dom';

const routes: RouteObject[] = [
  { path: PATHS.REGISTER, element: <Register /> },
  { path: PATHS.FORGOT_PASSWORD, element: <ForgotPassword /> },
];

export default routes;
