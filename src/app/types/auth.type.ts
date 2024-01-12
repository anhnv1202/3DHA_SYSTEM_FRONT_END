export interface LoginInitialValues {
  email: string;
  password: string;
}
export interface User {
  _id: string;
  username: string;
  phone: string;
  email: string;
  password: string;
  avatar: string;
  isActive: boolean;
  status: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface AccessToken {
  accessToken: string;
  user: User;
}

export interface LoginResponse {
  code: number;
  success: boolean;
  message: string;
  data: AccessToken;
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
