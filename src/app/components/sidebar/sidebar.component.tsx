import { menuSidebar } from '@app/common/constants/const';
import backgroundAdmin from '@assets/images/background/backgroundAdmin.png';
import { useTranslation } from 'react-i18next';
import { FaGem } from 'react-icons/fa';
import { MdDashboard } from 'react-icons/md';
import { Menu, MenuItem, ProSidebar, SidebarContent, SidebarFooter, SidebarHeader, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { Link, useNavigate } from 'react-router-dom';
// import './Sidebar.scss';

const Sidebar = (props: any) => {
  const navigate = useNavigate();
  const { collapsed } = props;
  const { t } = useTranslation();

  return (
    <>
      <div className="flex flex-col h-screen">
        <ProSidebar image={backgroundAdmin} collapsed={collapsed} breakPoint="md">
          <SidebarHeader>
            <div className="p-4 flex justify-center items-center text-uppercase font-bold text-lg tracking-wider overflow-hidden whitespace-nowrap">
              <span className="text-4xl cursor-pointer" onClick={() => navigate('/')}>
                {t('admin-dashboard.3dha')}
              </span>
            </div>
          </SidebarHeader>

          <SidebarContent>
            <Menu iconShape="circle">
              <MenuItem icon={<MdDashboard />}>
                {t('admin-dashboard.dashboard')}
                <Link to="/admin" />
              </MenuItem>
            </Menu>
            <Menu iconShape="circle">
              <SubMenu icon={<FaGem />} title={t('admin-dashboard.3dha')} placeholder={undefined}>
                {menuSidebar.map((menuItem, index) => (
                  <MenuItem key={index}>
                    <Link to={menuItem.path}>{menuItem.title}</Link>
                  </MenuItem>
                ))}
              </SubMenu>
            </Menu>

            <Menu iconShape="circle">
              <SubMenu icon={<FaGem />} title={t('admin-dashboard.3dha')} placeholder={undefined}>
                {menuSidebar.map((menuItem, index) => (
                  <MenuItem key={index}>
                    <Link to={menuItem.path}>{menuItem.title}</Link>
                  </MenuItem>
                ))}
              </SubMenu>
            </Menu>
          </SidebarContent>

          <SidebarFooter className="text-center">
            <div className="p-5 flex items-center justify-center">
              <a href="" target="_blank" className="sidebar-btn" rel="noopener noreferrer">
                <span className="overflow-hidden text-amber-50">&#169; {t('admin-dashboard.contact')}</span>
              </a>
            </div>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
};

export default Sidebar;
