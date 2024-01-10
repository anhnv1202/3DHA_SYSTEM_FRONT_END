export enum SystemMessage {
  UNKNOWN_ERROR = "Something's wrong",
}

export const VALIDATION = {
  REQUIRE: 'validation.must-not-be-empty',
  MIN_CHARACTERS: 'validation.minimum',
  MAX_CHARACTERS: 'validation.maximum',
  ALPHANUMERIC_NUMBER_ONLY: 'validation.only-include-a-z,A-Z,0-9',
  PASSWORD_MATCH: 'validation.password-does-not-match',
  PHONE_LENGTH: 'validation.phone-number-must-be-10-digits',
  EMAIL_INVALID: 'validation.email-invalid',
};
