import { PATHS, localStorageKeys } from '@app/common/constants';
import { AuthContextType } from '@app/types';
import { useAuth } from '@core/context/auth.context';
import StorageService from '@core/services/storage';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

type Props = {};

const UserSectionHeaderMenu = (props: Props) => {
  const [selectedLanguage, setSelectedLanguage] = useState(StorageService.get(localStorageKeys.LANGUAGE) || 'en');
  const { i18n, t } = useTranslation();
  const { user } = useAuth() as AuthContextType;

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = e.target.value;

    setSelectedLanguage(selectedLanguage);
    StorageService.set(localStorageKeys.LANGUAGE, selectedLanguage);
    i18n.changeLanguage(selectedLanguage);
  };
  const userSectionData: any = [
    [
      { path: PATHS.COURSES, label: t('header.learning.name') },
      { path: PATHS.WISHLIST, label: t('header.wishlist.name') },
    ],
    [
      { path: PATHS.NOTIFICATION, label: t('header.notification.name') },
      { path: PATHS.MESSAGE, label: t('header.message.name') },
    ],
    [
      { value: 'en', label: 'English' },
      { value: 'vi', label: 'Tiếng Việt' },
    ],
    [{ path: PATHS.EDIT_PROFILE, label: t('header.editProfile.name') }],
    [
      { path: PATHS.SUPPORT, label: t('header.support.name') },
      { path: PATHS.LOGOUT, label: t('header.logout') },
    ],
  ];
  return (
    <>
      <Link to={PATHS.EDIT_PROFILE} className="user-profile-dropdown-module--user-section--3BWyl">
        <div
          className="user-profile-dropdown-module--user-section-avatar--2Oh1n ud-avatar ud-heading-xl"
          style={{ width: '6.4rem', height: '6.4rem' }}
        >
          <img src={user?.avatar} alt="avatar" className="w-[6.4rem] h-[6.4rem] rounded-[50%]" />
        </div>
        <div className="user-profile-dropdown-module--user-details--1ypfV">
          <div>
            <div className="ud-heading-md">{user?.username}</div>
            <div className="ud-text-xs user-profile-dropdown-module--email--QPfBN">{user?.email}</div>
          </div>
        </div>
      </Link>
      {userSectionData.map((items: any, indexParent: number) => (
        <ul className="ud-unstyled-list ud-block-list list-menu-module--section--1WKRq" key={indexParent}>
          {indexParent !== 2 ? (
            items.map((item: any, indexChild: number) => (
              <li key={indexChild}>
                <Link
                  to={item?.path}
                  className="ud-btn ud-btn-large ud-btn-ghost ud-text-sm ud-block-list-item ud-block-list-item-small ud-block-list-item-neutral"
                >
                  <div className="ud-block-list-item-content">{item?.label}</div>
                </Link>
              </li>
            ))
          ) : (
            <li>
              <button
                type="button"
                className="ud-btn ud-btn-large ud-btn-ghost ud-text-sm list-menu-module--item--3f005 ud-block-list-item ud-block-list-item-small ud-block-list-item-neutral"
              >
                <div className="ud-block-list-item-content">
                  <div className="language-selector-menu-item-module--item-content--1xE_P">
                    <label htmlFor="language">{t('header.languages')}</label>
                    <select
                      id="language"
                      className="language-selector-menu-item-module--language-select"
                      onChange={handleLanguageChange}
                      value={selectedLanguage}
                    >
                      {items.map((item: any, indexChild: number) => (
                        <option value={item?.value} key={indexChild}>
                          {item.label}
                        </option>
                      ))}
                      {/* Thêm các tùy chọn cho các ngôn ngữ khác ở đây */}
                    </select>
                  </div>
                </div>
                <svg
                  aria-hidden="true"
                  focusable="false"
                  className="ud-icon ud-icon-xsmall ud-block-list-item-icon"
                ></svg>
              </button>
            </li>
          )}
        </ul>
      ))}
    </>
  );
};

export default UserSectionHeaderMenu;
