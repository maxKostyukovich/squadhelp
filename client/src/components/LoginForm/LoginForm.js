import React , { Component } from 'react';
import styles from './LoginForm.module.sass';
import LoginHeader from './LoginHeader/LoginHeader';
import Header from "./Header/Header";
import * as validate from "../../utils/validation/validationFields";
import TextBox from "./TextBox/TextBox";
import { Field, reduxForm } from 'redux-form';
import SubmitButton from './SubmitButton/SubmitButton';
import {loginAction} from "../../actions/actionCreator";
import connect from 'react-redux/es/connect/connect';
import { compose } from 'redux';

class LoginForm extends Component{
    render(){
        return(
            <div className={styles.container}>
                <LoginHeader  link={"/signup/"} text={"Signup"}/>
                <div className={styles.formContainer}>
                    <Header title={"LOGIN TO YOUR ACCOUNT"}/>
                    <div className={styles.inputsContainer}>
                        <Field name={"email"} type={"text"} validate={[validate.isRequireValidation, validate.emailValidation]} label={"Email Address"} component={TextBox}/>
                        <Field name={"password"} validate={[validate.passwordValidation, validate.isRequireValidation]} type={"password"} label={"Password"} component={TextBox}/>
                        <SubmitButton  onClick={this.props.handleSubmit(this.props.loginAction)} submitText={"LOGIN"}/>
                    </div>
                </div>
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch) => ({
    loginAction: (data) => dispatch(loginAction(data)),
});

const mapStateToProps = (state) => {
    const { user, isFetching, error } = state.userReducer;
    return {
        user,
        isFetching,
        error,
    }
};

export default compose(connect(mapStateToProps,mapDispatchToProps),reduxForm({
    form: 'loginForm',
}))(LoginForm);