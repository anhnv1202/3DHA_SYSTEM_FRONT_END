import { useState, useRef, useEffect } from 'react';

// Data
import { Images } from '@assets/images';
import { Link } from 'react-router-dom';
type carouselMultiItemsProps = {
  resources: any[];
};
const CarouselMultiItemsCourseDetail = ({ resources }: carouselMultiItemsProps) => {
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState<any>(0);
  const carousel = useRef(null);

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState: any) => prevState - 1);
    }
  };

  const moveNext = () => {
    if (carousel.current !== null && (carousel.current as any).offsetWidth * currentIndex <= maxScrollWidth.current) {
      setCurrentIndex((prevState: any) => prevState + 1);
    }
  };

  const isDisabled = (direction: any) => {
    if (direction === 'prev') {
      return currentIndex <= 0;
    }

    if (direction === 'next' && carousel.current !== null) {
      return (carousel.current as any).offsetWidth * currentIndex >= maxScrollWidth.current;
    }

    return false;
  };

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      (carousel.current as any).scrollLeft = (carousel.current as any).offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? (carousel.current as any).scrollWidth - (carousel.current as any).offsetWidth
      : 0;
  }, []);

  return (
    <div className="carousel my-12 mx-auto">
      <div className="relative overflow-hidden">
        <div className="flex justify-between absolute top left w-full h-full">
          <button
            onClick={movePrev}
            className="hover:bg-blue-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
            disabled={isDisabled('prev')}
          >
            <Images.FaAngleLeft size={'md'} />
            <span className="sr-only">Prev</span>
          </button>
          <button
            onClick={moveNext}
            className="hover:bg-blue-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
            disabled={isDisabled('next')}
          >
            <Images.FaAngleRight size={'md'} />
          </button>
        </div>
        <div
          ref={carousel}
          className="carousel-container relative flex gap-56 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
        >
          {resources.map((resource, index) => {
            return (
              <div data-index={index} key={index} className="carousel-module--scroll-item--2CpA_ mr-32">
                <div className="course-details-quick-view-box-module--full-height--3Wjuv">
                  <div className="popper-module--popper--2BpLn course-details-quick-view-box-module--full-height--3Wjuv">
                    <div className="course-details-quick-view-box-module--full-height--3Wjuv">
                      <div className="course-unit-module--course-card--2eW8u course-card-module--container--2MTsr course-card-module--medium--3qi9R">
                        <div className="course-card-module--image-container--20x0M">
                          <img
                            src={resource.imageUrl}
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
                                <Link to={resource.link}>{resource.title}</Link>
                              </h3>
                            </div>
                          </div>
                          <div className="ud-text-xs">
                            <span className="ud-sr-only">Instructor:</span>
                            <div
                              className="course-card-instructors-module--instructor-list--37tO6"
                              data-purpose="safely-set-inner-html:course-card:visible-instructors"
                              data-testid="safely-set-inner-html:course-card:visible-instructors"
                            >
                              {resource.author}
                            </div>
                          </div>
                          <div className="course-card-ratings-module--row--1EHHW">
                            <span className="star-rating-module--star-wrapper--VHfnS star-rating-module--medium--3kDsb">
                              <span className="ud-sr-only">Rating: 4.2 out of 5</span>
                              <span className="ud-heading-sm star-rating-module--rating-number--2xeHu">
                                {resource.rating}
                              </span>
                              <Images.IoMdStar color="yellow" width={'none'} />
                              <Images.IoMdStar color="yellow" width={'none'} />
                              <Images.IoMdStar color="yellow" width={'none'} />
                              <Images.IoMdStar color="yellow" width={'none'} />
                              <Images.IoMdStarHalf color="yellow" width={'none'} />
                            </span>
                            <span className="ud-text-xs course-card-ratings-module--reviews-text--1z047">
                              ({resource.reviewed})
                            </span>
                          </div>
                          <div className="course-card-module--price-text-container--2oBPb">
                            <div className="base-price-text-module--container--2P5fs course-card-module--price-text-base-price-text-component--sHBbm">
                              <div className="base-price-text-module--price-part--3AFBv course-card-module--price-text-base-price-text-component-discount-price--2VEcP ud-heading-md">
                                <span className="ud-sr-only">Current price</span>
                                <span>
                                  <span>₫{resource.currentPrice}</span>
                                </span>
                              </div>
                              <div
                                className="base-price-text-module--price-part--3AFBv base-price-text-module--original-price--3kPJa course-card-module--price-text-base-price-text-component-list-price--1OaBj ud-text-sm"
                                data-purpose="original-price-container"
                              >
                                <div data-purpose="course-old-price-text">
                                  <span className="ud-sr-only">Original Price</span>
                                  <span>
                                    <s>
                                      <span>₫{resource.originalPrice}</span>
                                    </s>
                                  </span>
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
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CarouselMultiItemsCourseDetail;
