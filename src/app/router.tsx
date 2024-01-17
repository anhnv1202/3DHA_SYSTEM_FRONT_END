import DefaultLayout from '@app/layouts/default-layout/default-layout.component';
import { createBrowserRouter } from 'react-router-dom';
import Page400 from './pages/errors/page400.page';
import routes from './routes';

const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    errorElement: <Page400 />,
    children: routes,
  },
]);

export default router;
