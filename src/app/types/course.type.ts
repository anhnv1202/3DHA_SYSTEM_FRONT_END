export interface CreateCourseInitialValues {
  name: string;
  description: string;
  major: Major;
  price: number;
}

export interface Major {
  title: string;
  description: string;
}

export interface CourseRequest {
  name: string;
  description: string;
  major: Major;
  price: number;
}
