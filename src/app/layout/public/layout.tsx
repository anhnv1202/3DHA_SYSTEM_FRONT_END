import { Outlet } from 'react-router-dom';
import Footer from '../common/footer';
import Header from '../common/header';

export default function UserLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
