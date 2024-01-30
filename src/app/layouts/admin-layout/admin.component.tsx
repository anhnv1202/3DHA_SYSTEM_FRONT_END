import Sidebar from '@app/components/sidebar/sidebar.component';
import Footer from '@app/layouts/footer/footer.component';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Outlet } from 'react-router-dom';

function AdminLayout() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      <div className="flex mt-4;">
        <div className="h-screen">
          <Sidebar collapsed={collapsed} />
        </div>
        <div className="w-full">
          <div className="mb-4 h-18  flex justify-between items-center pl-5">
            <span
              onClick={() => {
                setCollapsed(!collapsed);
              }}
            >
              <FaBars className="cursor-pointer text-4xl text-brown-800" />
            </span>
          </div>
          <div className="admin-main">{<Outlet />}</div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AdminLayout;
