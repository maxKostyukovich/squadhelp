import React , { Component } from 'react';
import styles from './HeaderNavigation.module.sass';
import { Link } from 'react-router-dom';
import { bottomNavText } from '../../../../../constants/headerText';
class HeaderNavigation extends Component{

  renderDropMenu = (item) => {
    return item.dropList.map(value1 => {
      return <React.Fragment key={value1.text}><li>
        <Link to={value1.to} >
          <span>{value1.text}</span>
        </Link>
      </li>
        {value1.line? <hr style={{border: "1px solid #e5e5e5",width: "100%"}}/>: null}
        </React.Fragment>
    })
  };

renderNav = () => {
  return bottomNavText.map((value) => {
    return <div key={value.text} className={styles.hoverWrap}>
      <Link to={value.to}>
        <li className={styles.item}>
          <span>{ value.text }</span>
          <i className="fas fa-angle-down" style={{opacity: "0.3",marginLeft: "3px"}}></i>
        </li>
      </Link>
      <div className={styles.dropDownList}>
          <div className={styles.arrow}></div>
          <ul>
            { this.renderDropMenu(value) }
          </ul>
      </div>
    </div>;
  });
};

  render(){
    return(
      <div className={styles.container}>
        <ul className={styles.navigation}>
          {this.renderNav()}
        </ul>
      </div>
    );
  }
}
export default HeaderNavigation;