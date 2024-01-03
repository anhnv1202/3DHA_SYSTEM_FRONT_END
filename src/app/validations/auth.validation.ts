import { REGEX, VALIDATION } from "@app/common/constants";
import { createValidation } from "@app/common/validations/common.validation";
import * as Yup from "yup";

export const loginValidationSchema = createValidation({
  username: Yup.string().required(VALIDATION.REQUIRE),
  password: Yup.string().required(VALIDATION.REQUIRE),
});

export const signUpValidationSchema = createValidation({
  username: Yup.string()
    .min(6, VALIDATION.MIN_CHARACTERS(6))
    .max(40, VALIDATION.MIN_CHARACTERS(40))
    .matches(REGEX.username, VALIDATION.ALPHANUMERIC_NUMBER_ONLY),
  password: Yup.string().required(VALIDATION.REQUIRE),
  confirmPassword: Yup.string()
    .required(VALIDATION.REQUIRE)
    .oneOf([Yup.ref("password")], VALIDATION.PASSWORD_MATCH),
  phone: Yup.string()
    .required(VALIDATION.REQUIRE)
    .matches(REGEX.phoneNumber, VALIDATION.PHONE_LENGTH),
});
