import React , { Component } from 'react';
import styles from './Inputs.module.sass';
import TextBox from './TextBox/TextBox';
import { Field, reduxForm } from 'redux-form'
import SubmitButton from './SubmitButton/SubmitButton'
import {loginAction} from "../../../../actions/actionCreator";
import connect from 'react-redux/es/connect/connect';
import { compose } from 'redux'
import * as validate from '../../../../utils/validation/validationFields';

class Inputs extends Component{

    render(){
        return(
                <div className={styles.container}>
                    <Field name={"email"} type={"text"} validate={validate.emailValidation} label={"Email Address"} component={TextBox}/>
                    <Field name={"password"} validate={validate.passwordValidation} type={"text"} label={"Password"} component={TextBox}/>
                    <SubmitButton  onClick={this.props.handleSubmit(this.props.loginAction)} submitText={"LOGIN"}/>
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
        error
    }
};
export default compose(connect(mapStateToProps,mapDispatchToProps),reduxForm({
    form: 'loginForm',
}))(Inputs);
