import React , { Component } from 'react';
import styles from './HeaderBottom.module.sass';
import { Link } from 'react-router-dom';
import ContestButton from './ContestButton/ContestButton';
class HeaderBottom extends Component{

    render(){
        return(
            <div className={styles.container}>
                <div className={styles.wrap}>
                    <Link to={{pathname: '/',query: {id: "Hi"}}}>
                        <img alt="logo" src={"https://www.squadhelp.com/images/squadhelp-logo-color.jpg"}/>
                    </Link>
                    <Link to={{pathname: '/contesttype',query: {id: "Hi"}}}>
                        <ContestButton text={"START CONTEST"}/>
                    </Link>
                </div>
            </div>
        );
    }
}
export default HeaderBottom;