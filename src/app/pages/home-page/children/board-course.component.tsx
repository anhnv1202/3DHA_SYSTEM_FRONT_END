import { useTranslation } from 'react-i18next';

type Props = {};

const BoardCourses = (props: Props) => {
  const { t } = useTranslation();
  return (
    <div className="component-margin skills-hub-unit-module--with-banner-wrapper--ReJUp" data-purpose="skills-hub-unit">
      <div className="alternate-headline-module--title-container--2ozsw">
        <div className="alternate-headline-module--title-no-margin--1bj6o">
          <h2
            id={t('homepage.boardCourses.title')}
            className="headline__main-text ud-heading-serif-xl"
            data-purpose="alternate-headline-title"
          >
            {t('homepage.boardCourses.title')}
          </h2>
        </div>
        <p className="headline__sub-text ud-text-lg alternate-headline-module--secondary-text-small-margin--1lHKT">
          {t('homepage.boardCourses.description')}
        </p>
      </div>
      <div className="tabs-module--tabs-container--f-q9T">
        <div
          className="ud-tabs-nav-buttons tabs-module--tabs-nav-buttons--1xMXh"
          role="tablist"
          data-purpose="tab-nav-buttons"
        >
          <section className="carousel-module--container--27wzs">
            <div
              className="carousel-module--scroll-port--28Dow carousel-module--grid--3Qw6j carousel-module--scroll-lock--1Ys-j"
              data-purpose="scroll-port"
              id="u60-scroll-port--3"
              aria-live="off"
            >
              {/* Default value waiting for back-end API */}
              {Array.from({ length: 10 }, (_, index) => (
                <div data-index={index} key={index} className="carousel-module--scroll-item--2CpA_">
                  <div className="ud-nav-button-container tabs-module--nav-button-container--u4wUp ud-nav-button-container-active tabs-module--active--2l5hb ">
                    <button
                      type="button"
                      id="u60-tabs--2-tab-0"
                      aria-selected="true"
                      role="tab"
                      className="ud-btn ud-btn-large ud-btn-ghost ud-heading-md ud-nav-button tabs-module--nav-button--3RilJ ud-nav-button-active tabs-module--active--2l5hb"
                      tabIndex={index}
                    >
                      <span>Python</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
        {/* Default value waiting for back-end API */}
        <div className="ud-tab-content tabs-module--tab-content--30h0i tabs-module--active--2l5hb">
          <div className="skills-hub-unit-module--with-banner-container--2bY2M">
            <div className="skills-hub-banner-module--banner-wrapper--3mMXv">
              <div className="skills-hub-banner-module--content--3hiCl">
                <h2 className="ud-heading-xl skills-hub-banner-module--tagline--2ysos">
                  Giúp bạn có thêm cơ hội nghề nghiệp với Python
                </h2>
                <p className="ud-text-md skills-hub-banner-module--description--3UhH3"></p>
              </div>
              <a href="/vi/topic/python/" className="ud-btn ud-btn-medium ud-btn-secondary ud-heading-sm">
                <span>Khám phá Python</span>
              </a>
            </div>
            <div>
              <section aria-label="Carousel" className="carousel-module--container--27wzs">
                <div
                  className="course-unit-module--grid--14QSU carousel-module--scroll-port--28Dow carousel-module--grid--3Qw6j carousel-module--scroll-lock--1Ys-j"
                  data-purpose="scroll-port"
                  data-testid="course-unit-carousel"
                  id="course-unit-container-Python"
                  aria-live="polite"
                ></div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardCourses;
