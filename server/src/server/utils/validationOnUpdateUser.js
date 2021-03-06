const Yup = require('yup');
const valid = Yup.object().shape({
    email: Yup.string()
        .email('E-mail is not valid'),
    password: Yup.string()
        .min(8, 'Password has to be longer than 7 characters!')
        .matches(/^[a-zA-Z0-9]+$/, 'Password must contain only latin characters or numbers'),
    role: Yup.string()
        .matches(/BUYER|CREATIVE/, 'Role is incorrect')
});
module.exports = valid;
