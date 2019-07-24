import React , { Component } from 'react';
import styles from './HeadersContainer.module.sass';
import HeaderTop from './HeaderTop/HeaderTop';
import HeaderBottom from './HeaderBottom/HeaderBottom';
class HeadersContainer extends Component{

    render(){
        return(
            <>
            <div className={styles.container}>
                <HeaderTop/>
                <HeaderBottom/>
            </div>
            </>
        );
    }
}
export default HeadersContainer;