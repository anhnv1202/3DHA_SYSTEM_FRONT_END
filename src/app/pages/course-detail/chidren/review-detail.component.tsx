import { Images } from '@assets/images';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

type Props = {};

const reviewCourseTitle = [
  { id: 0, title: "What you'll learn" },
  { id: 1, title: 'Course content' },
  { id: 2, title: ' Reviews' },
  { id: 3, title: 'Instructors' },
];
const reviewData = [
  {
    titleId: 0,
    detail: [
      'Understand how to use the ChatGPT Interface',
      'Comprehend advanced Prompt Engineering Techniques.',
      'Use ChatGPT to generate code to completely automate tasks.',
      'Leverage ChatGPT Plugins to supercharge ChatGPT powers!',
      'Learn to use the latest techniques with the ChatGPT Plus Code Interpreter',
    ],
  },
  {
    titleId: 1,
    detail: {
      requirements: ['ChatGPT Plus Subscription is required to follow along with all the examples in the course.'],
      description:
        'Step into the world of ChatGPT and unravel its mysteries. Whether you’re a developer, content creator, or a curious tech enthusiast, this Udemy course is designed to offer a comprehensive overview of ChatGPT, from its basic setup to advanced functionalities.',
      courseFor: ['Anyone curious about maximizing the utility of the powerful AI ChatGPT!'],
    },
  },
  {
    titleId: 2,
    detail: {
      studentFeedback: {
        totalRating: '4.5',
        fiveStarRating: 46,
        fourStarRating: 3,
        threeStarRating: 13,
        twoStarRating: 2,
        oneStarRating: 1,
      },
      reviews: [
        {
          userName: 'Steve E.',
          userAvatar: 'https://img-b.udemycdn.com/user/50x50/213875932_af60.jpg',
          userRatingStar: 5,
          userRatingTime: 'a month ago',
          userReview:
            'Great course!! Very brief and concise. Everything is explained to detail. Great for those who want to know GPT better!!',
        },
        {
          userName: 'Steve E.',
          userAvatar: 'https://img-b.udemycdn.com/user/50x50/213875932_af60.jpg',
          userRatingStar: 5,
          userRatingTime: 'a month ago',
          userReview:
            'Great course!! Very brief and concise. Everything is explained to detail. Great for those who want to know GPT better!!',
        },
        {
          userName: 'Steve E.',
          userAvatar: 'https://img-b.udemycdn.com/user/50x50/213875932_af60.jpg',
          userRatingStar: 5,
          userRatingTime: 'a month ago',
          userReview:
            'Great course!! Very brief and concise. Everything is explained to detail. Great for those who want to know GPT better!!',
        },
        {
          userName: 'Steve E.',
          userAvatar: 'https://img-b.udemycdn.com/user/50x50/213875932_af60.jpg',
          userRatingStar: 5,
          userRatingTime: 'a month ago',
          userReview:
            'Great course!! Very brief and concise. Everything is explained to detail. Great for those who want to know GPT better!!',
        },
      ],
    },
  },
  {
    titleId: 3,
    detail: {
      instructorName: 'Jose Portilla',
      instructorAvatar: 'https://img-b.udemycdn.com/user/200_H/9685726_67e7_4.jpg',
      instructorJob: 'Head of Data Science at Pierian Training',
      instructorRating: '4,6',
      instructorReviewed: '1,128,422',
      instructorStudents: '3,693,422',
      instructorCourses: 78,
      instructorDescription:
        'Jose Marcial Portilla has a BS and MS in Mechanical Engineering from Santa Clara University and years of experience as a professional instructor and trainer for Data Science, Machine Learning and Python Programming. He has publications and patents in various fields such as microfluidics, materials science, and data science. Over the course of his career he has developed a skill set in analyzing data and he hopes to use his experience in teaching and data science to help other people learn the power of programming, the ability to analyze data, and the skills needed to present the data in clear and beautiful visualizations. Currently he works as the Head of Data Science for Pierian Training and provides in-person data science and python programming training courses to employees working at top companies, including General Electric, Cigna, SalesForce, Starbucks, McKinsey and many more. Feel free to check out the website link to find out more information about training offerings.',
    },
  },
];
const options = {
  WHAT_WILL_LEARN: 0,
  COURSE_CONTENT: 1,
  REVIEWS: 2,
  INSTRUCTOR: 3,
};
const ReviewCourseDetail = (props: Props) => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);

  const getReviewData = (id: number): string[] | { [key: string]: any } | undefined => {
    const foundReview = reviewData.find((item) => item.titleId === id);

    if (foundReview) {
      return foundReview?.detail;
    }
    return undefined;
  };

  const handleChangeDetail = (index: number) => {
    setActiveIndex(index);
  };
  return (
    <>
      <div className="component-margin">
        <div className="tabs-module--tabs-container--f-q9T">
          <div className="ud-tabs-nav-buttons tabs-module--tabs-nav-buttons--1xMXh">
            <section className="carousel-module--container--27wzs">
              <div className="carousel-module--scroll-port--28Dow carousel-module--grid--3Qw6j carousel-module--scroll-lock--1Ys-j">
                {reviewCourseTitle.map((data, index) => (
                  <div key={index} data-index={data.id} className="carousel-module--scroll-item--2CpA_">
                    <div
                      className={`ud-nav-button-container tabs-module--nav-button-container--u4wUp ${
                        index === activeIndex ? 'ud-nav-button-container-active tabs-module--active--2l5hb' : ''
                      } `}
                    >
                      <button
                        className={`ud-btn ud-btn-large ud-btn-ghost ud-heading-md ud-nav-button tabs-module--nav-button--3RilJ ${
                          index === activeIndex ? 'ud-nav-button-container-active tabs-module--active--2l5hb' : ''
                        } `}
                        onClick={() => handleChangeDetail(data.id)}
                      >
                        {data.title}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
          <div
            className={`ud-tab-content tabs-module--tab-content--30h0i  ${
              activeIndex === options.WHAT_WILL_LEARN ? 'tabs-module--active--2l5hb' : ''
            }`}
          >
            <div>
              <div className="generic-course-content-tabs--content-container--qbsUQ">
                {getReviewData(options.WHAT_WILL_LEARN)?.map((item: any) => (
                  <div className="objective--objective-item--AHk7S">
                    <div className="objective--objective-tick-icon--16juj">
                      <svg aria-hidden="true" focusable="false" className="ud-icon ud-icon-small ud-icon-color-neutral">
                        <Images.TiTick />
                      </svg>
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div
            className={`ud-tab-content tabs-module--tab-content--30h0i  ${
              activeIndex === options.COURSE_CONTENT ? 'tabs-module--active--2l5hb' : ''
            }`}
          >
            <div data-purpose="content-container-wrapper">
              <div className="generic-course-content-tabs--content-container--qbsUQ">
                <div className="component-margin">
                  <h2 className="ud-heading-xl requirements--title--2wsPe">Requirements</h2>
                  <ul className="ud-unstyled-list ud-block-list">
                    {(getReviewData(options.COURSE_CONTENT) as any)?.requirements.map((item: any) => (
                      <li>
                        <div className="ud-block-list-item ud-block-list-item-small ud-block-list-item-tight ud-block-list-item-neutral ud-text-sm">
                          <div className="ud-block-list-item-content">{item}</div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="course-content-tabs--section-spacing--2f-2t">
                  <div
                    className="ud-text-sm component-margin styles--description--33-vq"
                    data-purpose="course-description"
                  >
                    <h2 data-purpose="description-title" className="ud-heading-xl styles--description__header--2Z7Vb">
                      {t('courseDetail.moreCourseBy')}
                    </h2>
                    <div className="show-more-module--container--2QPRN">
                      <div
                        className="show-more-module--content--cjTh0 show-more-module--with-gradient--1ZDrA"
                        style={{ maxHeight: '22.1rem' }}
                      >
                        <div>
                          <div>
                            <p>
                              <strong>{(getReviewData(options.COURSE_CONTENT) as any).description}</strong>
                            </p>
                          </div>
                          <div className="styles--audience--2xuzW" data-purpose="target-audience">
                            <h2 className="ud-heading-xl styles--audience__title--1qhlO">Who this course is for:</h2>
                            <ul className="styles--audience__list--16EaN">
                              {(getReviewData(options.COURSE_CONTENT) as any).courseFor.map((item: any) => (
                                <li>{item}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`ud-tab-content tabs-module--tab-content--30h0i  ${
              activeIndex === options.REVIEWS ? 'tabs-module--active--2l5hb' : ''
            }`}
          >
            <div data-purpose="content-container-wrapper" className="">
              <div className="generic-course-content-tabs--content-container--qbsUQ">
                <div>
                  <div className="component-margin">
                    <span id="reviews" className="in-page-offset-anchor"></span>
                    <div data-purpose="course-reviews" data-client-side-render-only="CSR: component">
                      <h2 className="ud-heading-xl reviews-section--title--3syaA">Student feedback</h2>
                      <div data-purpose="ratings-and-reviews">
                        <div className="reviews-section--stats-container--1s7am">
                          <div data-purpose="ratings-and-reviews">
                            <div className="review-summary-widget--stats-container--j-BdX">
                              <div className="ud-text-md review-summary-widget--average-container--2Z2LJ">
                                <div
                                  data-purpose="average-rating"
                                  className="ud-heading-xxxl review-summary-widget--average-number--26or6"
                                >
                                  4.6
                                </div>
                                <div className="review-summary-widget--average-stars--1SYQg">
                                  <span className="star-rating-module--star-wrapper--VHfnS star-rating-module--large--22lCK">
                                    <span className="ud-sr-only">Rating: 4.5692496 out of 5</span>
                                    <Images.IoMdStar color="yellow" width={'none'} />
                                    <Images.IoMdStar color="yellow" width={'none'} />
                                    <Images.IoMdStar color="yellow" width={'none'} />
                                    <Images.IoMdStar color="yellow" width={'none'} />
                                    <Images.IoMdStarHalf color="yellow" width={'none'} />
                                  </span>
                                </div>
                                <p className="ud-heading-lg review-summary-widget--average-rating-text--3qLe4">
                                  Course Rating
                                </p>
                              </div>
                              <div className="review-summary-widget--rates--2gRFH review-summary-widget--with-average-rating--1recA">
                                <button
                                  type="button"
                                  data-purpose="rate-gauge-5"
                                  aria-pressed="false"
                                  className="ud-btn ud-btn-small ud-btn-link ud-heading-xs review-summary-widget--rates-row--3unBU"
                                >
                                  <span className="review-summary-widget--rate-gauge--2yKOU">
                                    <span className="review-summary-widget--rate-gauge--bg--1x5Ut">
                                      <span
                                        className="review-summary-widget--rate-gauge--fill--Brz9v"
                                        style={{ width: '57%' }}
                                      ></span>
                                    </span>
                                  </span>
                                  <span className="star-rating-module--star-wrapper--VHfnS star-rating-module--large--22lCK">
                                    <span className="ud-sr-only">Rating: 5 out of 5</span>
                                    <Images.IoMdStar color="yellow" width={'none'} />
                                    <Images.IoMdStar color="yellow" width={'none'} />
                                    <Images.IoMdStar color="yellow" width={'none'} />
                                    <Images.IoMdStar color="yellow" width={'none'} />
                                    <Images.IoMdStar color="yellow" width={'none'} />
                                  </span>
                                  <span className="ud-text-sm review-summary-widget--rate-percent--1VwG5">
                                    <span data-purpose="percent-label">57%</span>
                                  </span>
                                  <span className="review-summary-widget--rate-clear--TRkv1"></span>
                                </button>
                                <button
                                  type="button"
                                  data-purpose="rate-gauge-4"
                                  aria-pressed="false"
                                  className="ud-btn ud-btn-small ud-btn-link ud-heading-xs review-summary-widget--rates-row--3unBU"
                                >
                                  <span className="review-summary-widget--rate-gauge--2yKOU">
                                    <span className="review-summary-widget--rate-gauge--bg--1x5Ut">
                                      <span
                                        className="review-summary-widget--rate-gauge--fill--Brz9v"
                                        style={{ width: '32%' }}
                                      ></span>
                                    </span>
                                  </span>
                                  <span className="star-rating-module--star-wrapper--VHfnS star-rating-module--large--22lCK">
                                    <span className="ud-sr-only">Rating: 4 out of 5</span>
                                    <Images.IoMdStar color="yellow" width={'none'} />
                                    <Images.IoMdStar color="yellow" width={'none'} />
                                    <Images.IoMdStar color="yellow" width={'none'} />
                                    <Images.IoMdStar color="yellow" width={'none'} />
                                    <Images.IoMdStarOutline color="blue" width={'none'} />
                                  </span>
                                  <span className="ud-text-sm review-summary-widget--rate-percent--1VwG5">
                                    <span data-purpose="percent-label">32%</span>
                                  </span>
                                  <span className="review-summary-widget--rate-clear--TRkv1"></span>
                                </button>
                                <button
                                  type="button"
                                  data-purpose="rate-gauge-3"
                                  aria-pressed="false"
                                  className="ud-btn ud-btn-small ud-btn-link ud-heading-xs review-summary-widget--rates-row--3unBU"
                                >
                                  <span className="review-summary-widget--rate-gauge--2yKOU">
                                    <span className="review-summary-widget--rate-gauge--bg--1x5Ut">
                                      <span
                                        className="review-summary-widget--rate-gauge--fill--Brz9v"
                                        style={{ width: '9%' }}
                                      ></span>
                                    </span>
                                  </span>
                                  <span className="star-rating-module--star-wrapper--VHfnS star-rating-module--large--22lCK">
                                    <span className="ud-sr-only">Rating: 3 out of 5</span>
                                    <Images.IoMdStar color="yellow" width={'none'} />
                                    <Images.IoMdStar color="yellow" width={'none'} />
                                    <Images.IoMdStar color="yellow" width={'none'} />
                                    <Images.IoMdStarOutline color="blue" width={'none'} />
                                    <Images.IoMdStarOutline color="blue" width={'none'} />
                                  </span>
                                  <span className="ud-text-sm review-summary-widget--rate-percent--1VwG5">
                                    <span data-purpose="percent-label">9%</span>
                                  </span>
                                  <span className="review-summary-widget--rate-clear--TRkv1"></span>
                                </button>
                                <button
                                  type="button"
                                  data-purpose="rate-gauge-2"
                                  aria-pressed="false"
                                  className="ud-btn ud-btn-small ud-btn-link ud-heading-xs review-summary-widget--rates-row--3unBU"
                                >
                                  <span className="review-summary-widget--rate-gauge--2yKOU">
                                    <span className="review-summary-widget--rate-gauge--bg--1x5Ut">
                                      <span
                                        className="review-summary-widget--rate-gauge--fill--Brz9v"
                                        style={{ width: '1%' }}
                                      ></span>
                                    </span>
                                  </span>
                                  <span className="star-rating-module--star-wrapper--VHfnS star-rating-module--large--22lCK">
                                    <span className="ud-sr-only">Rating: 2 out of 5</span>
                                    <Images.IoMdStar color="yellow" width={'none'} />
                                    <Images.IoMdStar color="yellow" width={'none'} />
                                    <Images.IoMdStarOutline color="blue" width={'none'} />
                                    <Images.IoMdStarOutline color="blue" width={'none'} />
                                    <Images.IoMdStarOutline color="blue" width={'none'} />
                                  </span>
                                  <span className="ud-text-sm review-summary-widget--rate-percent--1VwG5">
                                    <span data-purpose="percent-label">1%</span>
                                  </span>
                                  <span className="review-summary-widget--rate-clear--TRkv1"></span>
                                </button>
                                <button
                                  type="button"
                                  data-purpose="rate-gauge-1"
                                  aria-pressed="false"
                                  className="ud-btn ud-btn-small ud-btn-link ud-heading-xs review-summary-widget--rates-row--3unBU"
                                >
                                  <span className="review-summary-widget--rate-gauge--2yKOU">
                                    <span className="review-summary-widget--rate-gauge--bg--1x5Ut">
                                      <span
                                        className="review-summary-widget--rate-gauge--fill--Brz9v"
                                        style={{ width: '1%' }}
                                      ></span>
                                    </span>
                                  </span>
                                  <span className="star-rating-module--star-wrapper--VHfnS star-rating-module--large--22lCK">
                                    <span className="ud-sr-only">Rating: 1 out of 5</span>
                                    <Images.IoMdStar color="yellow" width={'none'} />
                                    <Images.IoMdStarOutline color="blue" width={'none'} />
                                    <Images.IoMdStarOutline color="blue" width={'none'} />
                                    <Images.IoMdStarOutline color="blue" width={'none'} />
                                    <Images.IoMdStarOutline color="blue" width={'none'} />
                                  </span>
                                  <span className="ud-text-sm review-summary-widget--rate-percent--1VwG5">
                                    <span data-purpose="percent-label">1%</span>
                                  </span>
                                  <span className="review-summary-widget--rate-clear--TRkv1"></span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="reviews-section--sub-title--15odj">
                          <h2 className="ud-heading-xl">Reviews</h2>
                          <div role="status"></div>
                        </div>
                        <div>
                          <div>
                            <div data-purpose="landing-page-review-list">
                              {(getReviewData(options.REVIEWS) as any).reviews.map((user: any) => (
                                <div className="reviews-section--review-container--3fUmR">
                                  <div className="individual-review--individual-review--3ChdH">
                                    <div className="individual-review--individual-review-author-avatar--3EOza">
                                      <img
                                        src={user.userAvatar}
                                        alt=""
                                        className="ud-avatar ud-avatar-image"
                                        width="48"
                                        height="48"
                                        loading="lazy"
                                        style={{ width: '4.8rem', height: '4.8rem' }}
                                      />
                                    </div>
                                    <div className="individual-review--individual-review-content--1EBWH">
                                      <div className="individual-review--individual-review__name-container--2WQGl">
                                        <div
                                          className="ud-heading-md individual-review--individual-review__name--3QBIE"
                                          data-purpose="review-detail-user-name"
                                        >
                                          {user.userName}
                                        </div>
                                      </div>
                                      <div className="individual-review--individual-review__detail--3Q03f">
                                        <span className="star-rating-module--star-wrapper--VHfnS star-rating-module--large--22lCK">
                                          <Images.IoMdStar color="yellow" width={'12px'} />
                                          <Images.IoMdStar color="yellow" width={'12px'} />
                                          <Images.IoMdStar color="yellow" width={'12px'} />
                                          <Images.IoMdStar color="yellow" width={'12px'} />
                                          <Images.IoMdStar color="yellow" width={'12px'} />
                                        </span>
                                        <span className="ud-text-sm individual-review--individual-review__detail-date--2wb4_">
                                          {user.userRatingTime}
                                        </span>
                                      </div>
                                      <div className="show-more-module--container--2QPRN">
                                        <div
                                          className="show-more-module--content--cjTh0 show-more-module--with-gradient--1ZDrA"
                                          style={{ maxHeight: '10rem' }}
                                        >
                                          <div>
                                            <div className="ud-text-sm individual-review--individual-review__comment--2sYGB">
                                              <p>{user.userReview}</p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                            <div className="reviews-section--reviews-show-more--T0fxQ">
                              <button type="button" className="ud-btn ud-btn-medium ud-btn-secondary ud-heading-sm">
                                <span>See more reviews</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`ud-tab-content tabs-module--tab-content--30h0i  ${
              activeIndex === options.INSTRUCTOR ? 'tabs-module--active--2l5hb' : ''
            }`}
          >
            <div data-purpose="content-container-wrapper" className="">
              <div className="generic-course-content-tabs--content-container--qbsUQ">
                <div className="component-margin styles--instructors--1dmIT">
                  <span id="instructor" className="in-page-offset-anchor"></span>
                  <h2 className="ud-heading-xl styles--instructors__header--20N27">Instructor</h2>
                  <div className="instructor--instructor--2sjZy" data-purpose="instructor-bio">
                    <span className="in-page-offset-anchor" id="instructor-1"></span>
                    <div>
                      <div className="ud-heading-lg ud-link-underline instructor--instructor__title--2DEeI">
                        <Link to="/user/joseportilla/">
                          {(getReviewData(options.INSTRUCTOR) as any)?.instructorName}
                        </Link>
                      </div>
                      <div className="ud-text-md instructor--instructor__job-title--3iHjg">
                        {(getReviewData(options.INSTRUCTOR) as any)?.instructorJob}
                      </div>
                    </div>
                    <div className="instructor--instructor__image-and-stats--1MRZH">
                      <Link className="instructor--instructor__image-link--2M68D" to="/user/joseportilla/">
                        <img
                          src={(getReviewData(options.INSTRUCTOR) as any)?.instructorAvatar}
                          alt="Jose Portilla"
                          className="instructor--instructor__image--2DJBG ud-avatar ud-avatar-image"
                          width="64"
                          height="64"
                          loading="lazy"
                          style={{ width: '6.4rem', height: '6.4rem' }}
                        />
                      </Link>
                      <ul className="ud-unstyled-list ud-block-list">
                        <li>
                          <div
                            data-purpose="stat"
                            className="ud-block-list-item ud-block-list-item-small ud-block-list-item-tight ud-block-list-item-neutral ud-text-sm"
                          >
                            <Images.IoMdStar className="ud-icon ud-icon-xsmall ud-icon-color-neutral ud-block-list-item-icon" />
                            <div className="ud-block-list-item-content">
                              {(getReviewData(options.INSTRUCTOR) as any)?.instructorRating} Instructor Rating
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="ud-block-list-item ud-block-list-item-small ud-block-list-item-tight ud-block-list-item-neutral ud-text-sm">
                            <Images.BiSolidMedal className="ud-icon ud-icon-xsmall ud-icon-color-neutral ud-block-list-item-icon" />
                            <div className="ud-block-list-item-content">
                              {(getReviewData(options.INSTRUCTOR) as any)?.instructorReviewed} Reviews
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="ud-block-list-item ud-block-list-item-small ud-block-list-item-tight ud-block-list-item-neutral ud-text-sm">
                            <Images.IoPeople className="ud-icon ud-icon-xsmall ud-icon-color-neutral ud-block-list-item-icon" />
                            <div className="ud-block-list-item-content">
                              {(getReviewData(options.INSTRUCTOR) as any)?.instructorStudents} Students
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="ud-block-list-item ud-block-list-item-small ud-block-list-item-tight ud-block-list-item-neutral ud-text-sm">
                            <Images.PiVideoFill className="ud-icon ud-icon-xsmall ud-icon-color-neutral ud-block-list-item-icon" />
                            <div className="ud-block-list-item-content">
                              {(getReviewData(options.INSTRUCTOR) as any)?.instructorCourses} Courses
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="ud-text-sm instructor--instructor__description--1s-Oo">
                      <div className="show-more-module--container--2QPRN">
                        <div
                          className="show-more-module--content--cjTh0 show-more-module--with-gradient--1ZDrA"
                          style={{ maxHeight: '14.6rem' }}
                        >
                          <div>
                            <div>
                              <p>{(getReviewData(options.INSTRUCTOR) as any)?.instructorDescription}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewCourseDetail;
