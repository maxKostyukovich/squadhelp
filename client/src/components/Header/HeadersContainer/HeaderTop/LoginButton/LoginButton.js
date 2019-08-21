import React , { Component } from 'react';
import styles from './LoginButton.module.sass';
import { Link } from 'react-router-dom'
function LoginButton(props) {
        return(
            <div className={styles.container}>
                <Link className={styles.link} to={props.link}>{props.text}</Link>
            </div>
        );
}
export default LoginButton;