export interface LoginInitialValues {
  username: string;
  password: string;
}

export interface LoginResponse {
  _id: string;
  username: string;
  role: string;
  jwt: string;
}

export interface SignUpInitialValues {
  username: string;
  email: string;
  phone: string;
  password: string;
  rePassword: string;
}

export interface SignUpRequest extends SignUpInitialValues {}

export interface RegisterResponse {
  status: boolean;
}

export interface ForgotPasswordInitialValues {
  email: string;
}

export interface ChangePasswordInitialValues {
  newPassword: string;
  confirmNewPassword: string;
}

export interface ConfirmResponse {
  status: boolean;
}

