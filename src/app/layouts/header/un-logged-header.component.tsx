import { Images } from '@assets/images';
import { Link } from 'react-router-dom';
import { PATHS as path } from '../../common/constants/common.const';
import { useTranslation } from 'react-i18next';
import Button from '@app/components/button';
type Props = {};

const UnLoggedInHeader = (props: Props) => {
  const { t } = useTranslation();

  return (
    <>
      <div className="popper-module--popper--2BpLn">
        <Link
          to={path.CART}
          tabIndex={0}
          className="ud-btn ud-btn-large ud-btn-ghost ud-heading-md ud-btn-icon ud-btn-icon-large js-header-button desktop-header-module--dropdown-button--4lqEc"
        >
          <Images.CiShoppingCart role="img" className="ud-icon ud-icon-medium ud-icon-color-neutral" />
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
        <Button label="" className="ud-btn ud-btn-medium ud-btn-secondary ud-heading-sm ud-btn-icon ud-btn-icon-medium">
          <Images.TfiWorld
            role="img"
            focusable="false"
            className="ud-icon ud-icon-small ud-icon-color-neutral"
          ></Images.TfiWorld>
        </Button>
      </div>
    </>
  );
};

export default UnLoggedInHeader;
