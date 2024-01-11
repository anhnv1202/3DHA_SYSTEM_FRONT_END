import DefaultLayout from '@app/layouts/default-layout/default-layout.component';
import { createBrowserRouter } from 'react-router-dom';
import routes from './routes';

const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: routes,
  },
]);

export default router;
