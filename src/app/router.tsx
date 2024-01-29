import DefaultLayout from '@app/layouts/default-layout/default-layout.component';
import Loading from '@core/components/loading';
import { useAuth } from '@core/context/auth.context';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Page400 from './pages/errors/page400.page';
import { routesForAuthenticatedOnly, routesForNotAuthenticatedOnly, routesForPublic } from './routes';
import { AuthContextType } from './types';
const Routes = () => {
  const { user, isLoading } = useAuth() as AuthContextType;

  if (isLoading) {
    return <Loading />;
  }
  const router = createBrowserRouter([
    {
      element: <DefaultLayout />,
      errorElement: <Page400 />,
      children: [...(!user ? routesForNotAuthenticatedOnly : []), ...routesForPublic, ...routesForAuthenticatedOnly],
    },
  ]);
  return <RouterProvider router={router} />;
};
export default Routes;
