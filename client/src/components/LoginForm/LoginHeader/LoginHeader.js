import React , { Component } from 'react';
import styles from './LoginHeader.module.sass';
import { Link } from 'react-router-dom';
class LoginHeader extends Component{

    render(){
        return(
            <div className={styles.container}>
                <img alt="logo" src={"https://www.squadhelp.com/img/logo.png"}/>
                <div className={styles.linkContainer}>
                    <Link className={styles.link} to={this.props.link}>{ this.props.text }</Link>
                </div>
            </div>
        );
    }
}
export default LoginHeader;