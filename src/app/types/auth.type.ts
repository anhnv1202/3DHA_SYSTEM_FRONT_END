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
  role: number;
  __v: number;
}

export interface LoginResponse {
  accessToken: string;
  user: User;
}
export interface CommonSuccessResponse {
  code: number;
  success: boolean;
  message: string;
  data: any;
}
export interface SignUpInitialValues {
  firstName: string;
  lastName: string;
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
  confirmPassword: string;
}

export interface ChangePasswordRequest {
  newPassword: string;
  confirmPassword: string;
  token: string;
}

export interface ConfirmResponse {
  status: boolean;
}
