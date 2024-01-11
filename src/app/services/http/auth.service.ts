import { LoginResponse, RegisterResponse, SignUpRequest } from '@app/types';
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

  public register(signUpRequest: SignUpRequest) {
    return HttpService.post<RegisterResponse>('/auth/register', {
      body: { ...signUpRequest },
    });
  }
}

const AuthService = new _AuthService();

export default AuthService;
