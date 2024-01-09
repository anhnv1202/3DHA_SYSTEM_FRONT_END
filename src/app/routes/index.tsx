import { PATHS } from '@app/common/constants';
import Register from '@app/pages/register/register.page';
import { RouteObject } from 'react-router-dom';

const routes: RouteObject[] = [
  { path: PATHS.REGISTER, element: <Register /> },
  // { path: PathConstants.ABOUT, element: <About /> },
];

export default routes;
