import { createBrowserRouter } from 'react-router-dom';
import UserLayout from './layouts/public/layout';
import routes from './routes';

const router = createBrowserRouter([
  {
    element: <UserLayout />,
    children: routes,
  },
]);

export default router;
