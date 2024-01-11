import { ConfirmResponse, LoginResponse, SignUpRequest } from '@app/types';
import HttpService from '@core/services/http/http.service';

class _AuthService {
  public login(username: string, password: string) {
    return HttpService.post<LoginResponse>('/accounts/login', {
      body: {
        username,
        password,
      },
    });
  }

  public signUp(signUpRequest: SignUpRequest) {
    return HttpService.post<LoginResponse>('/accounts', {
      body: { ...signUpRequest },
    });
  }

  public confirm(token: string) {
    return HttpService.post<ConfirmResponse>('/auth/confirm', {
      body: { token },
    });
  }
}

const AuthService = new _AuthService();

export default AuthService;
