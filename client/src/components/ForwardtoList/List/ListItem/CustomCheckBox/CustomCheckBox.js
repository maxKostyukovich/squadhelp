import React, { Component } from 'react'
import styles from './CustomCheckBox.module.sass';
import check from '../../../../../images/check.png';
import connect from 'react-redux/es/connect/connect';


class CustomCheckBox extends Component {
isCheckedStyles(){
    if(this.props.isBanned){
        return {backgroundColor:"#48C1C2"}
    } else {
        return {backgroundColor: "#DBE0E6"}
    }
}
    render(){
        return(
            <div onClick={this.props.clickHandler} className={styles.checkboxContainer} style={this.isCheckedStyles()}>
                <img src={check} alt={"check"}/>
            </div>
        );
    }

}

export default CustomCheckBox;