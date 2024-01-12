import {
  ChangePasswordRequest,
  CommonSuccessResponse,
  ConfirmResponse,
  LoginResponse,
  RegisterResponse,
  SignUpRequest,
} from '@app/types';
import HttpService from '@core/services/http/http.service';

class _AuthService {
  public login(email: string, password: string) {
    return HttpService.post<LoginResponse>('/auth/login', {
      body: {
        email,
        password,
      },
    });
  }

  public register(signUpRequest: SignUpRequest) {
    return HttpService.post<RegisterResponse>('/auth/register', {
      body: { ...signUpRequest },
    });
  }
  public forgot(email: string) {
    return HttpService.post<CommonSuccessResponse>('/auth/forgot', {
      body: { email },
    });
  }
  public confirm(token: string) {
    return HttpService.post<ConfirmResponse>('/auth/confirm', {
      body: { token },
    });
  }

  public changePassword(changePasswordReq: ChangePasswordRequest) {
    return HttpService.post<ConfirmResponse>('/auth/change-password', {
      body: { ...changePasswordReq },
    });
  }
}

const AuthService = new _AuthService();

export default AuthService;
