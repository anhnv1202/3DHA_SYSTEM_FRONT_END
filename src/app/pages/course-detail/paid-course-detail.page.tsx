import Breadcrumb from '@app/components/breadcrumb';
import HeadingCourseDetail from './chidren/heading-course-detail.component';
import RelatedCourseByCategory from './chidren/related-by-category-course-detail.component';
import RelatedCourseByInstructor from './chidren/related-course-by-instructor.component';
import ReviewCourseDetail from './chidren/review-course-detail.component';

type Props = {};

const PaidCourseDetail = (props: Props) => {
  return (
    <>
      <div className="clp-component-render">
        <div className="ud-component--course-landing-page--course-landing-page">
          <div id="schema_markup" data-purpose="schema_markup"></div>
          <div data-content-group="Landing Page" data-course-id="5512420">
            <Breadcrumb />
            <HeadingCourseDetail />
          </div>
          <div className="ud-container content-container">
            <ReviewCourseDetail />
            <RelatedCourseByCategory />
            <RelatedCourseByInstructor />
          </div>
        </div>
      </div>
    </>
  );
};

export default PaidCourseDetail;
