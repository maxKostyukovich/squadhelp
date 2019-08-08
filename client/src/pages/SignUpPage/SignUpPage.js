import React , { Component } from 'react';
import styles from './SignUpPage.module.sass';
import LoginHeader from "../../components/LoginForm/LoginHeader/LoginHeader";
import Header from "../../components/LoginForm/Header/Header";
import * as validate from "../../utils/validation/validationFields";
import TextBox from "../../components/LoginForm/TextBox/TextBox";
import SubmitButton from "../../components/LoginForm/SubmitButton/SubmitButton";
import { Field, reduxForm } from 'redux-form';
import connect from 'react-redux/es/connect/connect';
import { compose } from 'redux';
import RadioButton from '../../components/LoginForm/RadioButton/RadioButton';
import { signupAction, resetErrorAction } from "../../actions/actionCreator";
import { ROLE } from "../../constants";
import {toast, clearToast } from '../../utils/toast';
import SocialButton from "../../components/LoginForm/SocialButtons/SocialButton";

class SignUpPage extends Component{
    showErrorMessage = () => {
        if(this.props.err) {
            toast(this.props.err.message)
        }
    };
    componentDidMount() {
        this.props.resetErrorAction();
    }
    componentWillUnmount() {
        clearToast();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.showErrorMessage()
    }

    render(){
        return(
            <div className={styles.container}>
                <div className={styles.signupFormContainer}>
                <LoginHeader  link={"/login"} text={"Login"}/>
                <div className={styles.formContainer}>
                    <Header title={"CREATE AN ACCOUNT"} text={"We always keep your name and email address private."}/>
                    <div className={styles.inputsContainer}>
                        <div className={styles.textBoxContainer}>
                            <Field name={"firstName"} type={"text"} validate={[validate.isRequireValidation]} label={"First name"} component={TextBox}/>
                            <Field name={"lastName"} validate={[validate.isRequireValidation]} type={"text"} label={"Last name"} component={TextBox}/>
                        </div>
                        <div className={styles.textBoxContainer}>
                            <Field name={"email"} type={"text"} validate={[validate.isRequireValidation, validate.emailValidation]} label={"Email Address"} component={TextBox}/>
                        </div>
                        <div className={styles.textBoxContainer}>
                            <Field name={"password"} validate={[validate.passwordValidation, validate.isRequireValidation]} type={"password"} label={"Password"} component={TextBox}/>
                            <Field name={"passwordConformation"} validate={[validate.confirmPasswordValidation, validate.isRequireValidation]} type={"password"} label={"Password Conformation"} component={TextBox}/>
                        </div>
                        <Field id='radioBuyer' validate={[validate.isRequireValidation]} name='role' component={RadioButton} type='radio' value={ROLE.BUYER} title="Join As a Buyer" description={"I am looking for a Name, Logo or Tagline for my business, brand or product."}/>
                        <Field id='radioCreative' validate={[validate.isRequireValidation]} name='role' component={RadioButton} type='radio' value={ROLE.CREATIVE} title="Join As a Creative" description={"I plan to submit name ideas, Logo designs or sell names in Domain Marketplace."}/>
                        <SubmitButton  onClick={this.props.handleSubmit(this.props.signupAction)} submitText={"Create account"}/>
                        <SocialButton type={"facebook"} text={"Sign up with Facebook"} />
                        <SocialButton type={"google"} text={"Sign up with Google"}/>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch) => ({
    signupAction: (data) => dispatch(signupAction(data)),
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
    form: 'signupForm',
}))(SignUpPage);