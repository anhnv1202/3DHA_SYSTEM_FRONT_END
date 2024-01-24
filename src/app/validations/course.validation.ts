import { REGEX, VALIDATION } from '@app/common/constants';
import { createValidation, requireMessage } from '@app/validations/common.validation';
import i18n from '@core/configs/i18n.config';
import * as Yup from 'yup';

export const createCourseValidationSchema = createValidation({
  name: Yup.string().required(requireMessage),
  description: Yup.string().required(requireMessage),
  price: Yup.string().required(requireMessage).matches(REGEX.PRICE, i18n.t(VALIDATION.PRICE_INVALID)),
});
