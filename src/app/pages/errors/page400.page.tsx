import Button from '@app/components/button';
import page400 from '@assets/images/logo/page400.png';
import { ImgHTMLAttributes } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

type Props = {};

type Page500Props = JSX.IntrinsicElements['div'];

interface CustomImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

const CustomImage: React.FC<CustomImageProps> = ({ src, alt, className, ...otherProps }) => {
  return <img src={src} className={`custom-image ${className || ''}`} {...otherProps} />;
};

const Page400: React.FC<Page500Props> = (props: Props) => {
  const { t } = useTranslation();
  return (
    <div {...props} className="min-h-screen flex items-center justify-center bg-indigo-100">
      <div className="text-center flex flex-col items-center justify-center">
        <div className=" col-md-6">
          <CustomImage alt="Custom Image" src={page400} className="img-fluid rounded h-150 w-150" />
        </div>
        <div className=" col-md-6 my-5">
          <p className="fs-3">
            {' '}
            <span className="text-danger text-lg font-bold">{`(404) ${t('errorPage.404Messages')}`}</span>
          </p>
          <p className="lead">{t('errorPage.404Messages2')}</p>
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

export default Page400;
