import { REGEX, VALIDATION } from '@app/common/constants';
import { createValidation, requireMessage } from '@app/validations/common.validation';
import i18n from '@core/configs/i18n.config';

import * as Yup from 'yup';

export const editProfileValidationSchema = createValidation({
  firstName: Yup.string().required(requireMessage),
  lastName: Yup.string().required(requireMessage),
  email: Yup.string().required(requireMessage).matches(REGEX.EMAIL, i18n.t(VALIDATION.EMAIL_INVALID)),
  phone: Yup.string().required(requireMessage).matches(REGEX.PHONE_NUMBER, i18n.t(VALIDATION.PHONE_LENGTH)),
});
