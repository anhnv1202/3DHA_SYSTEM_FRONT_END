import CarouselMultiItems from '@app/components/carousel/carousel-multi-items.component';
import React from 'react';

type Props = {};

const RelatedCourseByCategory = (props: Props) => {
  return (
    <>
      <div className="component-margin">
        <div className="alternate-headline-module--title-container--2ozsw">
          <div className="alternate-headline-module--title--Yp6jO">
            <h2
              id="Get more with paid Data Science courses"
              className="ud-heading-xl"
              data-purpose="alternate-headline-title"
            >
              Get more with paid Data Science courses
            </h2>
          </div>
          <p className="ud-text-md alternate-headline-module--secondary-text--1uTFa">
            Enroll in our in-depth courses from top-rated instructors
          </p>
        </div>
        <div className="component-margin">
          <section aria-label="Carousel" className="carousel-module--container--27wzs">
            <CarouselMultiItems />
          </section>
        </div>
      </div>
    </>
  );
};

export default RelatedCourseByCategory;
