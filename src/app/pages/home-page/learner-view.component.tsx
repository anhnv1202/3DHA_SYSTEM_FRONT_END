import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

type Props = {};

const courseData = [
  {
    title: 'AWS Cloud for beginner (Vietnamese)',
    instructor: 'Linh Nguyen',
    rating: 4.8,
    reviews: 326,
    price: '₫ 1.699.000',
    imageUrl: 'https://img-b.udemycdn.com/course/240x135/5246952_37c4.jpg',
    bestseller: true,
    url: '/course/aws-cloud-for-beginner-vietnamese/',
  },
  {
    title: 'AWS Cloud for beginner (Vietnamese)',
    instructor: 'Linh Nguyen',
    rating: 4.8,
    reviews: 326,
    price: '₫ 1.699.000',
    imageUrl: 'https://img-b.udemycdn.com/course/240x135/5246952_37c4.jpg',
    bestseller: true,
    url: '/course/aws-cloud-for-beginner-vietnamese/',
  },
  {
    title: 'AWS Cloud for beginner (Vietnamese)',
    instructor: 'Linh Nguyen',
    rating: 4.8,
    reviews: 326,
    price: '₫ 1.699.000',
    imageUrl: 'https://img-b.udemycdn.com/course/240x135/5246952_37c4.jpg',
    bestseller: true,
    url: '/course/aws-cloud-for-beginner-vietnamese/',
  },
];
const LearnView = (props: Props) => {
  const { t } = useTranslation();
  return (
    <div className="component-margin">
      <div className="unit-title-module--container--1G8qj unit-title-module--has-title--1ks39">
        <div className="unit-title-module--title-container--CB4bW">
          <h2
            className="ud-heading-xl unit-title-module--title--3dA63"
            data-us="0"
            data-purpose="discovery-unit-1152523765"
          >
            {t('homepage.learnerView.title')}
          </h2>
        </div>
      </div>
      <section aria-label="Carousel" className="carousel-module--container--27wzs">
        <div className="course-unit-module--grid--14QSU carousel-module--scroll-port--28Dow carousel-module--grid--3Qw6j carousel-module--scroll-lock--1Ys-j">
          {courseData.map((course, index) => (
            <div key={index} data-index={index} className="carousel-module--scroll-item--2CpA_">
              <div className="course-details-quick-view-box-module--full-height--3Wjuv">
                <div className="popper-module--popper--2BpLn course-details-quick-view-box-module--full-height--3Wjuv">
                  <div className="course-details-quick-view-box-module--full-height--3Wjuv">
                    <div className="course-unit-module--course-card--2eW8u course-card-module--container--2MTsr course-card-module--medium--3qi9R">
                      <div className="course-card-module--image-container--20x0M">
                        <img
                          src={course.imageUrl}
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
                            <h3
                              data-purpose="course-title-url"
                              className="ud-heading-md course-card-title-module--course-title--3k0w_"
                            >
                              <Link to={course.url}>{course.title}</Link>
                            </h3>
                          </div>
                        </div>
                        <div className="ud-text-xs">
                          <div
                            className="course-card-instructors-module--instructor-list--37tO6"
                            data-purpose="safely-set-inner-html:course-card:visible-instructors"
                            data-testid="safely-set-inner-html:course-card:visible-instructors"
                          >
                            {course.instructor}
                          </div>
                        </div>
                        <div className="course-card-ratings-module--row--1EHHW">
                          <span className="star-rating-module--star-wrapper--VHfnS star-rating-module--medium--3kDsb">
                            <span
                              className="ud-heading-sm star-rating-module--rating-number--2xeHu"
                              aria-hidden="true"
                              data-purpose="rating-number"
                            >
                              {course.rating}
                            </span>
                          </span>
                          <span className="ud-text-xs course-card-ratings-module--reviews-text--1z047">
                            ( {course.reviews})
                          </span>
                        </div>
                        <div className="course-card-module--price-text-container--2oBPb">
                          <div className="base-price-text-module--container--2P5fs course-card-module--price-text-base-price-text-component--sHBbm">
                            <div className="base-price-text-module--price-part--3AFBv course-card-module--price-text-base-price-text-component-discount-price--2VEcP ud-heading-md">
                              <span>
                                <span>₫&nbsp;{course.price}</span>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="course-card-module--badges-container--2ENVp">
                          <div className="course-card-badges-module--course-badges--1RKli">
                            <div className="ud-badge ud-heading-xs course-badges-module--bestseller--2k308">
                              {t('homepage.learnerView.carousel.bestseller')}
                            </div>
                          </div>
                        </div>
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
  );
};

export default LearnView;
