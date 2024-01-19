import { Images } from '@assets/images';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderMenuParent from './header-menu-parent.component';
import UserSectionHeaderMenu from './tooltip/user-section-header-menu.component';
import NotificationItems from './tooltip/notification-items-header-menu.component';
import CartHeaderMenu from './tooltip/cart-header-menu.component';
import WishlistHeaderMenu from './tooltip/wishlist-header-menu.component';

type Props = {};

const LoggedInHeader = (props: Props) => {
  const [isHoveredEditProfile, setIsHoveredEditProfile] = useState(false);
  const [isHoveredNotification, setIsHoveredNotification] = useState(false);
  const [isHoveredCart, setIsHoveredCart] = useState(false);
  const [isHoveredWishlist, setIsHoveredWishlist] = useState(false);

  const handleHoverEditProfile = () => setIsHoveredEditProfile(!isHoveredEditProfile);
  const handleHoverNotification = () => setIsHoveredNotification(!isHoveredNotification);
  const handleHoverCart = () => setIsHoveredCart(!isHoveredCart);
  const handleHoverWishlist = () => setIsHoveredWishlist(!isHoveredWishlist);

  return (
    <>
      <div className="popper-module--popper--2BpLn desktop-header-module--gap-button--1Ua9W">
        <Link
          to="/home/my-courses/"
          className="ud-btn ud-btn-large ud-btn-ghost ud-heading-md js-header-button desktop-header-module--dropdown-button--4lqEc"
        >
          <span className="ud-text-sm desktop-header-module--dropdown-button-text--k8O8T">My learning</span>
        </Link>
        <div
          className="popper-module--popper-content--3cLBV desktop-header-module--dropdown--2R_M9"
          style={{ top: '100%', right: '0px;' }}
        ></div>
      </div>

      {/* Wishlist */}

      <div
        className="popper-module--popper--2BpLn desktop-header-module--group-c--2Gvzn"
        onMouseEnter={handleHoverWishlist}
        onMouseLeave={handleHoverWishlist}
      >
        <Link
          to="/home/my-courses/wishlist/"
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

      {/* Cart */}

      <div className="popper-module--popper--2BpLn " onMouseEnter={handleHoverCart} onMouseLeave={handleHoverCart}>
        <Link
          to="/cart/"
          className="ud-btn ud-btn-large ud-btn-ghost ud-heading-md ud-btn-icon ud-btn-icon-large js-header-button desktop-header-module--dropdown-button--4lqEc"
        >
          <Images.CiShoppingCart focusable="false" className="ud-icon ud-icon-medium ud-icon-color-neutral" />
        </Link>
        <HeaderMenuParent isHovered={isHoveredCart} setIsHovered={setIsHoveredCart} children={<CartHeaderMenu />} />
      </div>
      {/* Notification */}
      <div
        className="popper-module--popper--2BpLn desktop-header-module--group-c--2Gvzn"
        onMouseEnter={handleHoverNotification}
        onMouseLeave={handleHoverNotification}
      >
        <Link
          to="/user/view-notifications/"
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
          to="/user/edit-profile/"
          className="ud-btn ud-btn-large ud-btn-ghost ud-heading-md js-header-button desktop-header-module--dropdown-button--4lqEc"
        >
          <div
            className="user-profile-dropdown-module--dropdown-button-avatar--2jhme ud-avatar ud-heading-sm"
            style={{ width: '3.2rem', height: '3.2rem' }}
          >
            TA
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
