import Breadcrumb from '@app/components/breadcrumb';
import HeadingCourseDetail from './chidren/heading-detail.component';
import RelatedCourseByCategory from './chidren/related-by-category-course-detail.component';
import RelatedCourseByInstructor from './chidren/related-by-instructor.component';
import ReviewCourseDetail from './chidren/review-detail.component';

type Props = {};

const UnpaidCourseDetail = (props: Props) => {
  const dataBreacumb = [
    { title: 'Development', path: '/courses/development/' },
    { title: 'Data Science', path: '/courses/development/data-science' },
    { title: 'ChatGPT', path: '/topic/chatgpt/' },
  ];
  return (
    <>
      <div className="clp-component-render">
        <div className="ud-component--course-landing-page--course-landing-page">
          <div>
            <Breadcrumb data={dataBreacumb} />
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

export default UnpaidCourseDetail;
