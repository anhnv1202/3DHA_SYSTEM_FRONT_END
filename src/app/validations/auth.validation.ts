import { REF, REGEX, VALIDATION } from '@app/common/constants';
import { createValidation } from '@app/validations/common.validation';
import * as Yup from 'yup';

export const loginValidationSchema = createValidation({
  username: Yup.string().required(VALIDATION.REQUIRE),
  password: Yup.string().required(VALIDATION.REQUIRE),
});

export const signUpValidationSchema = createValidation({
  username: Yup.string()
    .min(6, VALIDATION.MIN_CHARACTERS(6))
    .max(40, VALIDATION.MIN_CHARACTERS(40))
    .matches(REGEX.USERNAME, VALIDATION.ALPHANUMERIC_NUMBER_ONLY),
  password: Yup.string().required(VALIDATION.REQUIRE),
  confirmPassword: Yup.string()
    .required(VALIDATION.REQUIRE)
    .oneOf([Yup.ref(REF.PASSSWORD)], VALIDATION.PASSWORD_MATCH),
  phone: Yup.string().required(VALIDATION.REQUIRE).matches(REGEX.PHONE_NUMBER, VALIDATION.PHONE_LENGTH),
});
