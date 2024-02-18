import { AuthContextType } from '@app/types';
import { Images } from '@assets/images/index';
import logoApp from '@assets/images/logo/logoApp.jpg';
import { useAuth } from '@core/context/auth.context';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { PATHS as path } from '../../common/constants/common.const';
import LoggedInHeader from './logged-in-header.component';
import UnLoggedInHeader from './un-logged-header.component';
import { useDebouncedCallback } from '@core/hooks/use-debounced-callback.hook';

type HeaderProps = {
  noShadow?: boolean;
};

const Header = ({ noShadow }: HeaderProps) => {
  const headerStyles = noShadow ? { boxShadow: 'none' } : {};
  const { t } = useTranslation();
  const [isSearchInputed, setIsSearchInputed] = useState(false);
  const headerData = [
    { path: path.CATEGORY, title: t('header.category') },
    { path: path.BUSSINESS, title: t('header.bussiness') },
    { path: path.TEACHING, title: t('header.teaching') },
  ];
  const { user } = useAuth() as AuthContextType;
  const handleSearch = useDebouncedCallback((term) => {
    console.log(`Searching for: ${term}`);
    // Gọi hàm tìm kiếm thực sự ở đây (ví dụ: fetchData(term))
  }, 300);
  const handleChangeInputField = (e: any) => {
    //dobounce ???
    const newSearchTerm = e.target.value;
    handleSearch(newSearchTerm);

    e.target.value === '' ? setIsSearchInputed(false) : setIsSearchInputed(true);
  };
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
            name="q"
            onChange={(e: any) => handleChangeInputField(e)}
          />

          <button
            disabled={!isSearchInputed}
            className={`ud-btn ud-btn-large ud-btn-ghost ud-heading-md ${
              !isSearchInputed ? 'ud-btn-disabled' : ''
            } ud-btn-icon ud-btn-icon-large`}
            onClick={handleSearch}
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

      {!user ? <UnLoggedInHeader /> : <LoggedInHeader />}
    </div>
  );
};

export default Header;
