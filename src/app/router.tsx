import { createBrowserRouter } from 'react-router-dom';
import App from './pages/demo';
import Page404 from './pages/errors/page404.page';
import UserLayout from './layouts/public/userLayout';
import { Login } from './pages/auth/login.page';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    element: <UserLayout />,
    children: [
      {
        path: '/error-page/404',
        element: <Page404 />,
      },
      { path: '/login', element: <Login /> },
    ],
  },
]);

export default router;
