import { Outlet } from 'react-router-dom';
import Footer from '../footer/footer.component';

export default function DefaultLayout() {
  return (
    <>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
