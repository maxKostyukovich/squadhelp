import React , { Component } from 'react';
import styles from './LoginButton.module.sass';
import { Link } from 'react-router-dom'
class LoginButton extends Component{

    render(){
        return(
            <div onClick={this.props.logoutHandler? this.props.logoutHandler: console.log("not logout")} className={styles.container}>
                <Link className={styles.link} to={this.props.link}>{this.props.text}</Link>
            </div>
        );
    }
}
export default LoginButton;