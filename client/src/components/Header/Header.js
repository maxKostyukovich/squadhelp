import React , { Component } from 'react';
import styles from './Header.module.sass';
import HeaderTop from './HeaderTop/HeaderTop'
import HeaderBottom from './HeaderBottom/HeaderBottom'
class Header extends Component{

    render(){
        return(
            <header className={styles.container}>
                <HeaderTop/>
                <HeaderBottom/>
            </header>
        );
    }
}
export default Header;