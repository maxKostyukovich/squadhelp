import React , { Component } from 'react';
import styles from './LoginButton.module.sass';
import { Link } from 'react-router-dom'
import {STORAGE_KEYS} from "../../../../../constants";
class LoginButton extends Component{
    constructor(props){
        super(props);
        this.handler = this.handler.bind(this);
    }
handler() {
    this.props.logoutHandler(localStorage.getItem(STORAGE_KEYS.REFRESH_TOKEN_TYPE));
}
    render(){
        return(
            <div onClick={this.props.logoutHandler? this.handler: null} className={styles.container}>
                <Link className={styles.link} to={this.props.link}>{this.props.text}</Link>
            </div>
        );
    }
}
export default LoginButton;