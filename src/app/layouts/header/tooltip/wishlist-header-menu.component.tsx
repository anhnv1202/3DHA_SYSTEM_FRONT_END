<<<<<<< HEAD
import React from 'react';
=======
import { PATHS } from '@app/common/constants';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
>>>>>>> 1417c18c87790f8698f9944dc297b7a4bd2c418f

type Props = {};

const WishlistHeaderMenu = (props: Props) => {
<<<<<<< HEAD
=======
  const { t } = useTranslation();
>>>>>>> 1417c18c87790f8698f9944dc297b7a4bd2c418f
  return (
    <>
      <div className="panel-menu-module--panel--1jmDu">
        <div className="ud-text-md panel-menu-module--gap-bottom--QEee6 panel-menu-module--no-items--14_0t">
<<<<<<< HEAD
          Your wishlist is empty.
        </div>
        <a className="ud-heading-sm" data-testid="header-shopping-cta" href="/">
          Explore courses
        </a>
=======
          {t('header.wishlist.title')}
        </div>
        <Link className="ud-heading-sm" to={PATHS.DEFAULT}>
          {t('header.wishlist.description')}
        </Link>
>>>>>>> 1417c18c87790f8698f9944dc297b7a4bd2c418f
      </div>
    </>
  );
};

export default WishlistHeaderMenu;
