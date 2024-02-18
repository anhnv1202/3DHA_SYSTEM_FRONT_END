import { Link } from 'react-router-dom';
import { Images } from '@assets/images/index';
import { useTranslation } from 'react-i18next';
import { INITIAL_VALUES, PATHS as path } from '../../common/constants/common.const';
import logoApp from '@assets/images/logo/logoApp.jpg';
import LoggedInHeader from './logged-in-header.component';
import { AuthContextType, SearchInitialValues } from '@app/types';
import UnLoggedInHeader from './un-logged-header.component';
import { useAuth } from '@core/context/auth.context';
import { Field, Form, Formik, FormikContextType } from 'formik';
import { createRef, useState } from 'react';
import { FormControl } from '@app/components/form-control';
import Input from '@app/components/input';

type HeaderProps = {
  noShadow?: boolean;
};

const Header = ({ noShadow }: HeaderProps) => {
  const headerStyles = noShadow ? { boxShadow: 'none' } : {};
  const { t } = useTranslation();
  const formRef = createRef<FormikContextType<SearchInitialValues>>();
  const [isSearchInputed, setIsSearchInputed] = useState(false);
  const headerData = [
    { path: path.CATEGORY, title: t('header.category') },
    { path: path.BUSSINESS, title: t('header.bussiness') },
    { path: path.TEACHING, title: t('header.teaching') },
  ];
  const { user } = useAuth() as AuthContextType;
  const handleSearch = () => {
    alert('searching');
  };
  const handleChangeInputField = (e: any) => {
    e.target.value === '' ? setIsSearchInputed(false) : setIsSearchInputed(true);
    console.log();
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
        <Formik initialValues={INITIAL_VALUES.SEARCH} onSubmit={handleSearch} validateOnChange validateOnBlur>
          <Form>
            <div className="ud-search-form-autocomplete-input-group ud-search-form-autocomplete-input-group-reversed">
              <Field
                type="text"
                className="ud-text-input ud-text-input-small ud-text-sm ud-search-form-autocomplete-input js-header-search-field"
                placeholder={t('header.searchText')}
                name="q"
              />

              <button
                type="submit"
                disabled={isSearchInputed}
                className={`ud-btn ud-btn-large ud-btn-ghost ud-heading-md ${
                  !isSearchInputed ? 'ud-btn-disabled' : ''
                } ud-btn-icon ud-btn-icon-large`}
              >
                <Images.AiOutlineSearch focusable="false" className="ud-icon ud-icon-medium ud-icon-color-neutral" />
              </button>
            </div>
          </Form>
        </Formik>
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
