<<<<<<< HEAD
import React from 'react';
=======
import { PATHS } from '@app/common/constants';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
>>>>>>> 1417c18c87790f8698f9944dc297b7a4bd2c418f

type Props = {};

const NotificationItems = (props: Props) => {
<<<<<<< HEAD
=======
  const { t } = useTranslation();
>>>>>>> 1417c18c87790f8698f9944dc297b7a4bd2c418f
  return (
    <>
      <div className="notification-items-module--notification-items--1907s">
        <div className="panel-menu-module--section-heading--1Y_Vd panel-menu-module--gap-bottom--QEee6">
          <div className="ud-heading-lg panel-menu-module--section-heading-title--37-CN">Notifications</div>
<<<<<<< HEAD
          <a className="ud-heading-sm panel-menu-module--section-heading-link--3TOqu" href="/user/edit-notifications/">
            Settings
          </a>
        </div>
        <div className="ud-text-md panel-menu-module--panel--1jmDu panel-menu-module--no-items--14_0t notification-items-module--panel--1LwxL">
          No notifications.
=======
          <Link className="ud-heading-sm panel-menu-module--section-heading-link--3TOqu" to={PATHS.NOTIFICATION}>
            {t('header.notification.title')}
          </Link>
        </div>
        <div className="ud-text-md panel-menu-module--panel--1jmDu panel-menu-module--no-items--14_0t notification-items-module--panel--1LwxL">
          {t('header.notification.description')}
>>>>>>> 1417c18c87790f8698f9944dc297b7a4bd2c418f
        </div>
      </div>
    </>
  );
};

export default NotificationItems;
