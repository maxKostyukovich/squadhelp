import React, { Component } from 'react'
import styles from './ListItem.module.sass';
import Avatar from "./Avatar/Avatar";
import CustomCheckBox from './CustomCheckBox/CustomCheckBox';

class ListItem extends Component {

    constructor(props){
        super(props);
    }
    onChange = () => {
        this.props.clickHandler(this.props.user)
    };
    render(){
        return(
            <div className={styles.itemListContainer}>
                <div style={{display: "flex"}}>
                    <Avatar avatarImage={this.props.user.img}/>
                    <div className={styles.personalInfo}>
                        <span className={styles.fullName}>{this.props.user.fullName}</span>
                        <span className={styles.level}>level {this.props.user.level}</span>
                    </div>
                </div>
                <CustomCheckBox clickHandler={this.onChange} isChecked={this.props.user.isChecked}/>
            </div>
        );
    }
}
export default ListItem;