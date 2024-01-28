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
  const { collapsed, toggled, handleToggleSidebar } = props;
  const { t } = useTranslation();

  return (
    <>
      <div className="flex flex-col h-screen">
        <ProSidebar
          image={backgroundAdmin}
          collapsed={collapsed}
          toggled={toggled}
          breakPoint="md"
          onToggle={handleToggleSidebar}
        >
          <SidebarHeader>
            <div className="p-4 flex justify-center items-center text-uppercase font-bold text-lg tracking-wider overflow-hidden whitespace-nowrap">
              <span className="text-4xl pl-3 cursor-pointer" onClick={() => navigate('/')}>
                3DHA
              </span>
            </div>
          </SidebarHeader>

          <SidebarContent>
            <Menu iconShape="circle">
              <MenuItem icon={<MdDashboard />} suffix={<span className="badge red">{t('sidebar.title1.new')}</span>}>
                {t('sidebar.title1.dashboard')}
                <Link to="/admins" />
              </MenuItem>
            </Menu>
            <Menu iconShape="circle">
              <SubMenu icon={<FaGem />} placeholder={undefined}>
                <MenuItem>
                  {t('sidebar.title2.user')}
                  <Link to="/admins/manage-users" />
                </MenuItem>
                <MenuItem>
                  {t('sidebar.title2.quiz')}
                  <Link to="/admins/manage-quizzes" />
                </MenuItem>
                <MenuItem>
                  {t('sidebar.title2.question')}
                  <Link to="/admins/manage-questions" />
                </MenuItem>
              </SubMenu>
            </Menu>
          </SidebarContent>

          <SidebarFooter className="text-center">
            <div className=" p-5 flex items-center justify-center">
              <a href="" target="_blank" className="sidebar-btn" rel="noopener noreferrer">
                <span className="overflow-hidden text-amber-50">&#169; 3DHA Contact</span>
              </a>
            </div>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
};

export default Sidebar;
