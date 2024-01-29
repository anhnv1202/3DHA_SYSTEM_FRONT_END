import { Images } from '@assets/images';
import { Link } from 'react-router-dom';
import { PATHS as path } from '../../common/constants/common.const';
import { useTranslation } from 'react-i18next';
import Button from '@app/components/button';
type Props = {};

const UnLoggedInHeader = (props: Props) => {
  const { t } = useTranslation();
  const unLoggedHeaderData = [
    {
      path: path.LOGIN,
      title: t('header.login'),
    },
    {
      path: path.REGISTER,
      title: t('header.register'),
    },
    {
      path: '',
      title: Images.TfiWorld,
    },
  ];
  return (
    <>
      {unLoggedHeaderData.map((item, index) => (
        <div className="desktop-header-module--gap-auth-button--3UCSU" key={index}>
          {index !== 2 ? (
            <Link
              to={item.path}
              className={`ud-btn ud-btn-medium ${index === 0 ? 'ud-btn-secondary' : 'ud-btn-primary'} ud-heading-sm`}
            >
              <span>{item.title as string}</span>
            </Link>
          ) : (
            <Button
              label=""
              className="ud-btn ud-btn-medium ud-btn-secondary ud-heading-sm ud-btn-icon ud-btn-icon-medium"
            >
              <item.title role="img" focusable="false" className="ud-icon ud-icon-small ud-icon-color-neutral" />
            </Button>
          )}
        </div>
      ))}
    </>
  );
};

export default UnLoggedInHeader;
