import DefaultLayout from '@app/layouts/default-layout/default-layout.component';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
  },
]);

export default router;
