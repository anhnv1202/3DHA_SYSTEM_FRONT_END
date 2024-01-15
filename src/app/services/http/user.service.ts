import {} from '@app/types';
import { EditProfileResponse } from '@app/types/user.type';
import HttpService from '@core/services/http/http.service';

class _UserService {
  public update(id: string) {
    return HttpService.put<EditProfileResponse>(`/users/update/${id}`, {
      body: {
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        role: '',
        avatar: '',
        bio: '',
      },
    });
  }
}

const UserService = new _UserService();

export default UserService;
