import { ChangePasswordProfileRequest, ConfirmResponse, User } from '@app/types';
import HttpService from '@core/services/http/http.service';

class _UserService {
  public update(id: string, body: any) {
    return HttpService.put<User>(`/users/update/${id}`, {
      body,
    });
  }

  public changePassword(changePasswordReq: ChangePasswordProfileRequest) {
    return HttpService.post<ConfirmResponse>('/auth/change-password', {
      body: { ...changePasswordReq },
    });
  }
}
const UserService = new _UserService();

export default UserService;
