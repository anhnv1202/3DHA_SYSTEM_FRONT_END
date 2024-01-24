import { useTranslation } from 'react-i18next';

type Props = {};

const PartnerBanner = (props: Props) => {
  const { t } = useTranslation();
  return (
    <div className="component-margin logged-out-home-page--partners-banner--1xsAv" data-purpose="partners-banner">
      <div className="ud-container">
        <div className="partners-banner-module--wrapper--2-SKh">
          <div className="partners-banner-module--content--bYVF_">
            <h2 className="partners-banner-module--heading--21OVA">{t('homepage.partnerBanner.title')}</h2>
            <ul className="ud-unstyled-list partner-logos-module--list--2hIZ_">
              {Array.from({ length: 7 }).map((_, index) => (
                <li className="partner-logos-module--item--1KtIF" key={index}>
                  <img
                    src="https://s.udemycdn.com/partner-logos/ou-v1/ericsson.svg"
                    alt="Ericsson logo"
                    width="55"
                    height="48"
                    loading="lazy"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerBanner;
