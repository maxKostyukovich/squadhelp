import Regex from './regex';
export const emailValidation = value => (
    Regex.EMAIL.test(value) ? undefined : 'Email is not valid format'
);

export const nameValidation = value => (
    Regex.NAME.test(value)? undefined: 'Name is not valid format'
);

export const passwordValidation = value => (
    Regex.PASSWORD.test(value)? undefined: 'Your password must be at least 8 characters, and include letters and numbers.');