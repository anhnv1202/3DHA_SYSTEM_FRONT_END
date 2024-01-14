import React from 'react';
import { useTranslation } from 'react-i18next';

type Props = {};

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
        <div
          className="course-unit-module--grid--14QSU carousel-module--scroll-port--28Dow carousel-module--grid--3Qw6j carousel-module--scroll-lock--1Ys-j"
          data-purpose="scroll-port"
          data-testid="course-unit-carousel"
          id="course-unit-container-Hcvinangxem"
          aria-live="polite"
        >
          {Array.from({ length: 10 }, (_, index) => (
            <div data-index={index} className="carousel-module--scroll-item--2CpA_">
              <div className="course-details-quick-view-box-module--full-height--3Wjuv">
                <div className="popper-module--popper--2BpLn course-details-quick-view-box-module--full-height--3Wjuv">
                  <div
                    data-testid="course-details-popover-trigger"
                    className="course-details-quick-view-box-module--full-height--3Wjuv"
                    id="u59-popper-trigger--21"
                    aria-expanded="false"
                    tabIndex={0}
                  >
                    <div
                      className="course-unit-module--course-card--2eW8u course-card-module--container--2MTsr course-card-module--medium--3qi9R"
                      data-purpose="container"
                    >
                      <div className="course-card-module--image-container--20x0M">
                        <img
                          src="https://img-b.udemycdn.com/course/240x135/5246952_37c4.jpg"
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
                              <a href="/course/aws-cloud-for-beginner-vietnamese/">
                                AWS Cloud for beginner (Vietnamese)
                                <div className="ud-sr-only" aria-hidden="true">
                                  <span data-testid="seo-headline">AWS Cloud cho người mới bắt đầu (Tiếng Việt)</span>
                                  <span data-testid="seo-rating">Xếp hạng: 4,8/5</span>
                                  <span data-testid="seo-num-reviews">326 đánh giá</span>
                                  <span data-testid="seo-content-info">Tổng số 22,5 giờ</span>
                                  <span data-testid="seo-num-lectures">340 bài giảng</span>
                                  <span data-testid="seo-instructional-level">Sơ cấp</span>
                                  <span data-testid="seo-current-price">Giá hiện tại: ₫&nbsp;1.699.000</span>
                                </div>
                              </a>
                            </h3>
                          </div>
                        </div>
                        <div className="ud-text-xs">
                          <span className="ud-sr-only">Giảng viên:</span>
                          <div
                            className="course-card-instructors-module--instructor-list--37tO6"
                            data-purpose="safely-set-inner-html:course-card:visible-instructors"
                            data-testid="safely-set-inner-html:course-card:visible-instructors"
                          >
                            Linh Nguyen
                          </div>
                        </div>
                        <div className="course-card-ratings-module--row--1EHHW">
                          <span className="star-rating-module--star-wrapper--VHfnS star-rating-module--medium--3kDsb">
                            <span className="ud-sr-only">Xếp hạng: 4,8/5</span>
                            <span
                              className="ud-heading-sm star-rating-module--rating-number--2xeHu"
                              aria-hidden="true"
                              data-purpose="rating-number"
                            >
                              4,8
                            </span>
                            <svg
                              aria-hidden="true"
                              width="100%"
                              height="100%"
                              viewBox="0 0 70 14"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <mask id="u59-star-rating-mask--23" data-purpose="star-rating-mask">
                                <rect x="0" y="0" width="100%" height="100%" fill="white"></rect>
                              </mask>
                              <g
                                className="star-rating-module--star-filled--3CnHc"
                                mask="url(#u59-star-rating-mask--23)"
                                data-purpose="star-filled"
                              >
                                {/* <use xlink:href="#icon-rating-star" width="14" height="14" x="0"></use>
              <use xlink:href="#icon-rating-star" width="14" height="14" x="14"></use>
              <use xlink:href="#icon-rating-star" width="14" height="14" x="28"></use>
              <use xlink:href="#icon-rating-star" width="14" height="14" x="42"></use>
              <use xlink:href="#icon-rating-star" width="14" height="14" x="56"></use> */}
                              </g>
                              <g
                                fill="transparent"
                                className="star-rating-module--star-bordered--3WG_2"
                                stroke-width="2"
                                data-purpose="star-bordered"
                              >
                                {/* <use xlink:href="#icon-rating-star" width="12" height="12" x="1" y="1"></use>
              <use xlink:href="#icon-rating-star" width="12" height="12" x="15" y="1"></use>
              <use xlink:href="#icon-rating-star" width="12" height="12" x="29" y="1"></use>
              <use xlink:href="#icon-rating-star" width="12" height="12" x="43" y="1"></use>
              <use xlink:href="#icon-rating-star" width="12" height="12" x="57" y="1"></use> */}
                              </g>
                            </svg>
                          </span>
                          <span
                            aria-label="326 đánh giá"
                            className="ud-text-xs course-card-ratings-module--reviews-text--1z047"
                          >
                            (326)
                          </span>
                        </div>
                        <div className="course-card-module--price-text-container--2oBPb">
                          <div
                            className="base-price-text-module--container--2P5fs course-card-module--price-text-base-price-text-component--sHBbm"
                            data-purpose="price-text-container"
                          >
                            <div
                              className="base-price-text-module--price-part--3AFBv course-card-module--price-text-base-price-text-component-discount-price--2VEcP ud-heading-md"
                              data-purpose="course-price-text"
                            >
                              <span className="ud-sr-only">Giá hiện tại</span>
                              <span>
                                <span>₫&nbsp;1.699.000</span>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="course-card-module--badges-container--2ENVp">
                          <div className="course-card-badges-module--course-badges--1RKli">
                            <div className="ud-badge ud-heading-xs course-badges-module--bestseller--2k308">
                              Bán chạy nhất
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="ud-btn ud-btn-xsmall ud-btn-ghost ud-heading-sm ud-link-underline course-details-quick-view-box-module--popover-interaction-btn--5jDXG"
                      data-testid="open-course-details-popover"
                      id="u59-trigger-button--20"
                    >
                      <span>Hiện thông tin khóa học</span>
                    </button>
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
