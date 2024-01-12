import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../footer/footer.component';
import Header from '../header/header.component';
import Navbar from '../navbar/navbar.component';

export default function DefaultLayout() {
  return (
    <Fragment>
      <Header noShadow />
      {/* <Navbar /> */}
      <main>
        <Outlet />
      </main>
      <Footer />
    </Fragment>
  );
}
