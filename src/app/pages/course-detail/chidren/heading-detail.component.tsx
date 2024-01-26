import { Images } from '@assets/images';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

type Props = {};

const HeadingCourseDetail = (props: Props) => {
  const { t } = useTranslation();
  return (
    <>
      <div className="heading">
        <div className="introduction-container">
          <div className="intro-asset--wrapper--37FIE">
            <div className="intro-asset--asset--3abyc">
              <div className="ud-btn ud-btn-large ud-btn-ghost ud-heading-md ud-custom-focus-visible intro-asset--placeholder--2_N1K">
                <div className="intro-asset--img-aspect--3fbKk">
                  <iframe
                    className="intro-asset--overlay--3jyau intro-asset--gradient--1JfDu"
                    width="646"
                    height="295.8"
                    title="video-demo"
                    src="https://drive.google.com/file/d/1PLhROh2dPaGwy46muij_54bSezpxM-K5/preview"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
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
                    <span>(941 {t('courseDetail.ratings')})</span>
                  </div>
                  <div className="enrollment" data-purpose="enrollment">
                    {`30,482 ${t('courseDetail.students')}`}
                  </div>
                  <div className="course-content-length--course-content-length--zNAIv">
                    <Images.TiVideo size={'20px'} />
                    <span>
                      <span>1hr 54min</span> {t('courseDetail.demandVideo')}
                    </span>
                  </div>
                </div>
              </div>
              <div className="clp-lead__element-item">
                <div className="instructor-links--instructor-links--1NOgk" data-purpose="instructor-name-top">
                  <span className="instructor-links--names--3U_NU">
                    <span className="ud-text-sm">{t('courseDetail.createdBy')}</span>
                    <Link to="/user/joseportilla/">Jose Portilla</Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div data-purpose="purchase-section">
            <div className="purchase-section-container--purchase-section-container--1wStb">
              <div className="generic-purchase-section--main-cta-container--1hRUq generic-purchase-section--free-course--2Vg4Q">
                <div className="generic-purchase-section--buy-box-main--2o6Au">
                  <div className="buy-box--buy-box--1j_Sf">
                    <div className="buy-box--buy-box-item--2RETv">
                      <div>
                        <div className="base-price-text-module--container--2P5fs ud-clp-price-text">
                          <div className="base-price-text-module--price-part--3AFBv ud-clp-discount-price ud-heading-lg">
                            <span>{t('courseDetail.free')}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="buy-button buy-box--buy-box-item--2RETv buy-box--buy-button--35r28">
                      <div>
                        <button
                          type="button"
                          className="ud-btn ud-btn-medium ud-btn-primary ud-heading-sm styles--btn--express-checkout--3h0xG"
                        >
                          <span>{t('courseDetail.enroll')}</span>
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
