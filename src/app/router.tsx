import { createBrowserRouter } from 'react-router-dom';
import DefaultLayout from './layouts/default-layout/default-layout.component';
import routes from './routes';

const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: routes,
  },
]);

export default router;
