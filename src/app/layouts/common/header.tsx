import Button from '@app/components/button';
import { Link } from 'react-router-dom';

type HeaderProps = {
  noShadow?: boolean;
};

const Header = ({ noShadow }: HeaderProps) => {
  const headerStyles = noShadow ? { boxShadow: 'none' } : {};

  return (
    <div
      className="ud-header ud-text-sm desktop-header-module--header--3nb6v desktop-header-module--flex-middle--1e7c8"
      style={headerStyles}
    >
      <Link to={'./'} className="desktop-header-module--flex-middle--1e7c8 desktop-header-module--logo--2Qf0r">
        <img
          src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
          alt="Udemy"
          width="91"
          height="34"
          loading="lazy"
        />
      </Link>
      <nav className="popper-module--popper--2BpLn desktop-header-module--gap-button--1Ua9W">
        <Button
          className="ud-btn ud-btn-large ud-btn-ghost ud-heading-md js-header-button desktop-header-module--dropdown-button--4lqEc"
          label=""
          theme="danger"
        >
          <span className="ud-text-sm desktop-header-module--dropdown-button-text--k8O8T">Categories</span>
        </Button>
        <div
          className="popper-module--popper-content--3cLBV desktop-header-module--dropdown--2R_M9"
          id="u100-popper-content--2"
          aria-labelledby="u100-popper-trigger--1"
          style={{ top: '100%', left: '0' }}
        >
          <div className="popper-module--animation-wrapper--2ogNt">
            <div className="popover-module--popover--1kskS popover-module--popover-bottom--N6gdN">
              <div className="popover-module--inner--Sbv-I">
                <div className="list-menu-module--list-menu-container--3d8ZF browse-nav-module--nav-container--1J6dv">
                  <div
                    id="header-browse-nav-level-two"
                    className="js-browse-nav-level-two browse-nav-module--nav--205F5"
                    style={{ display: 'none' }}
                    data-testid="browse-nav-list"
                  ></div>
                  <div
                    id="header-browse-nav-level-three"
                    className="js-browse-nav-level-three browse-nav-module--nav--205F5"
                    style={{ display: 'none' }}
                    data-testid="browse-nav-list"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div lang="en" className="ud-search-form-autocomplete desktop-header-module--search-bar--2V17S ud-form-group">
        <label className="ud-sr-only ud-form-label ud-heading-sm">Search for anything</label>
        <form
          action="/courses/search/"
          className="ud-search-form-autocomplete-input-group ud-search-form-autocomplete-input-group-reversed"
        >
          <input type="hidden" name="src" value="ukw" />
          <input
            type="text"
            aria-invalid="false"
            name="q"
            data-testid="search-input"
            placeholder="Search for anything"
            autoComplete="off"
            value=""
            role="combobox"
            aria-autocomplete="both"
            aria-haspopup="true"
            aria-expanded="false"
            aria-controls="u100-search-form-autocomplete--3-menu-content-items"
            id="u100-search-form-autocomplete--3"
            className="ud-text-input ud-text-input-small ud-text-sm ud-search-form-autocomplete-input js-header-search-field"
          />
          <button
            type="submit"
            disabled
            className="ud-btn ud-btn-large ud-btn-ghost ud-heading-md ud-btn-disabled ud-btn-icon ud-btn-icon-large"
            // tabIndex="-1"
          >
            <svg
              aria-label="Submit search"
              role="img"
              focusable="false"
              className="ud-icon ud-icon-medium ud-icon-color-neutral"
            ></svg>
          </button>
        </form>
      </div>
      <div className="popper-module--popper--2BpLn desktop-header-module--gap-button--1Ua9W desktop-header-module--group-a--2HpmY">
        <a
          data-purpose="try-ufb-dropdown-trigger"
          href="/udemy-business/?locale=en_US&amp;mx_pg=httpcachecontextsme-list&amp;path=request-demo-mx%2F&amp;ref=ufb_header"
          target="_blank"
          rel="noopener"
          id="u100-popper-trigger--8"
          aria-describedby="u100-popper-content--9"
          // tabIndex="0"
          className="ud-btn ud-btn-large ud-btn-ghost ud-heading-md js-header-button desktop-header-module--dropdown-button--4lqEc"
        >
          <span className="ud-text-sm desktop-header-module--dropdown-button-text--k8O8T">Udemy Business</span>
        </a>
        <div
          className="popper-module--popper-content--3cLBV desktop-header-module--dropdown--2R_M9"
          id="u100-popper-content--9"
          style={{ top: '100%', right: '0px' }}
        >
          <div className="popper-module--animation-wrapper--2ogNt">
            <div className="popover-module--popover--1kskS popover-module--popover-bottom--N6gdN">
              <div className="popover-module--inner--Sbv-I">
                <div className="ud-header-menu desktop-header-module--menu--2f2fF" data-testid="header-menu">
                  <div className="panel-menu-module--panel--1jmDu">
                    <div className="ud-heading-lg panel-menu-module--gap-bottom--QEee6" data-purpose="hook-text">
                      Get your team access to over 25,000 top Udemy courses, anytime, anywhere.
                    </div>
                    <a
                      data-purpose="try-ufb-button"
                      href="/udemy-business/?locale=en_US&amp;mx_pg=httpcachecontextsme-list&amp;path=request-demo-mx%2F&amp;ref=ufb_header"
                      className="ud-btn ud-btn-large ud-btn-primary ud-heading-md panel-menu-module--cta--1g6KV"
                      target="_blank"
                      rel="noopener"
                    >
                      <span>Try Udemy Business</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="popper-module--popper--2BpLn desktop-header-module--gap-button--1Ua9W desktop-header-module--group-b--NGK7v">
        <a
          href="/teaching/?ref=teach_header"
          data-purpose="instructor-dropdown"
          data-testid="teach-on-udemy-link"
          id="u100-popper-trigger--10"
          aria-describedby="u100-popper-content--11"
          className="ud-btn ud-btn-large ud-btn-ghost ud-heading-md js-header-button desktop-header-module--dropdown-button--4lqEc"
        >
          <span className="ud-text-sm desktop-header-module--dropdown-button-text--k8O8T">Teach on Udemy</span>
        </a>
        <div
          className="popper-module--popper-content--3cLBV desktop-header-module--dropdown--2R_M9"
          id="u100-popper-content--11"
          style={{ top: '100%', right: '0px' }}
        >
          <div className="popper-module--animation-wrapper--2ogNt">
            <div className="popover-module--popover--1kskS popover-module--popover-bottom--N6gdN">
              <div className="popover-module--inner--Sbv-I">
                <div className="ud-header-menu desktop-header-module--menu--2f2fF" data-testid="header-menu">
                  <div className="panel-menu-module--panel--1jmDu">
                    <div className="ud-heading-lg panel-menu-module--gap-bottom--QEee6">
                      Turn what you know into an opportunity and reach millions around the world.
                    </div>
                    <a
                      href="/teaching/?ref=teach_header"
                      className="ud-btn ud-btn-large ud-btn-primary ud-heading-md panel-menu-module--cta--1g6KV"
                      data-testid="learn-more-link"
                    >
                      <span>Learn more</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="popper-module--popper--2BpLn">
        <a
          href="/cart/"
          data-testid="cart-icon"
          id="u100-popper-trigger--12"
          // aria-expanded="false" tabIndex="0"
          className="ud-btn ud-btn-large ud-btn-ghost ud-heading-md ud-btn-icon ud-btn-icon-large js-header-button desktop-header-module--dropdown-button--4lqEc"
        >
          <svg
            aria-label="Shopping cart with 0 items"
            role="img"
            focusable="false"
            className="ud-icon ud-icon-medium ud-icon-color-neutral"
          >
            {/* <use xlink:href="#icon-cart"></use> */}
          </svg>
        </a>
        <div
          className="popper-module--popper-content--3cLBV desktop-header-module--dropdown--2R_M9"
          id="u100-popper-content--13"
          aria-labelledby="u100-popper-trigger--12"
          style={{ top: '100%', right: '0px' }}
        >
          <div className="popper-module--animation-wrapper--2ogNt">
            <div className="popover-module--popover--1kskS popover-module--popover-bottom--N6gdN">
              <div className="popover-module--inner--Sbv-I">
                <div className="ud-header-menu desktop-header-module--menu--2f2fF" data-testid="header-menu">
                  <div className="panel-menu-module--panel--1jmDu">
                    <div className="ud-text-md panel-menu-module--gap-bottom--QEee6 panel-menu-module--no-items--14_0t">
                      Your cart is empty.
                    </div>
                    <a className="ud-heading-sm" data-testid="header-shopping-cta" href="/">
                      Keep shopping
                    </a>
                  </div>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    width="804"
                    height="149"
                    style={{ pointerEvents: 'none', position: 'absolute', top: '100%', left: '0px' }}
                  >
                    <path
                      d="M804 149V0H0Z"
                      style={{ pointerEvents: 'auto', cursor: 'pointer', fill: 'transparent' }}
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="desktop-header-module--gap-auth-button--3UCSU">
        <a
          data-purpose="header-login"
          href="https://www.udemy.com/join/login-popup/?locale=en_US&amp;response_type=html&amp;next=https%3A%2F%2Fwww.udemy.com%2F"
          className="ud-btn ud-btn-medium ud-btn-secondary ud-heading-sm"
        >
          <span>Log in</span>
        </a>
      </div>
      <div className="desktop-header-module--gap-auth-button--3UCSU">
        <a
          data-purpose="header-signup"
          href="https://www.udemy.com/join/signup-popup/?locale=en_US&amp;response_type=html&amp;next=https%3A%2F%2Fwww.udemy.com%2F"
          className="ud-btn ud-btn-medium ud-btn-primary ud-heading-sm"
        >
          <span>Sign up</span>
        </a>
      </div>
      <div className="desktop-header-module--gap-auth-button--3UCSU">
        <button
          type="button"
          className="ud-btn ud-btn-medium ud-btn-secondary ud-heading-sm ud-btn-icon ud-btn-icon-medium"
        >
          <svg
            aria-label="Choose a language"
            role="img"
            focusable="false"
            className="ud-icon ud-icon-small ud-icon-color-neutral"
          >
            {/* <use xlink:href="#icon-language"></use> */}
          </svg>
        </button>
        {/* <div className="ud-sr-only" aria-hidden="true" data-testid="seo-link-container"><a href="/"
                tabIndex="-1">English</a><a href="/de/" tabIndex="-1">Deutsch</a><a href="/es/"
                tabIndex="-1">Español</a><a href="/fr/" tabIndex="-1">Français</a><a href="/id/"
                tabIndex="-1">Bahasa Indonesia</a><a href="/it/" tabIndex="-1">Italiano</a><a href="/ja/"
                tabIndex="-1">日本語</a><a href="/ko/" tabIndex="-1">한국어</a><a href="/nl/"
                tabIndex="-1">Nederlands</a><a href="/pl/" tabIndex="-1">Polski</a><a href="/pt/"
                tabIndex="-1">Português</a><a href="/ro/" tabIndex="-1">Română</a><a href="/ru/"
                tabIndex="-1">Русский</a><a href="/th/" tabIndex="-1">ภาษาไทย</a><a href="/tr/"
                tabIndex="-1">Türkçe</a><a href="/vi/" tabIndex="-1">Tiếng Việt</a><a href="/zh-cn/"
                tabIndex="-1">中文(简体)</a><a href="/zh-tw/" tabIndex="-1">中文(繁體)</a></div>
    </div> */}
      </div>
    </div>
  );
};

export default Header;
