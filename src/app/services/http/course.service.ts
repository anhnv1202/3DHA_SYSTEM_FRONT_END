import { Course, CourseRequest } from '@app/types/course.type';
import HttpService from '@core/services/http/http.service';

class _CourseService {
  public create(courseCreating: CourseRequest) {
    return HttpService.post<Course>(`/course/create`, {
      body: { ...courseCreating },
    });
  }

  public getAllMajors() {
    return HttpService.get<any>(`/major/get-all`);
  }
}
const CourseService = new _CourseService();

export default CourseService;
