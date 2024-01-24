import { Images } from '@assets/images';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

type Props = {};
const data = {
  authorName: 'John',
  authorUrlProfile: '/user/joseportilla/',
  relatedCoureByAuthor: [
    {
      courName:
        'The Complete Python Bootcamp From Zero to Hero in PythonLearn Python like a Professional Start from the basics and go all the way to creating your own applications and gamesRating: 4.6 out of 5492340 reviews22 total hours156 lecturesAll LevelsCurrent price: ₫1,999,000',
      courseImg:
        'https://play-lh.googleusercontent.com/DXwvOFxp_F8N9jw4FW8kCD0SWj8ba9YqDmMPphgkoG7qqEET_yV3vxuQcVcWQJkHX18=w240-h480-rw',
      courseUrl: '/course/complete-python-bootcamp',
      courseRating: '4.6',
      courseReviewed: '492,340',
      coursePrice: '1,999,999',
    },
    {
      courName:
        'The Complete Python Bootcamp From Zero to Hero in PythonLearn Python like a Professional Start from the basics and go all the way to creating your own applications and gamesRating: 4.6 out of 5492340 reviews22 total hours156 lecturesAll LevelsCurrent price: ₫1,999,000',
      courseImg:
        'https://play-lh.googleusercontent.com/DXwvOFxp_F8N9jw4FW8kCD0SWj8ba9YqDmMPphgkoG7qqEET_yV3vxuQcVcWQJkHX18=w240-h480-rw',
      courseUrl: '/course/complete-python-bootcamp',
      courseRating: '4.6',
      courseReviewed: '492,340',
      coursePrice: '1,999,999',
    },
    {
      courName:
        'The Complete Python Bootcamp From Zero to Hero in PythonLearn Python like a Professional Start from the basics and go all the way to creating your own applications and gamesRating: 4.6 out of 5492340 reviews22 total hours156 lecturesAll LevelsCurrent price: ₫1,999,000',
      courseImg:
        'https://play-lh.googleusercontent.com/DXwvOFxp_F8N9jw4FW8kCD0SWj8ba9YqDmMPphgkoG7qqEET_yV3vxuQcVcWQJkHX18=w240-h480-rw',
      courseUrl: '/course/complete-python-bootcamp',
      courseRating: '4.6',
      courseReviewed: '492,340',
      coursePrice: '1,999,999',
    },
  ],
};
const RelatedCourseByInstructor = (props: Props) => {
  const { t } = useTranslation();
  return (
    <>
      <div className="component-margin">
        <div data-purpose="more-from-instructors-app">
          <div className="styles--more-from-instructor--2avsV">
            <h2
              className="ud-heading-xl"
              data-purpose="safely-set-inner-html:more-courses-by-instructor:more-courses-link"
            >
              {t('courseDetail.moreCourseBy')} <Link to={data.authorUrlProfile}>{data.authorName}</Link>
            </h2>
            <section aria-label="Carousel" className="carousel-module--container--27wzs">
              <div
                className="styles--desktop-container--29uOP carousel-module--scroll-port--28Dow carousel-module--scroll-lock--1Ys-j"
                data-purpose="scroll-port"
                id="u110-scroll-port--80"
                aria-live="polite"
              >
                {data.relatedCoureByAuthor.map((item, index) => (
                  <div data-index={index} className="carousel-module--scroll-item--2CpA_" key={index}>
                    <div className="course-card-module--container--2MTsr course-card-module--medium--3qi9R">
                      <div className="course-card-module--image-container--20x0M">
                        <img
                          src={item.courseImg}
                          alt=""
                          className="course-card-image-module--image--3V2QD course-card-module--course-image--2Pg51 browse-course-card-module--image--2J_eC"
                          width="240"
                          height="135"
                          loading="lazy"
                        />
                      </div>
                      <div className="course-card-module--main-content--3Uvsz course-card-module--has-price-text--3EF7y">
                        <div>
                          <div className="course-card-title-module--title--2C6ac">
                            <h3 className="ud-heading-md course-card-title-module--course-title--3k0w_">
                              <Link to={item.courseUrl}>{item.courName}</Link>
                            </h3>
                          </div>
                        </div>
                        <div className="ud-text-xs">
                          <div className="course-card-instructors-module--instructor-list--37tO6">
                            {data.authorName}
                          </div>
                        </div>
                        <div className="course-card-ratings-module--row--1EHHW">
                          <span className="star-rating-module--star-wrapper--VHfnS star-rating-module--medium--3kDsb">
                            <span className="ud-heading-sm star-rating-module--rating-number--2xeHu">
                              {item.courseRating}
                            </span>
                            <Images.IoMdStar color="yellow" width={'none'} />
                            <Images.IoMdStar color="yellow" width={'none'} />
                            <Images.IoMdStar color="yellow" width={'none'} />
                            <Images.IoMdStar color="yellow" width={'none'} />
                            <Images.IoMdStarHalf color="yellow" width={'none'} />
                          </span>
                          <span
                            aria-label="492340 reviews"
                            className="ud-text-xs course-card-ratings-module--reviews-text--1z047"
                          >
                            ({item.courseReviewed})
                          </span>
                        </div>
                        <div className="course-card-module--price-text-container--2oBPb">
                          <div className="base-price-text-module--container--2P5fs course-card-module--price-text-base-price-text-component--sHBbm">
                            <div className="base-price-text-module--price-part--3AFBv course-card-module--price-text-base-price-text-component-discount-price--2VEcP ud-heading-md">
                              <span>
                                <span>{item.coursePrice}</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default RelatedCourseByInstructor;
