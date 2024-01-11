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
  confirmPassword: string;
}

export interface SignUpRequest {
  username: string;
  email: string;
  phonenumber: string;
  password: string;
  confirmPassword: string;
}

export interface ForgotPasswordInitialValues {
  email: string;
}

export interface ChangePasswordInitialValues {
  newPassword: string;
  confirmNewPassword: string;
}
