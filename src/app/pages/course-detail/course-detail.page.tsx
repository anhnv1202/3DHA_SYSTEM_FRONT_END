import React from 'react';
import UnpaidCourseDetail from './unpaid-course-detail.page';
import PaidCourseDetail from './paid-course-detail.component';

type Props = { isUnpaidPage?: boolean };

const CourseDetail = ({ isUnpaidPage }: Props) => {
  return isUnpaidPage ? <UnpaidCourseDetail /> : <PaidCourseDetail />;
};

export default CourseDetail;
