import React , { Component } from 'react';
import styles from './LoginForm.module.sass';
import LoginHeader from './LoginHeader/LoginHeader';
import Header from "./Header/Header";
import * as validate from "../../utils/validation/validationFields";
import TextBox from "./TextBox/TextBox";
import { Field, reduxForm } from 'redux-form';
import SubmitButton from './SubmitButton/SubmitButton';
import SocialButton from './SocialButtons/SocialButton';
import { loginAction, resetErrorAction } from "../../actions/actionCreator";
import connect from 'react-redux/es/connect/connect';
import { compose } from 'redux';
import {toast, clearToast } from '../../utils/toast';

class LoginForm extends Component{
componentDidUpdate(prevProps, prevState, snapshot) {
    if(this.props.err){
        toast(this.props.err.message);
    }
}
componentDidMount() {
    this.props.resetErrorAction();
}
componentWillUnmount() {
    clearToast();
}

    render(){
        return(
            <div className={styles.container}>
                <LoginHeader  link={"/signup"} text={"Signup"}/>
                <div className={styles.formContainer}>
                    <Header title={"LOGIN TO YOUR ACCOUNT"}/>
                    <div className={styles.inputsContainer}>
                        <Field name={"email"} type={"text"} validate={[validate.isRequireValidation, validate.emailValidation]} label={"Email Address"} component={TextBox}/>
                        <Field name={"password"} validate={[validate.passwordValidation, validate.isRequireValidation]} type={"password"} label={"Password"} component={TextBox}/>
                        <SubmitButton  onClick={this.props.handleSubmit(this.props.loginAction)} submitText={"LOGIN"}/>
                        <SocialButton type={"facebook"} text={"Sign in with Facebook"} />
                        <SocialButton type={"google"} text={"Sign in with Google"}/>
                    </div>
                </div>
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch) => ({
    loginAction: (data) => dispatch(loginAction(data)),
    resetErrorAction: () => dispatch(resetErrorAction()),
});

const mapStateToProps = (state) => {
    const { user, isFetching, err } = state.userReducer;
    return {
        user,
        isFetching,
        err,
    }
};

export default compose(connect(mapStateToProps,mapDispatchToProps),reduxForm({
    form: 'loginForm',
}))(LoginForm);