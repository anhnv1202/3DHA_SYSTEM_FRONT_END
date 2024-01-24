import { Link } from 'react-router-dom';
import { Images } from '@assets/images/index';
import { useTranslation } from 'react-i18next';
import { PATHS as path } from '../../common/constants/common.const';
import logoApp from '@assets/images/logo/logoApp.jpg';
import LoggedInHeader from './logged-in-header.component';
<<<<<<< HEAD
=======
import { AuthContextType } from '@app/types';
import UnLoggedInHeader from './un-logged-header.component';
import { useAuth } from '@core/context/auth.context';
>>>>>>> 1417c18c87790f8698f9944dc297b7a4bd2c418f

type HeaderProps = {
  noShadow?: boolean;
  isUserLoggedIn?: boolean;
};

const Header = ({ noShadow, isUserLoggedIn }: HeaderProps) => {
  const headerStyles = noShadow ? { boxShadow: 'none' } : {};
  const { t } = useTranslation();
<<<<<<< HEAD
=======
  const headerData = [
    { path: path.CATEGORY, title: t('header.category') },
    { path: path.BUSSINESS, title: t('header.bussiness') },
    { path: path.TEACHING, title: t('header.teaching') },
  ];
  const { user } = useAuth() as AuthContextType;
>>>>>>> 1417c18c87790f8698f9944dc297b7a4bd2c418f

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
      {headerData.map((item) => (
        <div className="popper-module--popper--2BpLn desktop-header-module--gap-button--1Ua9W desktop-header-module--group-a--2HpmY">
          <Link
            to={item.path}
            className="ud-btn ud-btn-large ud-btn-ghost ud-heading-md js-header-button desktop-header-module--dropdown-button--4lqEc"
          >
            <span className="ud-text-sm desktop-header-module--dropdown-button-text--k8O8T">{item.title}</span>
          </Link>
        </div>
      ))}

<<<<<<< HEAD
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

      {isUserLoggedIn ? (
        <>
          <div className="popper-module--popper--2BpLn">
            <Link
              to={path.CART}
              tabIndex={0}
              className="ud-btn ud-btn-large ud-btn-ghost ud-heading-md ud-btn-icon ud-btn-icon-large js-header-button desktop-header-module--dropdown-button--4lqEc"
            >
              <Images.CiShoppingCart
                role="img"
                focusable="false"
                className="ud-icon ud-icon-medium ud-icon-color-neutral"
              />
            </Link>
          </div>
          <div className="desktop-header-module--gap-auth-button--3UCSU">
            <Link to={path.LOGIN} className="ud-btn ud-btn-medium ud-btn-secondary ud-heading-sm">
              <span>{t('header.login')}</span>
            </Link>
          </div>
          <div className="desktop-header-module--gap-auth-button--3UCSU">
            <Link to={path.REGISTER} className="ud-btn ud-btn-medium ud-btn-primary ud-heading-sm">
              <span>{t('header.register')}</span>
            </Link>
          </div>
          <div className="desktop-header-module--gap-auth-button--3UCSU">
            <Button
              label=""
              className="ud-btn ud-btn-medium ud-btn-secondary ud-heading-sm ud-btn-icon ud-btn-icon-medium"
            >
              <Images.TfiWorld
                aria-label="Choose a language"
                role="img"
                focusable="false"
                className="ud-icon ud-icon-small ud-icon-color-neutral"
              ></Images.TfiWorld>
            </Button>
          </div>
        </>
      ) : (
        <LoggedInHeader />
      )}
=======
      {!user ? <UnLoggedInHeader /> : <LoggedInHeader />}
>>>>>>> 1417c18c87790f8698f9944dc297b7a4bd2c418f
    </div>
  );
};

export default Header;
