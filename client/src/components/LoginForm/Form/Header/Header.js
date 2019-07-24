import React , { Component } from 'react';
import styles from './Header.module.sass';

class Header extends Component{

    render(){
        return(
            <div className={styles.container}>
                <h2 className={styles.formTitle}>{this.props.title}</h2>
            </div>
        );
    }
}
export default Header;