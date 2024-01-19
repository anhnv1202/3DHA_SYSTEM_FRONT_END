import React from 'react';
import { Link } from 'react-router-dom';

type Props = {};

const CartHeaderMenu = (props: Props) => {
  return (
    <>
      <div className="panel-menu-module--panel--1jmDu">
        <div className="ud-text-md panel-menu-module--gap-bottom--QEee6 panel-menu-module--no-items--14_0t">
          Your cart is empty.
        </div>
        <Link className="ud-heading-sm" data-testid="header-shopping-cta" to="/">
          Keep shopping
        </Link>
      </div>
    </>
  );
};

export default CartHeaderMenu;
