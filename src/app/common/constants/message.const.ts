export enum SystemMessage {
  UNKNOWN_ERROR = "Something's wrong",
}

export const VALIDATION = {
  REQUIRE: "Must not be empty",
  MIN_CHARACTERS: (min: number) => `Minimum ${min} characters`,
  MAX_CHARACTERS: (max: number) => `Maximum ${max} characters`,
  ALPHANUMERIC_NUMBER_ONLY: "Only include a-z, A-Z, 0-9",
  PASSWORD_MATCH: "Password does not match",
  PHONE_LENGTH: "Phone number must be 10 digits",
};
