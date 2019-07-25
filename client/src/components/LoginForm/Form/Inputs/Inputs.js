import React , { Component } from 'react';
import styles from './Inputs.module.sass';
import TextBox from './TextBox/TextBox';
import { Field, reduxForm } from 'redux-form'
import SubmitButton from './SubmitButton/SubmitButton'

class Inputs extends Component{

    render(){
        return(
                <div className={styles.container}>
                    <Field name={"email"} type={"text"} label={"Email Address"} component={TextBox}/>
                    <Field name={"password"} type={"text"} label={"Password"} component={TextBox}/>
                    <SubmitButton  onClick={this.props.handleSubmit(this.props.submitHandler)} submitText={"LOGIN"}/>
                </div>
        );
    }
}
export default reduxForm({
    form: 'loginForm',
})(Inputs)