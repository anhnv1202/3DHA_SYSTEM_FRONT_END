import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../footer/footer.component';
import Header from '../header/header.component';
import { useAuth } from '@core/context/auth.context';
import { AuthContextType } from '@app/types';

export default function DefaultLayout() {
  const { user } = useAuth() as AuthContextType;
  return (
    <Fragment>
      <Header user={user} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </Fragment>
  );
}
