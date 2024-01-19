import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

type Props = {};

const UserSectionHeaderMenu = (props: Props) => {
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const { i18n } = useTranslation();
  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = e.target.value;
    setSelectedLanguage(selectedLanguage);
    i18n.changeLanguage(e.target.value);
  };
  return (
    <>
      <a href="/user/edit-profile/" className="user-profile-dropdown-module--user-section--3BWyl">
        <div
          aria-hidden="true"
          className="user-profile-dropdown-module--user-section-avatar--2Oh1n ud-avatar ud-heading-xl"
          data-purpose="display-initials"
          style={{ width: '6.4rem', height: '6.4rem' }}
        >
          TA
        </div>
        <div className="user-profile-dropdown-module--user-details--1ypfV">
          <div>
            <div className="ud-heading-md">Trịnh Tiến Đạt</div>
            <div className="ud-text-xs user-profile-dropdown-module--email--QPfBN">trinhtiendat2510@gmail.com</div>
          </div>
        </div>
      </a>
      <ul className="ud-unstyled-list ud-block-list list-menu-module--section--1WKRq">
        <li>
          <a
            href="/home/my-courses/"
            className="ud-btn ud-btn-large ud-btn-ghost ud-text-sm ud-block-list-item ud-block-list-item-small ud-block-list-item-neutral"
          >
            <div className="ud-block-list-item-content">My learning</div>
          </a>
        </li>
        <li>
          <a
            href="/cart/"
            className="ud-btn ud-btn-large ud-btn-ghost ud-text-sm ud-block-list-item ud-block-list-item-small ud-block-list-item-neutral"
          >
            <div className="ud-block-list-item-content">My cart</div>
          </a>
        </li>
        <li>
          <a
            href="/home/my-courses/wishlist/"
            className="ud-btn ud-btn-large ud-btn-ghost ud-text-sm ud-block-list-item ud-block-list-item-small ud-block-list-item-neutral"
          >
            <div className="ud-block-list-item-content">Wishlist</div>
          </a>
        </li>
        {/* <li>
          <a
            href="/teaching/?ref=teach_header"
            className="ud-btn ud-btn-large ud-btn-ghost ud-text-sm ud-block-list-item ud-block-list-item-small ud-block-list-item-neutral"
          >
            <div className="ud-block-list-item-content">Teach on Udemy</div>
          </a>
        </li> */}
      </ul>
      <ul className="ud-unstyled-list ud-block-list list-menu-module--section--1WKRq">
        <li>
          <a
            href="/user/view-notifications/"
            className="ud-btn ud-btn-large ud-btn-ghost ud-text-sm ud-block-list-item ud-block-list-item-small ud-block-list-item-neutral"
          >
            <div className="ud-block-list-item-content">Notifications</div>
          </a>
        </li>
        <li>
          <a
            href="/message/"
            className="ud-btn ud-btn-large ud-btn-ghost ud-text-sm ud-block-list-item ud-block-list-item-small ud-block-list-item-neutral"
          >
            <div className="ud-block-list-item-content">Messages</div>
          </a>
        </li>
      </ul>
      {/* <ul className="ud-unstyled-list ud-block-list list-menu-module--section--1WKRq">
        <li>
          <a
            href="/user/edit-account/"
            className="ud-btn ud-btn-large ud-btn-ghost ud-text-sm ud-block-list-item ud-block-list-item-small ud-block-list-item-neutral"
          >
            <div className="ud-block-list-item-content">Account settings</div>
          </a>
        </li>
        <li>
          <a
            href="/user/edit-payment-methods/"
            className="ud-btn ud-btn-large ud-btn-ghost ud-text-sm ud-block-list-item ud-block-list-item-small ud-block-list-item-neutral"
          >
            <div className="ud-block-list-item-content">Payment methods</div>
          </a>
        </li>
        <li>
          <a
            href="/user/manage-subscriptions/"
            className="ud-btn ud-btn-large ud-btn-ghost ud-text-sm ud-block-list-item ud-block-list-item-small ud-block-list-item-neutral"
          >
            <div className="ud-block-list-item-content">
              <div className="user-profile-dropdown-module--subscription-menu-item--1NrmG">Subscriptions</div>
            </div>
          </a>
        </li>
        <li>
          <a
            href="/dashboard/credit-history/"
            className="ud-btn ud-btn-large ud-btn-ghost ud-text-sm ud-block-list-item ud-block-list-item-small ud-block-list-item-neutral"
          >
            <div className="ud-block-list-item-content">Udemy credits</div>
          </a>
        </li>
        <li>
          <a
            href="/dashboard/purchase-history/"
            className="ud-btn ud-btn-large ud-btn-ghost ud-text-sm ud-block-list-item ud-block-list-item-small ud-block-list-item-neutral"
          >
            <div className="ud-block-list-item-content">Purchase history</div>
          </a>
        </li>
      </ul> */}
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
          <a
            href="/user/trinh-tien-dat-10/"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="ud-btn ud-btn-large ud-btn-ghost ud-text-sm ud-block-list-item ud-block-list-item-small ud-block-list-item-neutral"
          >
            <div className="ud-block-list-item-content">Public profile</div>
          </a>
        </li>
        <li>
          <a
            href="/user/edit-profile/"
            className="ud-btn ud-btn-large ud-btn-ghost ud-text-sm ud-block-list-item ud-block-list-item-small ud-block-list-item-neutral"
          >
            <div className="ud-block-list-item-content">Edit profile</div>
          </a>
        </li>
      </ul>
      <ul className="ud-unstyled-list ud-block-list list-menu-module--section--1WKRq">
        <li>
          <a
            href="/support/"
            target="_blank"
            rel="noopener noreferrer"
            className="ud-btn ud-btn-large ud-btn-ghost ud-text-sm ud-block-list-item ud-block-list-item-small ud-block-list-item-neutral"
          >
            <div className="ud-block-list-item-content">Help</div>
          </a>
        </li>
        <li>
          <Link
            to="/login"
            className="ud-btn ud-btn-large ud-btn-ghost ud-text-sm ud-block-list-item ud-block-list-item-small ud-block-list-item-neutral"
          >
            <div className="ud-block-list-item-content">Log out</div>
          </Link>
        </li>
      </ul>
      <a
        className="user-profile-dropdown-module--try-ufb-section--3h18I"
        href="/udemy-business/request-demo-mx/?ref=account-menu&amp;locale=en_US"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div>
          <div className="ud-heading-md">Udemy Business</div>
          <div className="ud-text-sm user-profile-dropdown-module--try-ufb-subtitle--31ex7">
            Bring learning to your company
          </div>
        </div>
        <svg aria-hidden="true" focusable="false" className="ud-icon ud-icon-medium ud-icon-color-neutral"></svg>
      </a>
    </>
  );
};

export default UserSectionHeaderMenu;
