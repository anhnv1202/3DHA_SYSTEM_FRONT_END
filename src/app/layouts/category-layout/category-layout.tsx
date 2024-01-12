import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../footer/footer.component';
import Header from '../header/header.component';
import Navbar from '../navbar/navbar.component';
import { navbarLinks } from '@app/common/constants/const';

export default function CategoryLayout() {
  return (
    <Fragment>
      <Header noShadow />
      <Navbar navbarComponent={navbarLinks} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </Fragment>
  );
}
