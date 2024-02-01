import { Course } from '@app/types';
import { CourseRequest } from '@app/types/course.type';
import HttpService from '@core/services/http/http.service';

class _CourseService {
  public create(courseCreating: CourseRequest) {
    return HttpService.post<Course>(`/course/create`, {
      body: { ...courseCreating },
    });
  }

  public getCourseById(id: string) {
    return HttpService.get<any>(`/course/get/${id}`);
  }

  public getAllMajors() {
    return HttpService.get<any>(`/major/get-all`);
  }
}
const CourseService = new _CourseService();

export default CourseService;
