import { createBrowserRouter } from 'react-router-dom';
import DefaultLayout from './layouts/default-layout/default-layout.component';

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
  },
]);

export default router;
