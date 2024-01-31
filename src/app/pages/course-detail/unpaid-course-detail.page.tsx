import Breadcrumb from '@app/components/breadcrumb';
import HeadingCourseDetail from './chidren/heading-detail.component';
import RelatedCourseByCategory from './chidren/related-by-category-course-detail.component';
import RelatedCourseByInstructor from './chidren/related-by-instructor.component';
import ReviewCourseDetail from './chidren/review-detail.component';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import useObservable from '@core/hooks/use-observable.hook';
import CourseService from '@app/services/http/course.service';
import { addToast } from '@app/components/toast/toast.service';
import { SystemMessage } from '@app/common/constants';

type Props = {};

const UnpaidCourseDetail = (props: Props) => {
  const { subscribeOnce } = useObservable();
  const params = useParams<{ id: string }>();

  useEffect(() => {
    subscribeOnce(CourseService.getCourseById(params.id || ''), (res: any) => {
      res && addToast({ text: SystemMessage.VERIFY_SUCCESS, position: 'top-right' });
    });
  });
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
