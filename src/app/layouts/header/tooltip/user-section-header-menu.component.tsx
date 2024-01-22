import { PATHS } from '@app/common/constants';
import { User } from '@app/types';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

type Props = {
  user: User | null | undefined;
};

const UserSectionHeaderMenu = ({ user }: Props) => {
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const { i18n, t } = useTranslation();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = e.target.value;
    setSelectedLanguage(selectedLanguage);
    i18n.changeLanguage(e.target.value);
  };
  return (
    <>
      <Link to={PATHS.EDIT_PROFILE} className="user-profile-dropdown-module--user-section--3BWyl">
        <div
          className="user-profile-dropdown-module--user-section-avatar--2Oh1n ud-avatar ud-heading-xl"
          style={{ width: '6.4rem', height: '6.4rem' }}
        >
          <img src={user?.avatar} alt="avatar" />
        </div>
        <div className="user-profile-dropdown-module--user-details--1ypfV">
          <div>
            <div className="ud-heading-md">{user?.username}</div>
            <div className="ud-text-xs user-profile-dropdown-module--email--QPfBN">{user?.email}</div>
          </div>
        </div>
      </Link>
      <ul className="ud-unstyled-list ud-block-list list-menu-module--section--1WKRq">
        <li>
          <Link
            to={PATHS.COURSES}
            className="ud-btn ud-btn-large ud-btn-ghost ud-text-sm ud-block-list-item ud-block-list-item-small ud-block-list-item-neutral"
          >
            <div className="ud-block-list-item-content">{t('header.learning')}</div>
          </Link>
        </li>
        <li>
          <Link
            to={PATHS.WISHLIST}
            className="ud-btn ud-btn-large ud-btn-ghost ud-text-sm ud-block-list-item ud-block-list-item-small ud-block-list-item-neutral"
          >
            <div className="ud-block-list-item-content">{t('header.wishlist.name')}</div>
          </Link>
        </li>
      </ul>
      <ul className="ud-unstyled-list ud-block-list list-menu-module--section--1WKRq">
        <li>
          <Link
            to={PATHS.NOTIFICATION}
            className="ud-btn ud-btn-large ud-btn-ghost ud-text-sm ud-block-list-item ud-block-list-item-small ud-block-list-item-neutral"
          >
            <div className="ud-block-list-item-content">{t('header.notification.name')}</div>
          </Link>
        </li>
        <li>
          <Link
            to={PATHS.MESSAGE}
            className="ud-btn ud-btn-large ud-btn-ghost ud-text-sm ud-block-list-item ud-block-list-item-small ud-block-list-item-neutral"
          >
            <div className="ud-block-list-item-content">{t('header.message.name')}</div>
          </Link>
        </li>
      </ul>
      <ul className="ud-unstyled-list ud-block-list list-menu-module--section--1WKRq">
        <li>
          <button
            type="button"
            className="ud-btn ud-btn-large ud-btn-ghost ud-text-sm list-menu-module--item--3f005 ud-block-list-item ud-block-list-item-small ud-block-list-item-neutral"
          >
            <div className="ud-block-list-item-content">
              <div className="language-selector-menu-item-module--item-content--1xE_P">
                <label htmlFor="language">Language</label>
                <select
                  id="language"
                  className="language-selector-menu-item-module--language-select"
                  onChange={handleLanguageChange}
                  value={selectedLanguage}
                >
                  <option value="en">English</option>
                  <option value="vi">Tiếng Việt</option>
                  {/* Thêm các tùy chọn cho các ngôn ngữ khác ở đây */}
                </select>
              </div>
            </div>
            <svg aria-hidden="true" focusable="false" className="ud-icon ud-icon-xsmall ud-block-list-item-icon"></svg>
          </button>
        </li>
      </ul>
      <ul className="ud-unstyled-list ud-block-list list-menu-module--section--1WKRq">
        <li>
          <Link
            to={PATHS.EDIT_PROFILE}
            className="ud-btn ud-btn-large ud-btn-ghost ud-text-sm ud-block-list-item ud-block-list-item-small ud-block-list-item-neutral"
          >
            <div className="ud-block-list-item-content">{t('header.editProfile.name')}</div>
          </Link>
        </li>
      </ul>
      <ul className="ud-unstyled-list ud-block-list list-menu-module--section--1WKRq">
        <li>
          <Link
            to={PATHS.SUPPORT}
            className="ud-btn ud-btn-large ud-btn-ghost ud-text-sm ud-block-list-item ud-block-list-item-small ud-block-list-item-neutral"
          >
            <div className="ud-block-list-item-content">{t('header.support.name')}</div>
          </Link>
        </li>
        <li>
          <Link
            to={PATHS.LOGOUT}
            className="ud-btn ud-btn-large ud-btn-ghost ud-text-sm ud-block-list-item ud-block-list-item-small ud-block-list-item-neutral"
          >
            <div className="ud-block-list-item-content">{t('header.logout')}</div>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default UserSectionHeaderMenu;
