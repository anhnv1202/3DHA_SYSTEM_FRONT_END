import i18n from '@core/configs/i18n.config';
import { FormField, NavbarLink, SocialMediaLink } from '@app/types/helper';
import { Images } from '@assets/images';

export const socialMediaLinks: SocialMediaLink[] = [
  { platform: 'Facebook', icon: <Images.FaFacebook />, link: '/' },
  { platform: 'XTwitter', icon: <Images.FaXTwitter />, link: '/' },
  { platform: 'Google', icon: <Images.FaGoogle />, link: '/' },
];

export const formFields: { [key: string]: FormField[] } = {
  register: [
    { name: 'username', placeholder: i18n.t('register.username'), type: 'text' },
    { name: 'email', placeholder: i18n.t('register.email'), type: 'text' },
    { name: 'phone', placeholder: i18n.t('register.phone'), type: 'text' },
    { name: 'password', placeholder: i18n.t('register.password'), type: 'password' },
    { name: 'confirmPassword', placeholder: i18n.t('register.confirmPassword'), type: 'password' },
  ],
  forgotPassword: [{ name: 'email', placeholder: i18n.t('forgotPassword.email'), type: 'text' }],
  changePassword: [
    { name: 'newPassword', placeholder: i18n.t('changePassword.password'), type: 'password' },
    { name: 'confirmNewPassword', placeholder: i18n.t('changePassword.confirmPassword'), type: 'password' },
  ],
};

export const navbarLinks: NavbarLink[] = [
  {
    name: 'Tinh thần khởi nghiệp',
    path: '/courses/business/entrepreneurship/',
  },
  {
    name: 'Giao tiếp',
    path: '/courses/business/communications/',
  },
  {
    name: 'Quản lý',
    path: '/courses/business/management/',
  },
  {
    name: 'Bán hàng',
    path: '/courses/business/sales/',
  },
  {
    name: 'Chiến lược kinh doanh',
    path: '/courses/business/strategy/',
  },
  {
    name: 'Hoạt động',
    path: '/courses/business/operations/',
  },
  {
    name: 'Quản lý dự án',
    path: '/courses/business/project-management/',
  },
  {
    name: 'Luật doanh nghiệp',
    path: '/courses/business/business-law/',
  },
  {
    name: 'BI và phân tích dữ liệu kinh doanh',
    path: '/courses/business/analytics-and-intelligence/',
  },
  {
    name: 'Nhân sự',
    path: '/courses/business/human-resources/',
  },
  {
    name: 'Ngành công nghiệp',
    path: '/courses/business/industry/',
  },
  {
    name: 'Thương mại điện tử',
    path: '/courses/business/e-commerce/',
  },
  {
    name: 'Truyền thông',
    path: '/courses/business/media/',
  },
  {
    name: 'Bất động sản',
    path: '/courses/business/real-estate/',
  },
  {
    name: 'Kinh doanh khác',
    path: '/courses/business/other-business/',
  },
];
