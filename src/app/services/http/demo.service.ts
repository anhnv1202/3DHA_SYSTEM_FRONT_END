import HttpService from '@core/services/http/http.service';

class _DemoService {
  public demo() {
    return HttpService.get<{ userId: number; id: number; title: string; completed: boolean }>(
      'https://jsonplaceholder.typicode.com/todos/1',
    );
  }
}

const DemoService = new _DemoService();

export default DemoService;
