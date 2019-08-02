import Regex from './regex';
export const emailValidation = value => (
    Regex.EMAIL.test(value) ? undefined : 'Email is not valid format'
);

export const isRequireValidation = value => (
    value ? undefined : "Field is required"
);

export const passwordValidation = value => (
    Regex.PASSWORD.test(value)? undefined: 'Your password must be at least 8 characters, and include letters and numbers.');

export const confirmPasswordValidation = (value, allValues) => {
  return allValues.password && value === allValues.password ? undefined : "Password confirmation needs to match original password";
};