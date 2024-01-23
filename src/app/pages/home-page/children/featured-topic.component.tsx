import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

type Props = {};

const FeaturedTopic = (props: Props) => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="component-margin logged-out-home-page--background-pale--3fBab">
        <section className="ud-container trending-topics--section--3P7Fy">
          <h2 className="ud-heading-xl trending-topics--section-title--2bfDM">{t('homepage.featuredTopic.title')}</h2>
          <div className="trending-topics--container--dK887">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="trending-topics--category--3sEMw">
                <h3 className="ud-heading-md trending-topics--title--FqFOZ" data-purpose="category-title">
                  Development
                </h3>
                <div>
                  <div className="trending-topics--topic--2pYSR">
                    <div>
                      <a href="/topic/python/" className="trending-topics--link--1B3Cq">
                        Python
                      </a>
                    </div>
                    <div className="trending-topics--count--zZ-EO" data-purpose="count">
                      36,354,994 learners
                    </div>
                  </div>
                  <div className="trending-topics--topic--2pYSR">
                    <div>
                      <a href="/topic/web-development/" className="trending-topics--link--1B3Cq">
                        Web Development
                      </a>
                    </div>
                    <div className="trending-topics--count--zZ-EO" data-purpose="count">
                      11,415,615 learners
                    </div>
                  </div>
                  <div className="trending-topics--topic--2pYSR">
                    <div>
                      <a href="/topic/machine-learning/" className="trending-topics--link--1B3Cq">
                        Machine Learning
                      </a>
                    </div>
                    <div className="trending-topics--count--zZ-EO" data-purpose="count">
                      7,070,015 learners
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <Link
              to={'/featured-topics/'}
              className="ud-btn ud-btn-medium ud-btn-secondary ud-heading-sm trending-topics--cta--25YnP"
            >
              <span>{t('homepage.featuredTopic.linkLabel')}</span>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FeaturedTopic;
