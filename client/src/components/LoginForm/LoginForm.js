import React , { Component } from 'react';
import styles from './LoginForm.module.sass';
import LoginHeader from './LoginHeader/LoginHeader';
import Form from './Form/Form';

class LoginForm extends Component{
    render(){
        return(
            <div className={styles.container}>
                <LoginHeader  link={"/signup/"} text={"Signup"}/>
                <Form redirect={this.props.redirect} submitHandler={this.props.submitHandler}/>
            </div>
        );
    }
}
export default LoginForm;