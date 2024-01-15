import { REGEX, VALIDATION } from '@app/common/constants';
import { createValidation } from '@app/validations/common.validation';
import i18n from '@core/configs/i18n.config';

import * as Yup from 'yup';

const requireMessage = i18n.t(VALIDATION.REQUIRE);

export const editProfileValidationSchema = createValidation({
  firstName: Yup.string()
    .required(requireMessage)
    .min(1, i18n.t(VALIDATION.MIN_CHARACTERS, { min: 1 }))
    .max(40, i18n.t(VALIDATION.MAX_CHARACTERS, { max: 40 }))
    .matches(REGEX.FIRSTNAME, i18n.t(VALIDATION.ALPHANUMERIC_NUMBER_ONLY)),
  lastName: Yup.string()
    .required(requireMessage)
    .min(1, i18n.t(VALIDATION.MIN_CHARACTERS, { min: 1 }))
    .max(40, i18n.t(VALIDATION.MAX_CHARACTERS, { max: 40 }))
    .matches(REGEX.LASTNAME, i18n.t(VALIDATION.ALPHANUMERIC_NUMBER_ONLY)),
  email: Yup.string().required(requireMessage).matches(REGEX.EMAIL, i18n.t(VALIDATION.EMAIL_INVALID)),
  phone: Yup.string().required(requireMessage).matches(REGEX.PHONE_NUMBER, i18n.t(VALIDATION.PHONE_LENGTH)),
});
