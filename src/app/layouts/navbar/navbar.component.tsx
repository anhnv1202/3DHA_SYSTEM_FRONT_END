import Button from '@app/components/button';
import { NavbarLink } from '@app/types/helper';
import { Images } from '@assets/images';
import { useState } from 'react';
import { Link } from 'react-router-dom';

type Props = { navbarComponent: NavbarLink[] };

function Navbar({ navbarComponent }: Props) {
  const navbarLinksLength: boolean = navbarComponent.length > 11;
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };
  return (
    <nav className="subcategory-link-bar--subcategory-link-bar--24CSR">
      {/* Displaying components with positions less than 10 */}
      <ul className="ud-unstyled-list subcategory-link-bar--nav-list--2qrtK" data-purposes="nav-list">
        {navbarComponent.slice(0, 11).map((link, index) => {
          if (index === 0) {
            return (
              <li className="subcategory-link-bar--category-wrapper--2LM4C" key={index}>
                <Link
                  className="ud-btn ud-btn-medium ud-btn-ghost ud-heading-sm link-bar--nav-button--2HG6f"
                  to={link.path}
                >
                  <span className="ud-text-sm subcategory-link-bar--category--m9LeC">{link.name}</span>
                </Link>
                <img
                  src="https://s.udemycdn.com/browse_components/link-bar/large-next.svg"
                  width="18"
                  height="56"
                  className="subcategory-link-bar--large-next-icon--15V3W"
                  alt="Mũi tên trỏ đến đường liên kết menu thể loại con"
                  loading="lazy"
                />
              </li>
            );
          }
          return (
            <li key={index}>
              <Link
                className="ud-btn ud-btn-medium ud-btn-ghost ud-heading-sm link-bar--nav-button--2HG6f"
                to={link.path}
              >
                <span className="ud-text-sm subcategory-link-bar--subcategory--3tEKQ">{link.name}</span>
              </Link>
            </li>
          );
        })}
      </ul>

      {/* 
        Display the BsThreeDotsVertical icon when the length of the links array is too long,
        allowing users to expand and view more.
      */}
      {navbarLinksLength && (
        <div className="popper-module--popper--2BpLn">
          <Button
            type="button"
            className="ud-btn ud-btn-medium ud-btn-ghost ud-heading-sm ud-btn-icon ud-btn-icon-medium ud-link-neutral subcategory-link-bar--dropdown--13O79"
            label=""
            theme="normal"
            onClick={toggleDropdown}
          >
            <Images.BsThreeDotsVertical
              aria-label="Đường liên kết menu thể loại con khác"
              role="img"
              focusable="false"
              className="ud-icon ud-icon-small"
            ></Images.BsThreeDotsVertical>
          </Button>
          <div
            className={`popper-module--popper-content--3cLBV ud-popover-dropdown-menu ${
              isDropdownVisible ? 'visible' : ''
            }`}
            id="u15-popper-content--2"
            aria-labelledby="u15-popper-trigger--1"
            style={{ top: '100%', right: '1rem' }}
          >
            <div className="popper-module--animation-wrapper--2ogNt">
              <div className="popover-module--popover--1kskS popover-module--popover-bottom--N6gdN">
                <div className="popover-module--inner--Sbv-I">
                  <ul className="ud-unstyled-list ud-block-list subcategory-link-bar--popover-content--3IQ8q">
                    {navbarComponent.slice(10).map((link, index) => (
                      <li key={index}>
                        <Link
                          to={link.path}
                          className="ud-btn ud-btn-large ud-btn-ghost ud-text-sm subcategory-link-bar--subcategory-in-dropdown--hdpz8 ud-block-list-item ud-block-list-item-small ud-block-list-item-link"
                        >
                          <div className="ud-block-list-item-content">{link.name}</div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
