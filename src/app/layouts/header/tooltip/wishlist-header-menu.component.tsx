import React from 'react';

type Props = {};

const WishlistHeaderMenu = (props: Props) => {
  return (
    <>
      <div className="panel-menu-module--panel--1jmDu">
        <div className="ud-text-md panel-menu-module--gap-bottom--QEee6 panel-menu-module--no-items--14_0t">
          Your wishlist is empty.
        </div>
        <a className="ud-heading-sm" data-testid="header-shopping-cta" href="/">
          Explore courses
        </a>
      </div>
    </>
  );
};

export default WishlistHeaderMenu;
