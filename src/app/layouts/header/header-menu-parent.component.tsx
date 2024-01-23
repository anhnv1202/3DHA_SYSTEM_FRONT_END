import React from 'react';

type Props = {
  children: any;
  isHovered: boolean;
  setIsHovered(value: boolean): void;
};

const HeaderMenuParent = ({ children, isHovered, setIsHovered }: Props) => {
  return (
    <div
      className={`popper-module--popper-content--3cLBV desktop-header-module--dropdown--2R_M9 ${
        isHovered ? 'ud-popper-open' : ''
      }`}
      style={{ top: '100%', right: '0px' }}
      onMouseEnter={() => setIsHovered(isHovered)}
      onMouseLeave={() => setIsHovered(!isHovered)}
    >
      <div className="popper-module--animation-wrapper--2ogNt">
        <div className="popover-module--popover--1kskS popover-module--popover-bottom--N6gdN">
          <div className="popover-module--inner--Sbv-I">
            <div className="ud-header-menu desktop-header-module--menu--2f2fF" data-testid="header-menu">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMenuParent;
