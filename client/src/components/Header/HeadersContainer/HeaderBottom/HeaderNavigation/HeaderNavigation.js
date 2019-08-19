import React , { Component } from 'react';
import styles from './HeaderNavigation.module.sass';
import { Link } from 'react-router-dom';
import { bottomNavText } from '../../../../../constants/headerText';
class HeaderNavigation extends Component{

renderNav = () => {
  console.log("render");
  return bottomNavText.map((value) => {
    return <li key={value}>{ value }</li>;
  });
};

  render(){
    return(
      <div className={styles.container}>
        <ul>
          {this.renderNav()}
        </ul>
      </div>
    );
  }
}
export default HeaderNavigation;