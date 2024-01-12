import { Outlet } from 'react-router-dom';
import Footer from '../common/footer.component';
import Header from '../common/header.component';

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
