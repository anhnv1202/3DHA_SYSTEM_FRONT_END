import { FormField, NavbarLink, SocialMediaLink } from '@app/types/helper';
import { Images } from '@assets/images';
import i18n from '@core/configs/i18n.config';

export const socialMediaLinks: SocialMediaLink[] = [
  { platform: 'Facebook', icon: <Images.FaFacebook />, link: '/' },
  { platform: 'XTwitter', icon: <Images.FaXTwitter />, link: '/' },
  { platform: 'Google', icon: <Images.FaGoogle />, link: '/' },
];

export const formFields: { [key: string]: FormField[] } = {
  register1: [
    { name: 'firstName', placeholder: i18n.t('register.firstName'), type: 'text' },
    { name: 'lastName', placeholder: i18n.t('register.lastName'), type: 'text' },
  ],
  register2: [
    { name: 'username', placeholder: i18n.t('register.username'), type: 'text' },
    { name: 'email', placeholder: i18n.t('register.email'), type: 'text' },
    { name: 'phone', placeholder: i18n.t('register.phone'), type: 'text' },
    { name: 'password', placeholder: i18n.t('register.password'), type: 'password' },
    { name: 'rePassword', placeholder: i18n.t('register.confirmPassword'), type: 'password' },
  ],
  forgotPassword: [{ name: 'email', placeholder: i18n.t('forgotPassword.email'), type: 'text' }],
  changePassword: [
    { name: 'newPassword', placeholder: i18n.t('changePassword.password'), type: 'password' },
    { name: 'confirmNewPassword', placeholder: i18n.t('changePassword.confirmPassword'), type: 'password' },
  ],
  login: [
    { name: 'email', placeholder: i18n.t('login.emailField'), type: 'text' },
    { name: 'password', placeholder: i18n.t('login.passwordField'), type: 'password' },
  ],
};

export const navbarLinks: NavbarLink[] = [
  {
    name: 'Entrepreneurship Spirit',
    path: '/courses/business/entrepreneurship/',
  },
  {
    name: 'Communication',
    path: '/courses/business/communications/',
  },
  {
    name: 'Management',
    path: '/courses/business/management/',
  },
  {
    name: 'Sales',
    path: '/courses/business/sales/',
  },
  {
    name: 'Business Strategy',
    path: '/courses/business/strategy/',
  },
  {
    name: 'Operations',
    path: '/courses/business/operations/',
  },
  {
    name: 'Project Management',
    path: '/courses/business/project-management/',
  },
  {
    name: 'Business Law',
    path: '/courses/business/business-law/',
  },
  {
    name: 'Business Intelligence and Analytics',
    path: '/courses/business/analytics-and-intelligence/',
  },
  {
    name: 'Human Resources',
    path: '/courses/business/human-resources/',
  },
  {
    name: 'Industry',
    path: '/courses/business/industry/',
  },
  {
    name: 'E-commerce',
    path: '/courses/business/e-commerce/',
  },
  {
    name: 'Media',
    path: '/courses/business/media/',
  },
  {
    name: 'Real Estate',
    path: '/courses/business/real-estate/',
  },
  {
    name: 'Other Business',
    path: '/courses/business/other-business/',
  },
];
