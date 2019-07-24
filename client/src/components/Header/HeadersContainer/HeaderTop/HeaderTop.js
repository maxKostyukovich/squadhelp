import React , { Component } from 'react';
import styles from './HeaderTop.module.sass';
import LoginButton from './LoginButton/LoginButton';
class HeaderTop extends Component{

    render(){
        return(
            <div className={styles.headerTop}>
                <div className={styles.headerRow}>
                    <div className={styles.phone}>
                        <i className="fas fa-phone" > </i>
                        <a href="tel:(877)355-3585">(877)&nbsp;355-3585</a>
                    </div>
                    <div className={styles.loginContainer}>
                        <LoginButton link="/login/" text={"Login"}/>
                        <LoginButton link="/signup/" text={"Sign up"}/>
                    </div>
                </div>
            </div>
        );
    }
}
export default HeaderTop;