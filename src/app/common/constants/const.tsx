import { FormField, SocialMediaLink } from '@app/types/helper';
import { Images } from '@assets/images';
import i18n from '@core/configs/i18n.config';

export const socialMediaLinks: SocialMediaLink[] = [
  { platform: 'Facebook', icon: <Images.FaFacebook />, link: '/' },
  { platform: 'XTwitter', icon: <Images.FaXTwitter />, link: '/' },
  { platform: 'Google', icon: <Images.FaGoogle />, link: '/' },
];

export const formFieldsChangePassword: FormField[] = [
  { name: 'newPassword', placeholder: i18n.t('changePassword.password'), type: 'password' },
  { name: 'confirmNewPassword', placeholder: i18n.t('changePassword.confirmPassword'), type: 'password' },
];
