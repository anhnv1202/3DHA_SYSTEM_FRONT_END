import Button from '@app/components/button';
import { Link } from 'react-router-dom';
import { Images } from '@assets/images/index';
import { useTranslation } from 'react-i18next';
import { PATHS as path } from '../../common/constants/common.const';
import logoApp from '@assets/images/logo/logoApp.jpg';
import LoggedInHeader from './logged-in-header.component';
import { User } from '@app/types';
import UnLoggedInHeader from './un-logged-header.component';

type HeaderProps = {
  noShadow?: boolean;
  user?: User | null;
};

const Header = ({ noShadow, user }: HeaderProps) => {
  const headerStyles = noShadow ? { boxShadow: 'none' } : {};
  const { t } = useTranslation();

  return (
    <div
      className="header ud-header ud-text-sm desktop-header-module--header--3nb6v desktop-header-module--flex-middle--1e7c8"
      style={headerStyles}
    >
      <Link to={path.HOMEPAGE} className="desktop-header-module--flex-middle--1e7c8 desktop-header-module--logo--2Qf0r">
        <img src={logoApp} alt="3DHA" width="72" height="34" loading="lazy" />
      </Link>
      <div className="ud-search-form-autocomplete desktop-header-module--search-bar--2V17S ud-form-group">
        <label className="ud-sr-only ud-form-label ud-heading-sm">{t('header.searchText')}</label>
        <div className="ud-search-form-autocomplete-input-group ud-search-form-autocomplete-input-group-reversed">
          <input
            type="text"
            className="ud-text-input ud-text-input-small ud-text-sm ud-search-form-autocomplete-input js-header-search-field"
            placeholder={t('header.searchText')}
          />
          <button
            type="submit"
            disabled
            className="ud-btn ud-btn-large ud-btn-ghost ud-heading-md ud-btn-disabled ud-btn-icon ud-btn-icon-large"
          >
            <Images.AiOutlineSearch focusable="false" className="ud-icon ud-icon-medium ud-icon-color-neutral" />
          </button>
        </div>
      </div>
      <nav className="popper-module--popper--2BpLn desktop-header-module--gap-button--1Ua9W">
        <Button
          className="ud-btn ud-btn-large ud-btn-ghost ud-heading-md js-header-button desktop-header-module--dropdown-button--4lqEc"
          label=""
          theme="normal"
        >
          <Link to={path.CATEGORY} className="ud-text-sm desktop-header-module--dropdown-button-text--k8O8T">
            {t('header.category')}
          </Link>
        </Button>
      </nav>

      <div className="popper-module--popper--2BpLn desktop-header-module--gap-button--1Ua9W desktop-header-module--group-a--2HpmY">
        <Link
          to={path.BUSSINESS}
          className="ud-btn ud-btn-large ud-btn-ghost ud-heading-md js-header-button desktop-header-module--dropdown-button--4lqEc"
        >
          <span className="ud-text-sm desktop-header-module--dropdown-button-text--k8O8T">{t('header.bussiness')}</span>
        </Link>
      </div>
      <div className="popper-module--popper--2BpLn desktop-header-module--gap-button--1Ua9W desktop-header-module--group-b--NGK7v">
        <Link
          to={path.TEACHING}
          className="ud-btn ud-btn-large ud-btn-ghost ud-heading-md js-header-button desktop-header-module--dropdown-button--4lqEc"
        >
          <span className="ud-text-sm desktop-header-module--dropdown-button-text--k8O8T">{t('header.teaching')}</span>
        </Link>
      </div>

      {!user ? <UnLoggedInHeader /> : <LoggedInHeader user={user} />}
    </div>
  );
};

export default Header;
