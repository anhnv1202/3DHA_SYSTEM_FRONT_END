import Button from '@app/components/button';
import { ImgHTMLAttributes } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import page500 from '../../../assets/images/logo/page500.png';

type Props = {};

type Page500Props = JSX.IntrinsicElements['div'];

interface CustomImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

const CustomImage: React.FC<CustomImageProps> = ({ src, alt, className, ...otherProps }) => {
  return <img src={src} className={`custom-image ${className || ''}`} {...otherProps} />;
};

const Page500: React.FC<Page500Props> = (props: Props) => {
  const { t } = useTranslation();
  return (
    <div {...props} className="min-h-screen flex items-center justify-center bg-indigo-100">
      <div className="text-center flex flex-col items-center justify-center">
        <div className=" col-md-6">
          <CustomImage alt="Custom Image" src={page500} className="img-fluid rounded" />
        </div>
        <div className=" col-md-6 my-5">
          <p className="fs-3">
            {' '}
            <span className="text-danger text-lg font-bold">{`(500) ${t('errorPage.500Messages')}`}</span>
          </p>
          <p className="lead">{t('errorPage.500Messages2')}</p>
        </div>
        <Link to="/">
          <Button
            theme="danger"
            size="m"
            label={t('errorPage.homepage')}
            width="fit-content"
            className="mx-auto px-6 text-sm block"
            labelClassName="font-bold"
          />
        </Link>
      </div>
    </div>
  );
};

export default Page500;
