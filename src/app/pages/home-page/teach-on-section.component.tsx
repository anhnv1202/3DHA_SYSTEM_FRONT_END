import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

type Props = {};

const TeachOnSection = (props: Props) => {
  const { t } = useTranslation();
  return (
    <section className="component-margin non-student-cta--non-student-cta-wrapper--2Nikm">
      <div className="non-student-cta--non-student-cta-bg--1okkJ">
        <div className="non-student-cta--non-student-cta-content-wrapper--26uBA">
          <img
            className="non-student-cta--non-student-cta-image--7Y7Ul non-student-cta--on-mobile--18vY3"
            src="https://s.udemycdn.com/home/non-student-cta/instructor-mobile-v3.jpg"
            alt=""
            width="600"
            height="450"
            loading="lazy"
          />
          <img
            className="non-student-cta--non-student-cta-image--7Y7Ul non-student-cta--on-desktop--2bk9D"
            src="https://s.udemycdn.com/home/non-student-cta/instructor-1x-v3.jpg"
            alt=""
            width="400"
            height="400"
            loading="lazy"
          />
          <div className="non-student-cta--non-student-cta--2quSb">
            <h3 className="ud-heading-serif-xl non-student-cta--non-student-cta__header--3xgVp">
              {t('homepage.teachOn.title')}
            </h3>
            <div className="ud-text-md non-student-cta--non-student-cta__content--3D827">
              {t('homepage.teachOn.description')}
            </div>
            <div className="non-student-cta--ctas-container--1alXW">
              <div className="non-student-cta--non-student-cta__link--1Ujpk">
                <Link
                  to="https://www.udemy.com/teaching/?ref=teach_home-body"
                  className="ud-btn ud-btn-large ud-btn-primary ud-heading-md"
                >
                  <span> {t('homepage.teachOn.buttonStart')}y</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeachOnSection;
