import { PATHS } from '@app/common/constants';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

type Props = {};

const LearningHeaderMenu = (props: Props) => {
  const { t } = useTranslation();
  return (
    <>
      <div className="panel-menu-module--panel--1jmDu">
        <div className="ud-text-md panel-menu-module--gap-bottom--QEee6 panel-menu-module--no-items--14_0t">
          {t('header.learning.title')}
        </div>
        <Link className="ud-heading-sm" to={PATHS.DEFAULT}>
          {t('header.learning.description')}
        </Link>
      </div>
    </>
  );
};

export default LearningHeaderMenu;
