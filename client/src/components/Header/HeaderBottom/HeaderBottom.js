import React , { Component } from 'react';
import styles from './HeaderBottom.module.sass';
import { Link } from 'react-router-dom';
import ContestButton from './ContestButton/ContestButton';
import { squadLogo } from '../../../constants'
import queryString from 'query-string'
import HeaderNavigation from "./HeaderNavigation/HeaderNavigation";
class HeaderBottom extends Component{

    render(){
        return(
            <div className={styles.container}>
                <div className={styles.wrap}>
                    <Link to={'/'}>
                        <img alt="logo" src={squadLogo}/>
                    </Link>
                    <div className={styles.navContainer}>
                        <HeaderNavigation/>
                            <ContestButton text={"START CONTEST"} link={'/contest'}/>
                    </div>
                </div>
            </div>
        );
    }
}
export default HeaderBottom;