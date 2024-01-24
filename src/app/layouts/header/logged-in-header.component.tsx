import { Images } from '@assets/images';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderMenuParent from './header-menu-parent.component';
import UserSectionHeaderMenu from './tooltip/user-section-header-menu.component';
import NotificationItems from './tooltip/notification-items-header-menu.component';
import WishlistHeaderMenu from './tooltip/wishlist-header-menu.component';
import { PATHS } from '@app/common/constants';
import { useTranslation } from 'react-i18next';
import { useAuth } from '@core/context/auth.context';
import { AuthContextType } from '@app/types';
import LearningHeaderMenu from './tooltip/learning-header-menu.component';

type Props = {};

const LoggedInHeader = (props: Props) => {
  const { user } = useAuth() as AuthContextType;
  const { t } = useTranslation();
  const [isHoveredEditProfile, setIsHoveredEditProfile] = useState(false);
  const [isHoveredNotification, setIsHoveredNotification] = useState(false);
  const [isHoveredWishlist, setIsHoveredWishlist] = useState(false);
  const [isHoveredLearning, setIsHoveredLearning] = useState(false);

  const handleHoverEditProfile = () => setIsHoveredEditProfile(!isHoveredEditProfile);
  const handleHoverNotification = () => setIsHoveredNotification(!isHoveredNotification);
  const handleHoverWishlist = () => setIsHoveredWishlist(!isHoveredWishlist);
  const handleHoverLearning = () => setIsHoveredLearning(!isHoveredLearning);

  const loginInHeaderData = [
    {
      onMouseEnter: handleHoverLearning,
      onMouseLeave: handleHoverLearning,
      path: PATHS.COURSES,
      label: t('header.learning.name'),
      isHovered: isHoveredLearning,
      setIsHovered: setIsHoveredLearning,
      children: <LearningHeaderMenu />,
    },
    {
      onMouseEnter: handleHoverWishlist,
      onMouseLeave: handleHoverWishlist,
      path: PATHS.WISHLIST,
      label: Images.CiHeart,
      isHovered: isHoveredWishlist,
      setIsHovered: setIsHoveredWishlist,
      children: <WishlistHeaderMenu />,
    },
    {
      onMouseEnter: handleHoverNotification,
      onMouseLeave: handleHoverNotification,
      path: PATHS.NOTIFICATION,
      label: Images.IoIosNotificationsOutline,
      isHovered: isHoveredNotification,
      setIsHovered: setIsHoveredNotification,
      children: <NotificationItems />,
    },
    {
      onMouseEnter: handleHoverEditProfile,
      onMouseLeave: handleHoverEditProfile,
      path: PATHS.EDIT_PROFILE,
      label: user?.avatar,
      isHovered: isHoveredEditProfile,
      setIsHovered: setIsHoveredEditProfile,
      children: <UserSectionHeaderMenu />,
    },
  ];
  return (
    <>
      {loginInHeaderData.map((item, index) => (
        <div
          className={`popper-module--popper--2BpLn desktop-header-module--gap-button--1Ua9W ${
            index === 3 && 'list-menu-module--list-menu-container--3d8ZF'
          }`}
          onMouseEnter={item.onMouseEnter}
          onMouseLeave={item.onMouseLeave}
          key={index}
        >
          <Link
            to={item.path}
            className={`ud-btn ud-btn-large ud-btn-ghost ud-heading-md js-header-button desktop-header-module--dropdown-button--4lqEc ${
              index !== 0 && index !== 3 ? 'ud-btn-icon ud-btn-icon-large' : ''
            }`}
          >
            {index === 0 && (
              <span className="ud-text-sm desktop-header-module--dropdown-button-text--k8O8T">
                {item.label as string}
              </span>
            )}
            {index !== 0 &&
              index !== 3 &&
              typeof item.label === 'function' &&
              React.createElement(item.label, {
                focusable: 'false',
                className: 'ud-icon ud-icon-medium ud-icon-color-neutral',
              })}
            {index === 3 && (
              <div
                className="user-profile-dropdown-module--dropdown-button-avatar--2jhme ud-avatar ud-heading-sm"
                style={{ width: '3.2rem', height: '3.2rem' }}
              >
                <img src={item.label as string} alt="avatar" className="w-[3.2rem] h-[3.2rem] rounded-[50%]" />
              </div>
            )}
          </Link>
          <HeaderMenuParent isHovered={item.isHovered} setIsHovered={item.setIsHovered} children={item.children} />
        </div>
      ))}
    </>
  );
};

export default LoggedInHeader;
