import React , { Component } from 'react';
import styles from './HeaderTop.module.sass';
import LoginButton from './LoginButton/LoginButton';
import connect from 'react-redux/es/connect/connect';
import { logoutAction } from "../../../../actions/actionCreator";
import HeaderUserNavigation from './HeaderUserNavigation/HeaderUserNavigation';
class HeaderTop extends Component{
    renderLoginButtons(){
        if(this.props.user.email){
            return (
              <>
                <HeaderUserNavigation/>
                  </>
            );
        } else {
                    return(
                        <>
                        <LoginButton link="/login/" text={"Login"}/>
                        <LoginButton link="/signup/" text={"Sign up"}/>
                        </>
                    );
        }
    }

    render(){

        return(
            <div className={styles.headerTop}>
                <div className={styles.headerRow}>
                    <div className={styles.phone}>
                        <i className="fas fa-phone" > </i>
                        <a href="tel:(877)355-3585">(877)&nbsp;355-3585</a>
                    </div>
                    <div className={styles.loginContainer}>
                        {this.renderLoginButtons()}
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    const { user } = state.userReducer;
    return {
        user,
    }
};
const mapDispatchToProps = (dispatch) => ({
    logoutAction: (data) => dispatch(logoutAction(data)),
});

export default connect(mapStateToProps,mapDispatchToProps)(HeaderTop);