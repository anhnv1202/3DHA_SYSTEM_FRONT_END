import { Images } from '@assets/images';
import React from 'react';

type Props = {};

const HeadingCourseDetail = (props: Props) => {
  return (
    <>
      <div className="heading">
        <div className="introduction-container">
          <div className="intro-asset--wrapper--37FIE">
            <div className="intro-asset--asset--3abyc" data-purpose="introduction-asset">
              <button
                type="button"
                className="ud-btn ud-btn-large ud-btn-ghost ud-heading-md ud-custom-focus-visible intro-asset--placeholder--2_N1K"
              >
                <span className="intro-asset--img-aspect--3fbKk">
                  <img
                    src="https://img-b.udemycdn.com/course/240x135/5512420_3119_2.jpg"
                    alt=""
                    sizes="(min-width: 61.31rem) 670,
    (min-width: 43.81rem) 552,
    100vw"
                    width="240"
                    height="135"
                    loading="eager"
                    className="intro-asset--overlay--3jyau intro-asset--gradient--1JfDu"
                  />
                </span>
                <span className="ud-play-overlay">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    className="ud-icon ud-icon-xxlarge ud-focus-visible-target"
                  ></svg>
                </span>
                <span className="ud-heading-md intro-asset--overlay--3jyau intro-asset--text--lXX59">
                  Preview this course
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="ud-container lead-container">
          <div className="course-landing-page__main-content">
            <div className="ud-text-sm clp-lead">
              <h1 className="ud-heading-xl clp-lead__title clp-lead__title--small" data-purpose="lead-title">
                ChatGPT Quick Guide - Prompt Engineering, Plugins, and more!
              </h1>
              <div className="ud-text-md clp-lead__headline" data-purpose="lead-headline">
                In just 2 hours supercharge your ChatGPT skills with plugins, the code interpreter, and prompt
                engineering!
              </div>
              <div className="clp-lead__badge-ratings-enrollment">
                <div className="clp-lead__element-item">
                  <div className="ud-badge ud-heading-xs course-badges-module--free--1PepP">Free tutorial</div>
                </div>
                <div className="clp-lead__element-item clp-lead__element-item--row">
                  <div className="styles--rating-wrapper--ajCRv" data-purpose="rating">
                    <span className="star-rating-module--star-wrapper--VHfnS star-rating-module--medium--3kDsb">
                      <span className="ud-sr-only">Rating: 4.6 out of 5</span>
                      <span
                        className="ud-heading-sm star-rating-module--rating-number--2xeHu"
                        aria-hidden="true"
                        data-purpose="rating-number"
                      >
                        4.6
                      </span>

                      <Images.IoMdStar color="yellow" width={'none'} />
                      <Images.IoMdStar color="yellow" width={'none'} />
                      <Images.IoMdStar color="yellow" width={'none'} />
                      <Images.IoMdStar color="yellow" width={'none'} />
                      <Images.IoMdStarHalf color="yellow" width={'none'} />
                    </span>
                    <span>(941 ratings)</span>
                  </div>
                  <div className="enrollment" data-purpose="enrollment">
                    30,482 students
                  </div>
                  <div className="course-content-length--course-content-length--zNAIv">
                    <Images.TiVideo size={'20px'} />
                    <span>
                      <span>1hr 54min</span> of on-demand video
                    </span>
                  </div>
                </div>
              </div>
              <div className="clp-lead__element-item">
                <div className="instructor-links--instructor-links--1NOgk" data-purpose="instructor-name-top">
                  <span className="instructor-links--names--3U_NU">
                    <span className="ud-text-sm">Created by </span>
                    <a href="/user/joseportilla/" rel="noopener noreferrer" target="_blank">
                      Jose Portilla
                    </a>
                  </span>
                </div>
              </div>
              <div className="clp-lead__element-meta">
                <div className="clp-lead__element-item clp-lead__locale" data-purpose="lead-course-locale">
                  <Images.TfiWorld className="ud-icon ud-icon-xsmall ud-icon-color-neutral icon" />
                  English
                </div>
                <div className="clp-lead__element-item  clp-lead__caption">
                  <div className="ud-text-sm caption--captions--joQAG" data-purpose="caption">
                    <Images.MdKeyboardAlt className="ud-icon ud-icon-xsmall ud-icon-color-neutral caption--subtitles-icon--CKq6q" />
                    <span>English [Auto]</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div data-purpose="purchase-section" data-client-side-render-only="CSR: purchase_section">
            <div className="purchase-section-container--purchase-section-container--1wStb">
              <div
                className="generic-purchase-section--main-cta-container--1hRUq generic-purchase-section--free-course--2Vg4Q"
                data-purpose="purchase-section"
              >
                <div className="generic-purchase-section--buy-box-main--2o6Au">
                  <div className="buy-box--buy-box--1j_Sf" data-purpose="buy-box">
                    <div className="buy-box--buy-box-item--2RETv">
                      <div>
                        <div
                          className="base-price-text-module--container--2P5fs ud-clp-price-text"
                          data-purpose="price-text-container"
                        >
                          <div
                            className="base-price-text-module--price-part--3AFBv ud-clp-discount-price ud-heading-lg"
                            data-purpose="course-price-text"
                          >
                            <span className="ud-sr-only">Current price</span>
                            <span>Free</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="buy-box--buy-box-item--2RETv buy-box--discount-expiration--22scc"></div>
                    <div className="buy-button buy-box--buy-box-item--2RETv buy-box--buy-button--35r28">
                      <div>
                        <button
                          type="button"
                          data-purpose="buy-this-course-button"
                          className="ud-btn ud-btn-medium ud-btn-primary ud-heading-sm styles--btn--express-checkout--3h0xG"
                        >
                          <span>Enroll now</span>
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
    </>
  );
};

export default HeadingCourseDetail;
