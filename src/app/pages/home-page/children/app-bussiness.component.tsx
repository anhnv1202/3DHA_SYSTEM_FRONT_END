import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

type Props = {};

const AppBussiness = (props: Props) => {
  const { t } = useTranslation();
  return (
    <div className="component-margin">
      <section className="component-margin non-student-cta--non-student-cta-wrapper--2Nikm non-student-cta--non-student-cta-wrapper-reversed--3JLTZ">
        <div className="non-student-cta--non-student-cta-bg--1okkJ">
          <div className="non-student-cta--non-student-cta-content-wrapper--26uBA">
            <img
              className="non-student-cta--non-student-cta-image--7Y7Ul non-student-cta--on-desktop--2bk9D"
              src="https://s.udemycdn.com/home/non-student-cta/UB_Promo_800x800.jpg"
              alt=""
              width="400"
              height="400"
              loading="lazy"
            />
            <div className="non-student-cta--non-student-cta--2quSb">
              <img
                className="non-student-cta--non-student-cta__header--3xgVp"
                src="https://www.udemy.com/staticx/udemy/images/v7/logo-ub.svg"
                alt="Udemy Business"
                width="192"
                height="32"
                loading="lazy"
              />
              <h3 className="ud-heading-serif-xl non-student-cta--non-student-cta__header--3xgVp">
                {t('homepage.appBussiness.title')}
              </h3>
              <div className="ud-text-md non-student-cta--non-student-cta__content--3D827">
                <ul className="ud-unstyled-list ud-block-list">
                  {/* Default value waiting for back-end API */}
                  {Array.from({ length: 3 }).map((_, index) => (
                    <li key={index}>
                      <div className="ud-text-lg ud-block-list-item ud-block-list-item-large ud-block-list-item-tight ud-block-list-item-neutral ud-text-md">
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          className="ud-icon ud-icon-small ud-icon-color-neutral ud-block-list-item-icon"
                        ></svg>
                        <div className="ud-block-list-item-content">
                          {t(`homepage.appBussiness.description-${index + 1}`)}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="non-student-cta--ctas-container--1alXW">
                <div className="non-student-cta--non-student-cta__link--1Ujpk">
                  <Link
                    to="/udemy-business/request-demo-mx/?ref=ufb_home-body--variant-101202&amp;utm_type=mx&amp;utm_method=0&amp;user_type=visitor&amp;locale=vi_VN"
                    className="ud-btn ud-btn-large ud-btn-primary ud-heading-md"
                  >
                    <span>{t('homepage.appBussiness.buttonGet')}</span>
                  </Link>
                </div>
                <div className="non-student-cta--non-student-cta__link--1Ujpk">
                  <Link
                    to="/udemy-business/why-udemy-business/?ref=ufb_home-body--variant-101202&amp;locale=vi_VN"
                    className="ud-btn ud-btn-large ud-btn-secondary ud-heading-md"
                  >
                    <span>{t('homepage.appBussiness.buttonLearnMore')}</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AppBussiness;
