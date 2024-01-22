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

type Props = {};

const LoggedInHeader = (props: Props) => {
  const { user } = useAuth() as AuthContextType;
  const { t } = useTranslation();
  const [isHoveredEditProfile, setIsHoveredEditProfile] = useState(false);
  const [isHoveredNotification, setIsHoveredNotification] = useState(false);
  const [isHoveredWishlist, setIsHoveredWishlist] = useState(false);

  const handleHoverEditProfile = () => setIsHoveredEditProfile(!isHoveredEditProfile);
  const handleHoverNotification = () => setIsHoveredNotification(!isHoveredNotification);
  const handleHoverWishlist = () => setIsHoveredWishlist(!isHoveredWishlist);

  return (
    <>
      <div className="popper-module--popper--2BpLn desktop-header-module--gap-button--1Ua9W">
        <Link
          to={PATHS.COURSES}
          className="ud-btn ud-btn-large ud-btn-ghost ud-heading-md js-header-button desktop-header-module--dropdown-button--4lqEc"
        >
          <span className="ud-text-sm desktop-header-module--dropdown-button-text--k8O8T">{t('header.learning')}</span>
        </Link>
        <div
          className="popper-module--popper-content--3cLBV desktop-header-module--dropdown--2R_M9"
          style={{ top: '100%', right: '0px' }}
        ></div>
      </div>

      {/* Wishlist */}

      <div
        className="popper-module--popper--2BpLn desktop-header-module--group-c--2Gvzn"
        onMouseEnter={handleHoverWishlist}
        onMouseLeave={handleHoverWishlist}
      >
        <Link
          to={PATHS.WISHLIST}
          className="ud-btn ud-btn-large ud-btn-ghost ud-heading-md ud-btn-icon ud-btn-icon-large js-header-button desktop-header-module--dropdown-button--4lqEc"
        >
          <Images.CiHeart focusable="false" className="ud-icon ud-icon-medium ud-icon-color-neutral" />
        </Link>
        <HeaderMenuParent
          isHovered={isHoveredWishlist}
          setIsHovered={setIsHoveredWishlist}
          children={<WishlistHeaderMenu />}
        />
      </div>

      {/* Notification */}
      <div
        className="popper-module--popper--2BpLn desktop-header-module--group-c--2Gvzn"
        onMouseEnter={handleHoverNotification}
        onMouseLeave={handleHoverNotification}
      >
        <Link
          to={PATHS.NOTIFICATION}
          className="ud-btn ud-btn-large ud-btn-ghost ud-heading-md ud-btn-icon ud-btn-icon-large js-header-button desktop-header-module--dropdown-button--4lqEc"
        >
          <Images.IoIosNotificationsOutline
            focusable="false"
            className="ud-icon ud-icon-medium ud-icon-color-neutral"
          />
        </Link>
        <HeaderMenuParent
          isHovered={isHoveredNotification}
          setIsHovered={setIsHoveredNotification}
          children={<NotificationItems />}
        />
      </div>
      {/* Edit Profile */}
      <div
        className="popper-module--popper--2BpLn  list-menu-module--list-menu-container--3d8ZF"
        onMouseEnter={handleHoverEditProfile}
        onMouseLeave={handleHoverEditProfile}
      >
        <Link
          to={PATHS.EDIT_PROFILE}
          className="ud-btn ud-btn-large ud-btn-ghost ud-heading-md js-header-button desktop-header-module--dropdown-button--4lqEc"
        >
          <div
            className="user-profile-dropdown-module--dropdown-button-avatar--2jhme ud-avatar ud-heading-sm"
            style={{ width: '3.2rem', height: '3.2rem' }}
          >
            <img src={user?.avatar} alt="avatar" />
          </div>
        </Link>
        <HeaderMenuParent
          isHovered={isHoveredEditProfile}
          setIsHovered={setIsHoveredEditProfile}
          children={<UserSectionHeaderMenu />}
        />
      </div>
    </>
  );
};

export default LoggedInHeader;
