import React , { Component } from 'react';
import styles from './Header.module.sass';
import HeadersContainer from './HeadersContainer/HeadersContainer';

class Header extends Component{

    render(){
        return(
            <header>
                <HeadersContainer/>
            </header>
        );
    }
}
export default Header;