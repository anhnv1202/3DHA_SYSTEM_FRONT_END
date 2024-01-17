import {} from '@app/types';
import { EditProfileResponse } from '@app/types/user.type';
import HttpService from '@core/services/http/http.service';

class _UserService {
  public update(id: string, body: any) {
    return HttpService.put<EditProfileResponse>(`/users/update/${id}`, {
      body,
    });
  }
}
const UserService = new _UserService();

export default UserService;
