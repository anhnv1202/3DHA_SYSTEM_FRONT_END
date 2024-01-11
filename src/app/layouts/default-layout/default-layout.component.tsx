import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../footer/footer.component';

export default function DefaultLayout() {
  return (
    <Fragment>
      <main>
        <Outlet />
      </main>
      <Footer />
    </Fragment>
  );
}
