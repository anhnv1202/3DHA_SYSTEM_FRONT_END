import { resourcesCarouselCourseDetail } from '@app/common/constants/const';
import CarouselMultiItemsCourseDetail from '@app/components/carousel/carousel-multi-items-course-detail.component';
import { useTranslation } from 'react-i18next';

type Props = {};

const RelatedCourseByCategory = (props: Props) => {
  const { t } = useTranslation();
  return (
    <>
      <div className="component-margin">
        <div className="alternate-headline-module--title-container--2ozsw">
          <div className="alternate-headline-module--title--Yp6jO">
            <h2 className="ud-heading-xl">
              {t('courseDetail.enrollByTopRelated')} Data Science {t('courseDetail.course')}
            </h2>
          </div>
          <p className="ud-text-md alternate-headline-module--secondary-text--1uTFa">
            {t('courseDetail.enrollByTopRelated')}
          </p>
        </div>
        <div className="component-margin">
          <section className="carousel-module--container--27wzs">
            <CarouselMultiItemsCourseDetail resources={resourcesCarouselCourseDetail} />
          </section>
        </div>
      </div>
    </>
  );
};

export default RelatedCourseByCategory;
