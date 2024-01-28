import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaBars } from 'react-icons/fa';
import { Outlet } from 'react-router-dom';
import Sidebar from './sidebar.component';

function Admin() {
  const [collapsed, setCollapsed] = useState(false);
  const { t, i18n } = useTranslation();

  return (
    <div className=" flex mt-4;">
      <div className="h-screen">
        <Sidebar collapsed={collapsed} />
      </div>
      <div className="w-full">
        <div className="mb-4 h-18 border border-solid border-gray-500 flex justify-between items-center pl-5">
          <span
            onClick={() => {
              setCollapsed(!collapsed);
            }}
          >
            <FaBars className="cursor-pointer text-4xl text-brown-800" />
          </span>
        </div>
        <div className="admin-main">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Admin;
