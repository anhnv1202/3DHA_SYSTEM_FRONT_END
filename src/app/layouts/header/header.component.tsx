import Button from '@app/components/button';
import { Link } from 'react-router-dom';
import { Images } from '@assets/images/index';
import { useTranslation } from 'react-i18next';
import { PATHS as path } from '../../common/constants/common.const';
import logoApp from '@assets/images/logo/logoApp.jpg';
type HeaderProps = {
  noShadow?: boolean;
};

const Header = ({ noShadow }: HeaderProps) => {
  const headerStyles = noShadow ? { boxShadow: 'none' } : {};
  const { t } = useTranslation();
  return (
    <div
      className="overflow-hidden ud-header ud-text-sm desktop-header-module--header--3nb6v desktop-header-module--flex-middle--1e7c8"
      style={headerStyles}
    >
      <Link to={path.HOMEPAGE} className="desktop-header-module--flex-middle--1e7c8 desktop-header-module--logo--2Qf0r">
        <img src={logoApp} alt="3DHA" width="91" height="34" loading="lazy" />
      </Link>
      <div className="ud-search-form-autocomplete desktop-header-module--search-bar--2V17S ud-form-group">
        <label className="ud-sr-only ud-form-label ud-heading-sm">Search for anything</label>
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
            tabIndex={-1}
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
      <div className="popper-module--popper--2BpLn">
        <Link
          to={path.CART}
          tabIndex={0}
          className="ud-btn ud-btn-large ud-btn-ghost ud-heading-md ud-btn-icon ud-btn-icon-large js-header-button desktop-header-module--dropdown-button--4lqEc"
        >
          <Images.MdOutlineShoppingCart
            role="img"
            focusable="false"
            className="ud-icon ud-icon-medium ud-icon-color-neutral"
          ></Images.MdOutlineShoppingCart>
        </Link>
        <div
          className="popper-module--popper-content--3cLBV desktop-header-module--dropdown--2R_M9"
          style={{ top: '100%', right: '0px' }}
        ></div>
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
        <Button label="" className="ud-btn ud-btn-medium ud-btn-secondary ud-heading-sm ud-btn-icon ud-btn-icon-medium">
          <Images.TfiWorld
            aria-label="Choose a language"
            role="img"
            focusable="false"
            className="ud-icon ud-icon-small ud-icon-color-neutral"
          ></Images.TfiWorld>
        </Button>
      </div>
    </div>
  );
};

export default Header;
