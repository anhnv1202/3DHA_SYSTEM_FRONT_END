import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

type Page404Props = JSX.IntrinsicElements['div'];

const Page404: React.FC<Page404Props> = (props) => {
  const { t } = useTranslation();

  return (
    <div {...props} className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1>{`(404) ${t('errorPage.404Messages')}`}</h1>
        <Link to="/">
          <button className="bg-transparent border-none p-0 font-bold underline cursor-pointer">
            Trở lại trang chủ
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Page404;
