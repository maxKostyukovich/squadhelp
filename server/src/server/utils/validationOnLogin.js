const Yup = require('yup');
const valid = Yup.object().shape({
  email: Yup.string()
    .email('E-mail is not valid')
    .required('E-mail is required'),
  password: Yup.string()
    .required('Password is required!'),
});
module.exports = valid;
