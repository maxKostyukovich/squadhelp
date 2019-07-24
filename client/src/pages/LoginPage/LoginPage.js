import React , { Component } from 'react';
import styles from './LoginPage.module.sass';
import LoginForm from '../../components/LoginForm/LoginForm';
class LoginPage extends Component{

    render(){
        return(
            <div className={styles.container}>
                <LoginForm/>
            </div>
        );
    }
}
export default LoginPage;