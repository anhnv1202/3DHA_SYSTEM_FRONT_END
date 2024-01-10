import { PATHS } from '@app/common/constants';
import { Login } from '@app/pages/login/login.page';
import Register from '@app/pages/register/register.page';
import { RouteObject } from 'react-router-dom';

const routes: RouteObject[] = [
  { path: PATHS.REGISTER, element: <Register /> },
  { path: PATHS.LOGIN, element: <Login /> },
  // { path: PathConstants.ABOUT, element: <About /> },
];

export default routes;
