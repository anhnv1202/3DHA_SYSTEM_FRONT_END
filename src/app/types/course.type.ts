export interface CreateCourseInitialValues {
  name: string;
  description: string[];
  major: Major;
  price: number;
}

export interface Major {
  title: string;
  description: string;
  deletedAt: Date | null;
}

export interface CourseRequest {
  name: string;
  description: string[];
  price: number;
  major: Major;
  [key: string]: any;
}
