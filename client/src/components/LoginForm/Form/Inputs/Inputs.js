import React , { Component } from 'react';
import styles from './Inputs.module.sass';
import TextBox from './TextBox/TextBox';
import { Field, reduxForm } from 'redux-form'


class Inputs extends Component{

    render(){
        return(
            <div className={styles.container}>
                <form>
                    <Field name={"email"} type={"text"} placeholder={"Email Address"} component={TextBox}/>
                    <Field name={"password"} type={"text"} placeholder={"Password"} component={TextBox}/>
                </form>
            </div>

        );
    }
}
export default reduxForm({
    from: 'loginForm',
})(Inputs)