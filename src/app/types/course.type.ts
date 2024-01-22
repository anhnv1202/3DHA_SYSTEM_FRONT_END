export interface CreateCourseInitialValues {
  name: string;
  description: string;
  major: object;
  price: number;
}

export interface Course {
  name: string;
  description: string;
  price: number;
  major: object;
}

export interface CourseRequest {
  name: string;
  description: string;
  price: number;
  major: object;
}
