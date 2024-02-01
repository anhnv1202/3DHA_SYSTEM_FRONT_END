import React from 'react';
import UnpaidCourseDetail from './unpaid-course-detail.page';
import PaidCourseDetail from './paid-course-detail.component';

type Props = { isPaidPage?: boolean };

const CourseDetail = ({ isPaidPage }: Props) => {
  return isPaidPage ? <PaidCourseDetail /> : <UnpaidCourseDetail />;
};

export default CourseDetail;
