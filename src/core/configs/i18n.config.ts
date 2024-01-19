import { APP_LOCALES, Locales } from '@app/common/constants/common.const';
import translationEN from '@assets/lang/en.json';
import translationVI from '@assets/lang/vi.json';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: translationEN,
  },
  vi: {
    translation: translationVI,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: Locales.EN,
  fallbackLng: Locales.EN,
  supportedLngs: APP_LOCALES,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
