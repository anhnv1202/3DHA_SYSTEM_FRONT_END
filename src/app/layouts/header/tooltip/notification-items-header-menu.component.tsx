import { PATHS } from '@app/common/constants';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

type Props = {};

const NotificationItems = (props: Props) => {
  const { t } = useTranslation();
  return (
    <>
      <div className="notification-items-module--notification-items--1907s">
        <div className="panel-menu-module--section-heading--1Y_Vd panel-menu-module--gap-bottom--QEee6">
          <div className="ud-heading-lg panel-menu-module--section-heading-title--37-CN">Notifications</div>
          <Link className="ud-heading-sm panel-menu-module--section-heading-link--3TOqu" to={PATHS.NOTIFICATION}>
            {t('header.notification.title')}
          </Link>
        </div>
        <div className="ud-text-md panel-menu-module--panel--1jmDu panel-menu-module--no-items--14_0t notification-items-module--panel--1LwxL">
          {t('header.notification.description')}
        </div>
      </div>
    </>
  );
};

export default NotificationItems;
