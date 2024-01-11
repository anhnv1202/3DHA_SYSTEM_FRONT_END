export const DEFAULT_DATE_FORMAT = 'D/MM/YYYY';
export const DEFAULT_MINUTES_SECONDS_FORMAT = 'mm:ss';

export enum ROLE {
  TEACHER = 1,
  STUDENT = 2,
  ADMIN = 3,
}

export enum Locales {
  VI = 'vi',
  EN = 'en',
  JA = 'ja',
  KR = 'kr',
}

export const APP_LOCALES = [Locales.EN];

export enum LocalesFullText {
  VI = 'Vietnamese',
  EN = 'English',
  JA = 'Japanese',
  KR = 'Korean',
}
export const ACCESS_TOKEN_KEY = 'access_token';

export enum OrderType {
  ASC = 'asc',
  DESC = 'desc',
}

export const REGEX = {
  USERNAME: /^[\d\w]+$/,
  PHONE_NUMBER: /^[0-9]{10}$/,
  EMAIL: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
};

export const REF = {
  PASSSWORD: 'password',
};

export const PATHS = {
  REGISTER: '/register',
  FORGOT_PASSWORD: '/forgot-password',
  CHANGE_PASSWORD: '/change-password',
};

export const INITIAL_VALUES = {
  REGISTER: { username: '', email: '', phone: '', password: '', confirmPassword: '' },
  FORGOT_PASSWORD: { email: '' },
  CHANGE_PASSWORD: { newPassword: '', confirmNewPassword: '' },
};
