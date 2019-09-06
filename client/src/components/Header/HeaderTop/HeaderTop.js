import React , { Component } from 'react';
import styles from './HeaderTop.module.sass';
import LoginButton from './LoginButton/LoginButton';
import connect from 'react-redux/es/connect/connect';
import { Link } from 'react-router-dom'
import { logoutAction } from "../../../actions/actionCreator";
import HeaderUserNavigation from './HeaderUserNavigation/HeaderUserNavigation';
import {squadLogo, STORAGE_KEYS} from "../../../constants";
import { bottomNavText } from '../../../constants/headerText'

class HeaderTop extends Component{
    renderMobileNavList = () => {
      const res = [];
      res.push(<li><div>
          <i className="fas fa-phone" > </i>
          <a className={styles.mobileTelLink} href="tel:(877)355-3585">(877)&nbsp;355-3585</a>
      </div></li>);
      bottomNavText.map((value => {
          res.push(<li><Link to={value.to}><span>{value.text}</span></Link></li>)
      }));
      if(this.props.user.firstName){
          res.push(<li onClick={() => this.props.logoutAction(localStorage.getItem(STORAGE_KEYS.REFRESH_TOKEN_TYPE))}><span>Logout</span></li>)
      } else{
          res.push(<li><Link  to={'/signup'}><span>Login/Sign up</span></Link></li>)
      }
      return [...res]
    };

    renderLoginButtons(){
        if(this.props.user.firstName){
            return (
              <div style={{display: 'flex',paddingRight: '10px'}}>
                <HeaderUserNavigation/>
                <LoginButton  link={'/'} text={<i className="far fa-envelope" style={{opacity: "0.5",marginLeft: "3px"}}></i>}/>
              </div>
            );
        } else {
                return(
                    <>
                    <LoginButton link="/login" text={"Login"}/>
                    <LoginButton link="/signup" text={"Sign up"}/>
                    </>
                );
        }
    }

    onBurgerClick = () => {
      console.log('cliick');
    };

    render(){
        return(
          <>
            <div className={styles.headerTop}>
                <div className={styles.headerRow}>
                    <div className={styles.phone}>
                        <i className="fas fa-phone" > </i>
                        <a className={styles.mobileTelLink} href="tel:(877)355-3585">(877)&nbsp;355-3585</a>
                        <Link to={'/'}><img className={styles.mobileLogo} src={squadLogo} alt={'logo'}/></Link>
                    </div>
                    <div className={styles.loginContainer}>
                        {this.renderLoginButtons()}
                        <div className={styles.mobileStyle} onClick={this.onBurgerClick}>
                            <i className="fas fa-bars"></i>
                        </div>
                    </div>
                </div>
            </div>
              <div className={styles.navContainer}>
                <ul className={styles.mobileNavList}>
                    {this.renderMobileNavList()}
                </ul>
              </div>
          </>
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