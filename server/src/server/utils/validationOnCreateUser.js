const Yup = require('yup');
const valid = Yup.object().shape({
  firstName: Yup.string()
      .required('User Name is required!'),
  lastName: Yup.string()
    .required('User Name is required!'),
  email: Yup.string()
    .email('E-mail is not valid')
    .required('E-mail is required'),
  password: Yup.string()
    .min(8, 'Password has to be longer than 7 characters!')
    .matches(/^[a-zA-Z0-9]+$/, 'Password must contain only latin characters or numbers')
    .required('Password is required!'),
  role: Yup.string()
      .matches(/BUYER|CREATIVE/, 'Role is incorrect')
      .required('Role is require!')
});
module.exports = valid;
