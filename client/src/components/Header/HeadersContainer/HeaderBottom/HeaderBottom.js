import React , { Component } from 'react';
import styles from './HeaderBottom.module.sass';
import { Link } from 'react-router-dom';
import ContestButton from './ContestButton/ContestButton';
import queryString from 'query-string'
import HeaderNavigation from "./HeaderNavigation/HeaderNavigation";
class HeaderBottom extends Component{

    render(){
        return(
            <div className={styles.container}>
                <div className={styles.wrap}>
                    <Link to={'/'}>
                        <img alt="logo" src={"https://www.squadhelp.com/images/squadhelp-logo-color.jpg"}/>
                    </Link>
                    <div className={styles.navContainer}>
                        <HeaderNavigation/>
                        <Link to={{pathname: '/contesttype'}}>
                            <ContestButton text={"START CONTEST"}/>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}
export default HeaderBottom;