import Button from '@app/components/button';
import { Link } from 'react-router-dom';
import { Images } from '@assets/images/index';
import { useTranslation } from 'react-i18next';
import { PATHS as path } from '../../common/constants/common.const';
import logoApp from '@assets/images/logo/logoApp.jpg';
import { useState } from 'react';
type HeaderProps = {
  noShadow?: boolean;
  isUserLoggedIn?: boolean;
};

const Header = ({ noShadow, isUserLoggedIn }: HeaderProps) => {
  const headerStyles = noShadow ? { boxShadow: 'none' } : {};
  const { t } = useTranslation();
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => setIsHovered(!isHovered);
  return (
    <div
      className="header ud-header ud-text-sm desktop-header-module--header--3nb6v desktop-header-module--flex-middle--1e7c8"
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
        <>
          <div className="popper-module--popper--2BpLn desktop-header-module--gap-button--1Ua9W">
            <a
              href="/home/my-courses/"
              data-testid="my-courses"
              id="u126-popper-trigger--14"
              aria-expanded="false"
              className="ud-btn ud-btn-large ud-btn-ghost ud-heading-md js-header-button desktop-header-module--dropdown-button--4lqEc"
            >
              <span className="ud-text-sm desktop-header-module--dropdown-button-text--k8O8T">My learning</span>
            </a>
            <div
              className="popper-module--popper-content--3cLBV desktop-header-module--dropdown--2R_M9"
              id="u126-popper-content--15"
              aria-labelledby="u126-popper-trigger--14"
              style={{ top: '100%', right: '0px;' }}
            ></div>
          </div>
          <div className="popper-module--popper--2BpLn desktop-header-module--group-c--2Gvzn">
            <Link
              to="/home/my-courses/wishlist/"
              className="ud-btn ud-btn-large ud-btn-ghost ud-heading-md ud-btn-icon ud-btn-icon-large js-header-button desktop-header-module--dropdown-button--4lqEc"
            >
              <Images.CiHeart focusable="false" className="ud-icon ud-icon-medium ud-icon-color-neutral" />
            </Link>
          </div>
          <div className="popper-module--popper--2BpLn">
            <Link
              to="/cart/"
              className="ud-btn ud-btn-large ud-btn-ghost ud-heading-md ud-btn-icon ud-btn-icon-large js-header-button desktop-header-module--dropdown-button--4lqEc"
            >
              <Images.CiShoppingCart focusable="false" className="ud-icon ud-icon-medium ud-icon-color-neutral" />
            </Link>
          </div>
          <div className="popper-module--popper--2BpLn desktop-header-module--group-c--2Gvzn">
            <Link
              to="/user/view-notifications/"
              className="ud-btn ud-btn-large ud-btn-ghost ud-heading-md ud-btn-icon ud-btn-icon-large js-header-button desktop-header-module--dropdown-button--4lqEc"
            >
              <Images.IoIosNotificationsOutline
                focusable="false"
                className="ud-icon ud-icon-medium ud-icon-color-neutral"
              />
            </Link>
            <div
              className="popper-module--popper-content--3cLBV desktop-header-module--dropdown--2R_M9"
              id="u113-popper-content--21"
              aria-labelledby="u113-popper-trigger--20"
              style={{ top: '100%', right: '0px' }}
            >
              <div className="popper-module--animation-wrapper--2ogNt">
                <div className="popover-module--popover--1kskS popover-module--popover-bottom--N6gdN">
                  <div className="popover-module--inner--Sbv-I">
                    <div className="ud-header-menu desktop-header-module--menu--2f2fF" data-testid="header-menu">
                      <div className="notification-items-module--notification-items--1907s">
                        <div className="panel-menu-module--section-heading--1Y_Vd panel-menu-module--gap-bottom--QEee6">
                          <div className="ud-heading-lg panel-menu-module--section-heading-title--37-CN">
                            Notifications
                          </div>
                          <a
                            className="ud-heading-sm panel-menu-module--section-heading-link--3TOqu"
                            href="/user/edit-notifications/"
                          >
                            Settings
                          </a>
                        </div>
                        <div className="ud-text-md panel-menu-module--panel--1jmDu panel-menu-module--no-items--14_0t notification-items-module--panel--1LwxL">
                          No notifications.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="popper-module--popper--2BpLn  list-menu-module--list-menu-container--3d8ZF"
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
          >
            <Link
              to="/user/edit-profile/"
              className="ud-btn ud-btn-large ud-btn-ghost ud-heading-md js-header-button desktop-header-module--dropdown-button--4lqEc"
            >
              <div
                className="user-profile-dropdown-module--dropdown-button-avatar--2jhme ud-avatar ud-heading-sm"
                style={{ width: '3.2rem', height: '3.2rem' }}
              >
                TA
              </div>
            </Link>
            <div
              className={`popper-module--popper-content--3cLBV desktop-header-module--dropdown--2R_M9 ${
                isHovered ? 'ud-popper-open' : ''
              }`}
              style={{ top: '100%', right: '0px' }}
              onMouseEnter={() => setIsHovered(isHovered)}
              onMouseLeave={handleHover}
            >
              <div className="popper-module--animation-wrapper--2ogNt">
                <div className="popover-module--popover--1kskS popover-module--popover-bottom--N6gdN">
                  <div className="popover-module--inner--Sbv-I">
                    <div className="ud-header-menu desktop-header-module--menu--2f2fF" data-testid="header-menu">
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
                            <div className="ud-text-xs user-profile-dropdown-module--email--QPfBN">
                              trinhtiendat2510@gmail.com
                            </div>
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
                        <li>
                          <a
                            href="/teaching/?ref=teach_header"
                            className="ud-btn ud-btn-large ud-btn-ghost ud-text-sm ud-block-list-item ud-block-list-item-small ud-block-list-item-neutral"
                          >
                            <div className="ud-block-list-item-content">Teach on Udemy</div>
                          </a>
                        </li>
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
                      <ul className="ud-unstyled-list ud-block-list list-menu-module--section--1WKRq">
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
                              <div className="user-profile-dropdown-module--subscription-menu-item--1NrmG">
                                Subscriptions
                              </div>
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
                      </ul>
                      <ul className="ud-unstyled-list ud-block-list list-menu-module--section--1WKRq">
                        <li>
                          <button
                            type="button"
                            className="ud-btn ud-btn-large ud-btn-ghost ud-text-sm list-menu-module--item--3f005 ud-block-list-item ud-block-list-item-small ud-block-list-item-neutral"
                          >
                            <div className="ud-block-list-item-content">
                              <div className="language-selector-menu-item-module--item-content--1xE_P">
                                <span>Language</span>
                                <span className="language-selector-menu-item-module--current-language--1gXmr">
                                  English
                                </span>
                              </div>
                            </div>
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              className="ud-icon ud-icon-xsmall ud-block-list-item-icon"
                            ></svg>
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
                          <a
                            href="/user/logout/?h=3%40WH3jrEJobfZ-ofsJaTiIxoOP4wWeygCCZ0hjdLjP01_J8Go_gjVjanYpLhS1Q1uuxyez"
                            className="ud-btn ud-btn-large ud-btn-ghost ud-text-sm ud-block-list-item ud-block-list-item-small ud-block-list-item-neutral"
                          >
                            <div className="ud-block-list-item-content">Log out</div>
                          </a>
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
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          className="ud-icon ud-icon-medium ud-icon-color-neutral"
                        ></svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
