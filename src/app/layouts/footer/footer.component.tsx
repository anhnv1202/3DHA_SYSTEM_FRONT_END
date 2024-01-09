import { socialMediaLinks } from '@app/common/constants/const';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-black text-white p-8 flex justify-between">
      <div>
        <div className="flex items-center space-x-4">
          {socialMediaLinks.map((socialMedia, index) => (
            <Link key={index} to={socialMedia.link} className="text-white">
              {socialMedia.icon}
            </Link>
          ))}
        </div>
        <div className="mt-4">
          <ul className="flex space-x-4">
            {socialMediaLinks.map((socialMedia, index) => (
              <li>
                <Link key={index} to={socialMedia.link} className="text-white">
                  {socialMedia.platform}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <h2 className="mt-5 text-medium items-center">{t('footer.contact')}</h2>
      </div>
    </div>
  );
};

export default Footer;
