import React from 'react'
import styles from './HeaderUserNavigation.module.sass'
import connect from 'react-redux/es/connect/connect';
import { userDropList, userAdminDropList } from '../../../../constants/headerText';
import {logoutAction, dropDownMenuAction, outClickAction} from "../../../../actions/actionCreator";
import {STORAGE_KEYS, defaultSmallImgProfile, ROLE} from "../../../../constants";
import { Link } from 'react-router-dom'

class HeaderUserNavigation extends React.Component {
  constructor(props){
    super(props);
    this.toggleContainer = React.createRef();
  }
  clickHandler = () => {
    this.props.dropDownMenuAction(!this.props.headerMenuState);
  };
  outClickHandler = (e) => {
    if(this.props.headerMenuState && !this.toggleContainer.current.contains(e.target))
    this.props.outClickAction();
  };
  renderDropList = () => {
    const dropList = this.props.user.role === ROLE.ADMIN?userAdminDropList:userDropList;
    return dropList.map(value => {
      return(
        <div key={value.text}>
          <Link to={value.to}>
            <li onClick={value.text === "Logout"? () => this.props.logoutAction(localStorage.getItem(STORAGE_KEYS.REFRESH_TOKEN_TYPE)):null}>
              <span>{value.text}</span>
            </li>
          </Link>
        </div>
      )
    })
  };

  componentDidMount() {
    window.addEventListener('click', this.outClickHandler)
  }
  componentWillUnmount() {
    window.removeEventListener('click', this.outClickHandler);
  }
  render(){
    return(
      <div  ref={this.toggleContainer} className={styles.container} onClick={this.clickHandler}>
        <div className={styles.center}>
          <img src={defaultSmallImgProfile} alt={"Profile avatar"} />
          <span id={styles.congratulation}>Hi, {this.props.user.firstName}</span>
          <i className="fas fa-angle-down" style={{opacity: "0.3",marginLeft: "3px"}}></i>
        </div>
        {this.props.headerMenuState && (
          <div className={styles.wrapperList}>
            <ul>
              {this.renderDropList()}
            </ul>
          </div>
        )}
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  const { user } = state.userReducer;
  const { headerMenuState } = state.flagsReducer;
  return {
    user,
    headerMenuState,
  }
};

const mapDispatchToProps = (dispatch) => ({
  logoutAction: (data) => dispatch(logoutAction(data)),
  dropDownMenuAction: (isActive) => dispatch(dropDownMenuAction(isActive)),
  outClickAction: () => dispatch(outClickAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderUserNavigation)