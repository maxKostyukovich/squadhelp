import React , { Component } from 'react';
import styles from './Header.module.sass';

class Header extends Component{

    render(){
        return(
            <div className={styles.container}>
                <h2 className={styles.formTitle}>{this.props.title}</h2>
                <span className={styles.helpText}>{this.props.text}</span>
            </div>
        );
    }
}
export default Header;