import React from 'react'
import styles from './HeaderUserNavigation.module.sass'
import connect from 'react-redux/es/connect/connect';
import { userDropList } from '../../../../../constants/headerText';
import {logoutAction, dropDownMenuAction} from "../../../../../actions/actionCreator";
import {STORAGE_KEYS, defaultSmallImgProfile} from "../../../../../constants";
import { Link } from 'react-router-dom'

function HeaderUserNavigation(props) {
  const renderDropList = () => {
    return userDropList.map(value => {
      return(
        <div className={styles.item}>
          <Link to={value.to}>
            <li onClick={value.text === "Logout"? () => props.loginAction(localStorage.getItem(STORAGE_KEYS.REFRESH_TOKEN_TYPE)):null}>
              <span>{value.text}</span>
            </li>
          </Link>
        </div>
      )
    })
  };

  return(
   <div className={styles.container}>
     <img src={defaultSmallImgProfile} alt={"Profile photo"} />
     <span>Hi, {props.user.firstName}</span>
     <div className={styles.wrapperList}>
        <ul>
          {renderDropList()}
        </ul>
     </div>
   </div>
  )
}

const mapStateToProps = (state) => {
  const { user } = state.userReducer;
  return {
    user,
  }
};

const mapDispatchToProps = (dispatch) => ({
  logoutAction: (data) => dispatch(logoutAction(data)),
  dropDownMenuAction: (isActive) => dispatch(dropDownMenuAction(isActive)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderUserNavigation)